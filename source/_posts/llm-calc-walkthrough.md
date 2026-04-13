---
title: LLM 计算过程分析
categories:
  - [gallery]
date: 2026-04-13 16:54:48
tags: llm
featured_image:
---

> Before we start... 下文都是基于 `Qwen/Qwen3-4B` 模型开展的代码分析，其他模型可能存在配置差异。

## 输入 - 嵌入层

### 分词 / Tokenization

这一层其实应该还带有前置的文本 - 向量转化过程，但是这个过程比较显而易见。用库来写大概是这样的：

```py
text = "Hello, world!"
input_ids = tokenizer(text, return_tensors="pt") # .to(device)
# {'input_ids': tensor([[9707,   11, 1879,    0]]), 'attention_mask': tensor([[1, 1, 1, 1]])}
# torch.Size([1, 4])
```

如果上面的 return_tensors="pt" 没有加上，那么得到的 input_ids 是一个 list，而非 tensor。

---

### 嵌入层 / Embedding

从输入到嵌入的过程就是按照 token 在表中查找每个 token 对应的向量，得到一个二维矩阵 `E[seq_len * embedding_dim]`

```py
print(model.embed_tokens) # Embedding(151936, 2560)
embeddings = model.embed_tokens(input_ids["input_ids"])
# tensor([[[-2.4170e-02, -3.8910e-03,  3.6621e-03,  ..., -5.8899e-03,
#            2.1484e-02, -8.6060e-03],
#          [-4.1260e-02, -2.6367e-02, -5.8289e-03,  ..., -2.9907e-02,
#           -2.6855e-02,  8.3618e-03],
#          [-8.7891e-03,  2.7100e-02,  1.7405e-05,  ..., -1.1414e-02,
#           -2.3804e-02, -1.7578e-02],
#          [-2.8687e-02,  1.1719e-02,  1.0437e-02,  ..., -5.4626e-03,
#           -2.6978e-02, -9.6436e-03]]], ...)
# torch.Size([1, 4, 2560])
```

---

### 位置嵌入 / Positional Embedding

位置嵌入是这样一个向量，其表示了一个 token 在序列中的位置。对于 Qwen3 来说，位置嵌入是通过旋转位置编码（Rotary Position Embedding）实现的。其核心思想是将位置编码与输入的 token 嵌入进行旋转操作，从而使模型能够捕捉到序列中 token 的相对位置信息。

计算结果是一个与输入嵌入维度相同的向量（对于这个例子来讲，就是 `torch.Size([1, 4, 2560])`）表示了每个 token 在序列中的位置。这个位置嵌入会与输入嵌入结合。

---

### 输入 - 嵌入层对应代码：

[modular_qwen3.py#L110](https://github.com/huggingface/transformers/blob/2c498dfdab2b11334a2dfe113490c9007a6b3366/src/transformers/models/qwen3/modular_qwen3.py#L110) 定义了 `class Qwen3ForCausalLM(Qwen2ForCausalLM)`，完全复用父类的 `forward` 方法；

[modeling_qwen2.py#417](https://github.com/huggingface/transformers/blob/2c498dfdab2b11334a2dfe113490c9007a6b3366/src/transformers/models/qwen2/modeling_qwen2.py#L417) 定义 `class Qwen2ForCausalLM(Qwen2PreTrainedModel, ...)`，其 `forward` 方法中调用了 `self.model(...)`；对应 [modeling_qwen2.py#L353](https://github.com/huggingface/transformers/blob/2c498dfdab2b11334a2dfe113490c9007a6b3366/src/transformers/models/qwen2/modeling_qwen2.py#L353) ，对 embedding 的计算在 L366:

```py
if inputs_embeds is None:
    inputs_embeds = self.embed_tokens(input_ids)
```

[modeling_qwen2.py#L396](https://github.com/huggingface/transformers/blob/2c498dfdab2b11334a2dfe113490c9007a6b3366/src/transformers/models/qwen2/modeling_qwen2.py#L396) 涉及位置嵌入的计算：`position_embeddings = self.rotary_emb(hidden_states, position_ids)`，其中，`hidden_states` 现在就是 `inputs_embeds`，`position_ids` 计算在L#372: `position_ids = torch.arange(inputs_embeds.shape[1], device=inputs_embeds.device) + past_seen_tokens; position_ids = position_ids.unsqueeze(0)` 也就是一个从 0 到 seq_len-1 的向量。

`self.rotary_emb` 定义在 [L#343 -> L#51](https://github.com/huggingface/transformers/blob/2c498dfdab2b11334a2dfe113490c9007a6b3366/src/transformers/models/qwen2/modeling_qwen2.py#L51)。其 forward 方法定义在 #L102


## Transformer 层

WIP

### Transformer 层对应代码

Qwen3/Qwen3-4B 有 36 个 Transformer 层，定义在 [modeling_qwen2.py#L340](https://github.com/huggingface/transformers/blob/2c498dfdab2b11334a2dfe113490c9007a6b3366/src/transformers/models/qwen2/modeling_qwen2.py#L340)：`self.layers = nn.ModuleList([Qwen2DecoderLayer(config, layer_idx) for layer_idx in range(config.num_hidden_layers)])`

每层结构定义在 [#L207](https://github.com/huggingface/transformers/blob/2c498dfdab2b11334a2dfe113490c9007a6b3366/src/transformers/models/qwen2/modeling_qwen2.py#L207) 或者 [modeling_qwen3.py#L294](https://github.com/huggingface/transformers/blob/6db69b9123b3d9fc447fec2638687970c4c5e4ce/src/transformers/models/qwen3/modeling_qwen3.py#L294)

```py
def __init__(self, config: Qwen3Config, layer_idx: int):
    super().__init__()
    self.hidden_size = config.hidden_size # 2560

    self.self_attn = Qwen3Attention(config=config, layer_idx=layer_idx)

    self.mlp = Qwen3MLP(config)
    self.input_layernorm = Qwen3RMSNorm(config.hidden_size, eps=config.rms_norm_eps) # 2560, 1e-06
    self.post_attention_layernorm = Qwen3RMSNorm(config.hidden_size, eps=config.rms_norm_eps) # 2560, 1e-06
```

`Qwen3Attention` 定义在 [modeling_qwen3.py#L222](https://github.com/huggingface/transformers/blob/6db69b9123b3d9fc447fec2638687970c4c5e4ce/src/transformers/models/qwen3/modeling_qwen3.py#L222)

```py
def __init__(self, config: Qwen3Config, layer_idx: int):
    super().__init__()
    self.layer_type = config.layer_types[layer_idx] if hasattr(config, "layer_types") else None 
      # 全部为 full-attention
    self.config = config
    self.layer_idx = layer_idx 
      # 0 - 35
    self.head_dim = getattr(config, "head_dim", config.hidden_size // config.num_attention_heads)
      # 128
    self.num_key_value_groups = config.num_attention_heads // config.num_key_value_heads
      # 32 // 8 = 4
    self.scaling = self.head_dim**-0.5
      # 1 / sqrt(128) = 0.08838834764831845
    self.attention_dropout = config.attention_dropout
      # 0.0
    self.is_causal = True

    self.q_proj = nn.Linear(
        config.hidden_size, config.num_attention_heads * self.head_dim, bias=config.attention_bias
        # 2560, 32 * 128 = 4096, False
    )
    self.k_proj = nn.Linear(
        config.hidden_size, config.num_key_value_heads * self.head_dim, bias=config.attention_bias
    )
    self.v_proj = nn.Linear(
        config.hidden_size, config.num_key_value_heads * self.head_dim, bias=config.attention_bias
    )
    self.o_proj = nn.Linear(
        config.num_attention_heads * self.head_dim, config.hidden_size, bias=config.attention_bias
        # 32 * 128, 2560, False
    )
    self.q_norm = Qwen3RMSNorm(self.head_dim, eps=config.rms_norm_eps)  # unlike olmo, only on the head dim!
      # 128, 1e-06
    self.k_norm = Qwen3RMSNorm(self.head_dim, eps=config.rms_norm_eps)  # thus post q_norm does not need reshape
    self.sliding_window = config.sliding_window if self.layer_type == "sliding_attention" else None
```

`Qwen3MLP` 定义在 [modeling_qwen3.py#L70](https://github.com/huggingface/transformers/blob/6db69b9123b3d9fc447fec2638687970c4c5e4ce/src/transformers/models/qwen3/modeling_qwen3.py#L70)

```py
def __init__(self, config):
    super().__init__()
    self.config = config
    self.hidden_size = config.hidden_size
    # 2560
    self.intermediate_size = config.intermediate_size
    # 9728
    self.gate_proj = nn.Linear(self.hidden_size, self.intermediate_size, bias=False)
    self.up_proj = nn.Linear(self.hidden_size, self.intermediate_size, bias=False)
    self.down_proj = nn.Linear(self.intermediate_size, self.hidden_size, bias=False)
    self.act_fn = ACT2FN[config.hidden_act]
    # silu

def forward(self, x):
    down_proj = self.down_proj(self.act_fn(self.gate_proj(x)) * self.up_proj(x))
    return down_proj
```