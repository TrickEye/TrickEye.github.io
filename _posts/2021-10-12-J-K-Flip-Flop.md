---
title: J-K Flip-Flop
---


# The toggling behavior of J-K Flip-Flop.

TrickEye, 2021-10-12

JK触发器，得名于发明者Jack Kilby，与其他触发器最显著的不同点是当两个输入端同时为1时，会产生翻转(空翻， toggling action)现象。

## J-K触发器结构(Simplified)

![image-20211012193713822](C:\Users\TrickEye\AppData\Roaming\Typora\typora-user-images\image-20211012193713822.png)

上图是一个被简化的J-K触发器，这个触发器结构可以比较好的实现 `{J, K} = {0, 0} or {0, 1} or {1, 0}` 的指定功能

当 `{J, K} = {1, 1}` 时，该J-K触发器会产生不受控的翻转现象。即遵循如下的特征表，`Qprev` 发生翻转。

| `J`  | `K`  | `Clk` | `Qprev` | `NewQ`   |
| ---- | ---- | ----- | ------- | -------- |
| 1    | 1    | 1     | `Qprev` | `~Qprev` |

由于发生翻转后的 `NewQ` 仍然被反馈为三输入 `NAND` 门的输入，因此这样的翻转不是一次性的，不遵循时钟上升沿控制。

Physics & Astronomy Department in Georgia State University 提供的介绍提到了同样的问题，那就是：要想使这种结构的J-K触发器完成指定的翻转功能，时钟脉冲必须非常快，否则因为翻转导致的Q的改变会导致震荡，名为竞争。注意，这里的竞争和因为电路传输延迟导致的竞争并不相同。而这是不可能的，因为现代的集成电路非常快，时钟达不到能够维持稳定性的频率

> While this implementation of the J-K flip-flop with four NAND gates works in principle, there are problems that arise with the timing. The timing pulse must be very short because a change in Q before the clock pulse goes off can drive the circuit into an oscillation called "racing“. Modern ICs are so fast that this simple version of the J-K flip-flop is not practical.

## 震荡(oscillation)

### 成因：

此版本的J-K触发器在达到条件 `{J, K} = {1, 1}` 时，其翻转功能在任何满足 `Clk = 1` 条件下都会被触发，并且翻转速度由电路本身的电信号传播速率决定。这使得任意时刻的输出值都不能通过时钟状态来推测（如图）

![image-20211012201020006](C:\Users\TrickEye\AppData\Roaming\Typora\typora-user-images\image-20211012201020006.png)

### 避免：

下面介绍主从J-K触发器(Master-Slave J-K Flip-Flop)。其好处在于`J`的值被传输到输出并不是立即的，而是延后了半个时钟周期。这使得反馈到输出也不是立即的，自然有效地避免了不受控的震荡现象。

![image-20211012201449590](C:\Users\TrickEye\AppData\Roaming\Typora\typora-user-images\image-20211012201449590.png)

主从J-K触发器可以视作是级联的两个J-K触发器，分别受控制与一对相反的时钟信号。`J`和`K`输入的是主触发器，其输出分别是`M`和`~M`。此二者分别作为从触发器的`J`输入和`K`输入，从触发器的输出`Q`和`~Q`作为整个主从触发器的输出，同时反馈到主触发器的输入端。

尝试分析其在条件： `{J, K} = {1, 1}` 下，一个时钟周期的行为。

1. `Clk`上升沿，主触发器发生反转，`M = ~Q; ~M = Q;` 从触发器因时钟处于低电平，维持原状。
2. `Clk`下降沿，`~Clk`上升沿，主触发器维持原状，从触发器的两个输入不同，根据J-K触发器的性质，发生`M->Q`的透明传输，`Q = M; ~Q = ~M`
3. 对于整个过程而言，主从J-K触发器发生了一次时间为半个时钟周期的翻转

因此可知，主从J-K触发器可以比较好的解决J-K触发器存在的不受控空翻情况，可以在 `{J, K} = {1, 1} ` 情况下，每一次钟控信号只发生一次翻转，能够实现设想的翻转功能。

![image-20211012203541527](C:\Users\TrickEye\AppData\Roaming\Typora\typora-user-images\image-20211012203541527.png)

## 应用：

可以从上一张图中看到，翻转的结果是，得到了一个频率恰好为`Clk`的频率的`1/2`的一个方波，因此可以实现T-触发器的功能。

## 后记：

### 参考资料：

[J-K Flip-Flop (gsu.edu)](http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/jkflipflop.html#c3)，Georgia State University.

### 感悟：

百度百科上，J-K触发器的相关介绍及其稀少，基本上就是没有。但J-K锁存器的内容汗牛充栋。这可能也说明了J-K触发器的空翻功能的应用意义可能确实不大，但是能弄懂这个玩意儿也是很有意思的一件事。

JK触发器真好玩！





