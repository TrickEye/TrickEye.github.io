---
title: 【Mars】汇编代码的美化建议 及 Challenge题心得体会
description: TrickEye's Personal Blog
---

# 【Mars】汇编代码的美化建议 及 Challenge题心得体会


## 一、缩进、空白行的使用：

### 一、1. 缩进——Tab键真是歪歪滴诶嘶

在MARS中，缩进的意义是大于美观的，因为在运行界面，用户的缩进是得以保留的（如下图）

![image.png](https://s3.bmp.ovh/imgs/2022/01/e5b868e585e307fd.png)

因此可以在程序解释运行时，清晰地观察程序在哪一个代码块。众所周知，Mips指令集是没有大括号这一说的，因此能够对代码进行逻辑上的划分的只有缩进。

笔者使用的缩进（搭配标签）方案如下：

- 在同一个标签下的，可以被翻译成**几句并列的**C语言的内容，彼此之间不产生缩进
- 标签的命名和使用应当成对，采用驼峰命名法，有xxxBegin，就一定有xxxEnd，这样就可以视作C语言的大括号配对了
- 实现C语言for循环、if分支语句的内容，在标签之下缩进一个Tab，并直到遇到与这个标签对应的End标签之前，维持该缩进量

### 一、2. 空白行——Enter键也是歪歪滴诶嘶

对于空白行而言，虽然在运行界面空白行是被省略的，但是适当的添加空白行可以对代码进行逻辑上的切割，个人建议如下：

- 可以被翻译成同一句C语言的内容，彼此之间不空行
- 实现不同C语言语句的内容留一空行

## 二、注释的使用：

写注释可以怡情，可以博彩，可以长才

由于汇编语言的特性，经常自己写的东西自己都看不懂，这个时候注释就很有必要了。就我个人而言，写注释的场景无非有三：

- 提醒正在写代码的我下一段要干啥
- 提醒正在debug的我这一段别乱改
- 提醒未来看代码的我这一段在干嘛

### 二、1. 提醒正在写代码的我下一段要干啥

我经常于一个功能的结束，或是即将调用一个子过程时，写一段如下的代码：

```assembly
# input Ends Here #####################
# Registers Still in Use:	Storing:
# 	s0						n
#	s1						m
#######################################
```

在使用非常low的DFS搜索汉密尔顿回路时，也这样写：

```Assembly
DfsStart:
	# int DFS(int from, int numSearched) ##
	# Registers in use: 	Storing:
	#	$31					returnAddress
	#	a0					From
	#	a1					numSearched
	#	v0					returnValue
	#######################################
```

这样可以时刻提醒自己什么寄存器里面存的有东西，之后写的代码别乱`li` or `move` or `lw`，之后如果要调用子过程，或者递归，涉及到压当前状态进栈的时候，就可以不遗漏要压的寄存器。

### 二、2. 提醒正在debug的我这一段别乱改

大佬是不需要debug的，所以大佬不用看这一段。

众所周知，C语言简简单单的一个 `for (int i = 0; i < n; i++)` 放到汇编语言，就会变得~~又臭又长~~（富有形式美），而且写完代码过后debug阶段还容易乱改导致Bug越De越多，很难绷得住。

那么如下的代码：

```assembly
li $t0, 0
ForBegin:
	slt $t1, $t0, $s0
	beq $t1, $0, ForEnd
	
	addi $t1, $t1, 1
	j ForBegin
ForEnd:
```

是否可以改成：

```assembly
li $t0, 0					# for (int t0 = 0;
ForBegin:
	slt $t1, $t0, $s0
	beq $t1, $0, ForEnd		# t0 < s0;
	# Contents Here #####
	
	nop
	
	# Contents End Here #
	addi $t0, $t0, 1
	j ForBegin				# t0++)
ForEnd:
```

这样的好处就是提醒十分钟后Debug的自己，这一段是我写的for循环，别乱改，要改只能在 `Contents Here` 和 `Contents End Here` 之间修改

### 二、3. 提醒未来看代码的我这一段在干嘛

众所周知，C语言简简单单的一个 `array[temp1][temp2] = temp3` 放到汇编语言，也会变得~~又臭又长~~（富有形式美），鄙人不才，这句C语言翻译成汇编就变成了将近十行，很难绷得住。

那么假设如下的代码：

```assembly
.data
	array: .space 1000
.text
# Registers  in Use:		Storing:
# 	s0						n
#	t1						temp1
#	t2						temp2
#	t3						temp3
# 欲实现功能：
# array[temp1][temp2] = temp3
#######################################
mult $t1, $s0
mflo $t4
add $t4, $t4, $t2
li $t5, 4
mult $t4, $t5
mflo $t4
la $t5, array
add $t4, $t4, $t5
sw $t3, 0($t4)
```

实际上就是在计算 `array[temp1][temp2]` 的位置，并且将其值赋为 `temp3`.

因此可以适时地在之后留一空行，并使用备注：

```assembly
# t4 = t1 * n + t2 + &array[0]
# Mem[t4] = t3
```

## 三、调用子过程简析——以DFS为例

虽然调用子过程好像并不是一个切题的主题，但是我还是放了上来权当作学习笔记了QAQ

DFS是这样一个搜索过程：全局维护一个 `visit[]` 数组用于显示是否访问过某一元素，对每一个被搜索的起点，对他做一定的操作，然后递归地搜索这个元素能够达到的其他元素

如下是一份检测图是否连通的的C语言代码

```c
int n;	// number of nodes
int visited[maxn] = {0};
int graph[maxn][maxn];

int Dfs(int from, int numSearched) {
    visited[from] = 1;
    numSearched++;
    if (numSearched == n) {
        return 1;
    }
    for (int i = 0; i < n; i++) {
        if (graph[from][i] && visit[i] == 0) {
            if (Dfs(i)) {
                return  1;
            }
		}
    }
    numSearched--;
    visited[from] = 0;
    return 0;
}
```

教程中已经给大家提供了 `Factorial` 的写法，采用了 `Factorial` 标签和 `work` 标签分离的形式，但是我太菜了我不会根据那个例程仿写Dfs，因此选择了翻译以上C语言代码的方式

第一部分：变量声明，函数准备

```assembly
.data
	visit: .space 1000
	graph: .space 1000
.text
DfsStart:
	# int Dfs (int from, int numSearched) ######
	# Registers in Use: 	Storing:
	#	$31					returnAddress
	#	s0					numOfNodes
	#	a0					from
	#	a1					numSearched
	#	v0					returnValue
	############################################
```

第二部分：对当前点做操作，大家自己写就行了

```assembly
	# visited[from] = 1;	略
    # numSearched++;		略
    bne $a1, $s0, IfDfsEnd
    IfDfsStart:
    	li $v0, 1
    	jr $31
    IfDfsEnd:
    nop
    # if (numSearched == n) return 1;
```

第三部分：循环、准备调用子过程

```assembly
	# for(int t0 = 0;					略
	ForDfsBegin:
	    # t0 < n; 						略
	
	    # t1 = a0 * n + t0 + &graph[0]	略
	    # t2 = Mem[t1]					略
	    li $t3, 1
	    seq $t1, $t2, $t3
	
	    # t2 = t0 + &visit[0]
	    # t3 = Mem[t2]
	    seq $t2, $t3, $0
	
	    and $t3, $t1, $t2
	    li $t1, 1
	    bne $t3, $t1, IfInForEnd
	    IfInForBegin:
		
		    ######################################
		    # Going to call Dfs(t0, numSearched) #
		    # ReturnValue Stored at $t1			 #
		    ######################################
			
			# if (t1 == 1) return 1;	略
			
	    IfInForEnd:
	    nop
	    # t0++)							略
	ForDfsEnd:
```

第四部分：准备调用子过程，**（重点）**(插入在上一部分的显著标明的位置)

```assembly
			######################################
		    # Going to call Dfs(t0, numSearched) #
		    # Registers in use:		Storing:
		    # 	$31					ReturnAddress
		    # 	a0					From
			#	a1					numSearched
			#	v0					ReturnValue
		    ######################################
		    sw $31, 0($sp)
		    sw $a0, -4($sp)
		    sw $a1, -8($sp)
		    sw $v0, -12($sp)
		    subi $sp, $sp, 16
		    # 以上五句，压当前状态入栈，维护$sp到新栈顶
		    # 请一定注意不要写成：
		    # subi $sp, $sp, -16
		    move $a0, $t0
		    # 布置调用子过程的参数表，其中numSearched
		    # 始终在a1，所以不必move，
		    jal DfsStart
		    # 调用子过程
		    move $t0, $a0
		    move $t1, $v0
		    # 将子过程的结果拿出来，腾出位置也好，进一步
		    # 处理也好
		    addi $sp, $sp, 16
		    lw $v0, -12($sp)
		    lw $a1, -8($sp)
		    lw $a0, -4($sp)
		    lw $31, 0($sp)
		    # 以上五句，填进去啥样，取出来啥样
```

第五部分：善后，略

至此，一份使用了递归思想的汇编代码便写成了。

## 总结、后记、致谢

总结起来，我想分享的建议无非就是：好好写缩进，好好写注释。

缩进和注释永远是维持代码可读性的最好的办法，即使高级语言也需要适时的缩进和注释提示编程者必要的信息，以及美化代码的结构。而汇编语言本来就比高级语言可读性差，逻辑链条不明显，更需要注释和缩进来帮助Coder或者Debugger理解逻辑。

我只是提供了我习惯下的注释、缩进的书写方式，显然每个人的代码风格都不一样，我不提倡所有人都像我这样写，但是我坚决反对完全不写注释，完全没有缩进的代码风格（~~那样还不如写机器码~~）



此外，对于其他MarkDown作者而言，如果需要插入Mips的代码，您可以在代码框右下角语言选择中输入`assembly`，以使用汇编语言的高亮方案。（如果被讨论区平台吞了那当我没说）（哇居然真的被吞了）



本文系赶工完成，所有代码均未经过本人检查，不建议拿来直接用，如果产生抄袭的情况，请自重。



### 夹带私货环节

感谢冯·卡拉扬先生、柏林交响乐团、贝多芬先生的第六交响曲“田园”对于我在图书馆看教程理解递归的过程中提供的帮助。

感谢泰勒斯威夫特女士和她的《Evermore》专辑对我Debug的精神支持。

Consolas字体的 `$` 中间那根杠是斜的！！！所以我推荐大家用Adobe家的Source Code Pro