# 基础物理实验-法拉第磁光效应

老师您好，欢迎在这里查看我的代码。

我采用`Python`脚本来完成以下的目的：
- 确定磁感应强度随电流线性变化的线性区间
- 在确定的线性区间内，使用一元线性拟合法计算回归方程，以及不确定度和相关系数
- 辅助磁光调制实验倍频曲线的画图

下面是我的`Python`脚本：
```python
import pandas as pd
import numpy as np
import math
import matplotlib.pyplot as plt


def calcRelativity(data, fr=0, to=all):
    if to == all:
        to = len(data[0])
    length = to - fr + 1
    sigmax = 0.0
    sigmay = 0.0
    sigmaxy = 0.0
    sigmaxSquare = 0.0
    sigmaySquare = 0.0
    for i in range(fr, to):
        sigmax += data[0][i]
        sigmaxSquare += data[0][i] * data[0][i]
        sigmay += data[1][i]
        sigmaySquare += data[1][i] * data[1][i]
        sigmaxy += data[0][i] * data[1][i]
    avrgx = sigmax / length
    avrgy = sigmay / length
    avrgxy = sigmaxy / length
    avrgxSquare = sigmaxSquare / length
    avrgySquare = sigmaySquare / length
    relativity = (avrgxy - avrgx * avrgy) / (math.sqrt((avrgxSquare - avrgx * avrgx) * (avrgySquare - avrgy * avrgy)))
    return relativity


def linearModel(data, fr=0, to=all):
    if to == all:
        to = len(data[0])
    length = to - fr + 1
    sigmax = 0.0
    sigmay = 0.0
    sigmaxy = 0.0
    sigmaxSquare = 0.0
    sigmaySquare = 0.0
    for i in range(fr, to):
        sigmax += data[0][i]
        sigmaxSquare += data[0][i] * data[0][i]
        sigmay += data[1][i]
        sigmaySquare += data[1][i] * data[1][i]
        sigmaxy += data[0][i] * data[1][i]
    avrgx = sigmax / length
    avrgy = sigmay / length
    avrgxy = sigmaxy / length
    avrgxSquare = sigmaxSquare / length
    avrgySquare = sigmaySquare / length

    b = (avrgx * avrgy - avrgxy) / (avrgx * avrgx - avrgxSquare)
    a = avrgy - b * avrgx
    uncertaintyb = math.sqrt((1 / length)*((1 / (calcRelativity(data, fr, to)*calcRelativity(data, fr, to))) - 1))
    uncertaintya = math.sqrt(avrgxSquare)*uncertaintyb
    return b, a, uncertaintyb, uncertaintya

def main():
    data = pd.read_csv("Ampere-Tesla.csv", header=None)
    data = np.array(data)
    # input data.
    fig = plt.figure()
    ax1 = fig.add_subplot(2, 2, 1)
    ax2 = fig.add_subplot(2, 2, 2)
    ax3 = fig.add_subplot(2, 2, 3)
    # ax4 = fig.add_subplot(2, 2, 4)

    current = data[0][4:26]
    array = np.zeros(30)
    index = np.arange(5, 27)
    for i in range(5, 27):
        array[i] = calcRelativity(data, 0, i)
    ax1.plot(current, array[5:27], alpha=0.8)
    ax1.scatter(current, array[5:27], alpha=0.8)
    for a, b in zip(current[6:], array[11:27]):
        ax1.text(a, b, '%.2f\n%.5f' % (a,b), ha='center', va='center', fontsize=5)
    ax1.vlines(1.8, 0.987, 1, color="000000", linestyles="dashed")
    ax1.hlines(0.999, 0, 3, color="grey", linestyles="dotted")
    # draw ax1. The relativity - current chart.

    ax2.scatter(data[0], data[1], alpha=0.8)
    x1 = np.linspace(0, 1.8, 10)
    x2 = np.linspace(0, 3, 10)
    b, a, ub, ua = linearModel(data, 0, 20)
    y1 = b * x1 + a
    y2 = b * x2 + a
    ax2.plot(x1, y1, color='red', linewidth=3)
    ax2.plot(x2, y2, linestyle='dashed')
    ax2.text(2.5, 75, 'y = b * x + a\nb = %.5f \na = %.5f  \nUb = %.5f \nUa = %.5f ' % (b, a, ub, ua), ha='center', va='center', fontsize=16, font='courier new')
    # draw ax2. The linear solution of the I - B relation.

    pi = 3.1415926
    x1 = np.arange(0, 10 * pi, 0.1)
    current = np.sin(x1)
    ax3.plot(x1, current, linewidth=0.5, linestyle='dotted')

    for alpha in (0, pi / 4, pi / 2):
        intensity = np.cos(alpha + current * 0.1) ** 2  # np.sin(x1)**2
        ax3.plot(x1, intensity, linewidth=0.6)

    # draw ax3. The double frequency illustration plot

    plt.show()


if __name__ == "__main__":
    main()

```
以上脚本分为三个部分。
- 第一部分，计算排除了最后n个数据之后的余下数据的相关系数，其结果（详细计算结果请参见纸质实验报告）通过折线图体现，可以看到在`0~1.8A`的范围内`B-I`的线性相关度比较好。
- 第二部分，选取`0~1.8A`范围内的数据，使用一元线性回归法拟合得到线性关系，可以在下图中看到，拟合度比较好。
- 第三部分，演示了α分别取0，45°，90°的接收光强曲线和发射信号参照。

![image](https://s3.bmp.ovh/imgs/2022/03/a27a0c9701aa64f2.png)