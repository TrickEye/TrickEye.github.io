# 手搓一个较为完备的P5测试数据

话不多说，上代码：
[北航云盘链接](https://bhpan.buaa.edu.cn:443/link/AD40478BB18B3CEB7ABBC65EDFBF69FF)

这个数据可以做到覆盖率测试转发情况和暂停情况拿到满分，但是，仍然不代表CPU的设计正确性。

实际上，在我搓代码的时候，观察到课程组提供的测试器并不能够完全的覆盖所有的情况。

- 例如，测试器没有检验执行结果的有效性。例如咱们构造的数据，如果在某个点因为不转发/不阻塞/跳飞了等等异常情况导致并没有按预期执行，但是产生了跟正常执行的结果一摸一样的输出，那么这一部分的检验是不完美的。大家要小心这种情况：比如这些代码：

  ```assembly
  jal label00
  nop
  label00: nop
  lui $1, 0
  # 不管跳不跳都到一个地方
  # try this:
  jal label00
  nop
  j label01
  nop
  label00: lui $1, 0
  label01: nop
  ```

  ```assembly
  # All DM not filled and were initialized with 0.
  ori $2, $0, 0xefff
  lw $1, 0($2)
  # 不管转不转发都取到0
  # try fill DM with random values.
  ```

接下来，介绍一下我用来“自动送测覆盖率检查”的脚本：

```bash
# TEST.bat
CodeGenerate.exe
# 一个C语言文件，接收一个字符串，把文件名同这个字符串的文件复制并重命名为mips.asm
java -jar Mars4_5.jar nc mc CompactDataAtZero a dump .text HexText code.txt mips.asm
# 用Mars导出十六进制码
java -jar Mars4_5.jar nc mc CompactDataAtZero a dump .text HexText analysis\code.txt mips.asm
# 导出两次，到不同的位置
java -jar Mars.jar db mc CompactDataAtZero nc mips6.asm >result.txt  
# 执行，采用讨论区魔改版Mars，谢谢@申浩佳
java -jar analysis\Hazard-Calculator.jar --hz --im-base 0x00003000 --dm-base 0x00000000 --im-size 3072 --dm-size 4096 analysis\code.txt
# 执行并产生相应的时间范围、hazard信息
move /Y hazard.json analysis\
# 处理文件输出位置的问题
analysis\7za a analysis\work\P5_MyCode_testCase0.zip code.txt
# 用到7z命令行版本7za，请参考GitHub项目：https://github.com/sparanoid/7z
cd analysis\work\
..\7za a P5_LX_example.zip P5_MyCode_testCase0.zip
del P5_MyCode_testCase0.zip
cd ..\..\
cd analysis\
python analyzer.py
# 送测
```

以及一些好用的VSCode快捷键，陪伴了我搓代码的始末：

`Alt+↑/↓` 调整光标所在行与上/下行顺序

`Alt+Shift+↑/↓` 复制并在上/下行插入光标所在行

`中键拖动` 纵向框选

`Alt+鼠标点击` 在当前点击位置创建一个平行光标