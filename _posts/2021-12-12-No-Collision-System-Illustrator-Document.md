---
Title: 无碰撞体系演示工具设计文档 | No Collision System Illustrator Document
Author: 崔怿恺 | TrickEye
---

# 无碰撞体系演示工具设计文档

崔怿恺，北京航空航天大学计算机学院
20373866
[trickeye@buaa.edu.cn](mailto:trickeye@buaa.edu.cn)

## 一、项目简介

本软件旨在通过某种碰撞算法实现从随机生成的球体系中模拟产生出“各个球轨迹相互相切，但永不碰撞”的奇妙画面。通过别出心裁的设计，实现从杂乱的、混沌的碰撞体系中逐渐规律化，直至最后实现周期运动，并通过图形化操作界面来展示这一过程。

文件下载：

[GitHub Release(v1.3)](https://github.com/TrickEye/NoCollisionSystem/releases/tag/v1.3)
[Bhpan Download(v1.3)](https://bhpan.buaa.edu.cn:443/link/FDCA46BA25915B9EBA0DAA986733FFBE)
[GitHub Repo(All Versions)](https://github.com/TrickEye/NoCollisionSystem/tree/v1.3)
[Bhpan Download(All Versions)](https://bhpan.buaa.edu.cn:443/link/3ABBC4EC268C36931B82DAB5FDFBD508)

软件更新记录网站：(v0.1 - v1.3)

[No Collision System - Dynamically Updated - TrickEye’s Personal Blog](https://trickeye.github.io/2021/12/05/No-Collision-System-Dynamic-Update.html)

## 二、操作教程

- 本软件以No-Collision-System-Illustrator.jar文件形式发布，同时也提供了项目源代码。
- 开发本项目使用的JDK版本为17.0.1，但本项目使用的Java语法可以最低兼容Java 1.8
- 本项目需要在屏幕分辨率至少为1600 * 900的屏幕上运行，推荐在1920 * 1080及以上的屏幕运行，并且不要开启125%及更高的缩放比例。设置方式：开始菜单->设置->显示设置。如果您的屏幕分辨率达不到此要求，有可能出现按钮和图形化操作界面显示不全的现象，用户仍然能运行此程序，但程序功能可能受到影响。

### 1. (SINCE 0.5)图形化操作界面启动

- 用户可以直接**点击jar文件**，启动程序的起始界面。
- 起始界面将会提示用户**输入三个整数**，分别作为“球的个数”、“随机生成的直径上界”、“随机生成的直径下界”。三个文本输入框中已经预先填充了{10, 300, 100}的默认输入
- 填好后，**点击“launch”按钮**，会进入新的窗口，该窗口中将显示随机生成的小球。小球个数符合用户输入，直径由用户输入的上下界中随机生成。
- 小球会自动地以某种碰撞算法进行碰撞。接下来，用户可以选择拉近，拉远视角、快进，慢放、显示小球尾迹等操作
- 一段时间后，所有小球以绿色填充，意味着他们的运动轨迹都完成规律化，具体表现为在画面中做周期运动，小球的轨迹彼此总是尽量相切，但是永不相撞
- 至此，完成启动这一操作，用户可以在主界面自由操作浏览

### 2. (仅0.1, 0.5后不再使用)命令行启动

- 在命令行界面中输入

- ```
  java -jar No-collision-system-illustrator.jar 
  ```

- 后，可以看到如下的提示信息

- ```
  Input a integer n as the number of the balls. (1 < n <= 50)
  If you input 0, load from default.
  ```
- 之后按照要求输入即可启动图形化界面
  

## 三、功能介绍

### 1. 特色功能

#### i. 根据小球的安全程度分配颜色

通过记录小球连续没有发生碰撞的时间，可以确定小球的安全程度，根据此程度，可以分配其颜色。通过从红到绿的颜色来可视化地显示小球的安全程度

#### ii. 根据整体的安全程度推算整体模拟进度

通过记录小球在过去一段时间内没有发生碰撞地历史记录可以推算出整体的模拟进度

模拟进度将在下方控制台以百分比的形式显示

### 2. (SINCE 0.5)暂停/继续

暂停当前的模拟进程。所有小球动作停止

触发方式：
- 右侧“Stop”按钮（如果当前未被停止）“Resume”按钮（如果当前已暂停）
- (SINCE 1.2)菜单栏 - Control - Pause / Resume（在暂停和继续中切换状态）
- (SINCE 1.3)键盘空格键（已知的问题：刚启动时，键盘焦点置于右侧按钮，需要首先鼠标点击到canvas部分之内转移焦点）

当触发暂停和继续功能时，主界面的下方控制台会显示类似于下面给出的提示信息：
```
Stop. / Resume.
```

### 3. (SINCE 0.5)视角拉近/视角拉远

将观察视角拉近或拉远10%

触发方式：
- 右侧“Zoom in”, "Zoom out"按钮
- (SINCE 1.2)菜单栏 - Control - Zoom in 或 菜单栏 - Control - Zoom out
- (SINCE 1.3)键盘上下键
- (SINCE 1.3)鼠标滚轮上下滚动

### 4. (SINCE 1.0)自适应视角拉远 | Adaptive Zoom Out

当某一个小球所处的位置关于坐标原点的偏移量超过了主界面屏幕大小的80%时，视角会自动拉远，以实现画面中尽可能地总是囊括所有的小球的目的。
当触发自适应视角拉远功能时，主界面的下方控制台会显示类似于下面给出的提示信息：

```
Adaptively zoom out; Observe Scale Now At: 1.00
```

- (SINCE 1.3)可以通过快捷键Ctrl+Z来改变自适应视角拉远是否生效，在此之前，只是在用户主动视角拉近后设置一段时间的不应期
- (SINCE 1.3)也可以通过菜单栏 - Control - Enable / Disable Adaptive Zoom触发

### 5. (SINCE 0.5)加速/减速

可以成倍地增加模拟速率，或是(SINCE 1.2)降低模拟速率到原来的整数倍分之一
当触发加速/减速功能时，主界面的下方控制台会显示类似于下面给出的提示信息：

触发方式：
- 右侧“Speed Up”, “Speed Down”按钮
- (SINCE 1.2)菜单栏 - Control - Speed Up 或 Speed Down
- (SINCE 1.3)键盘左右键

```
Speed Factor : 1
```

### 6. (SINCE 0.5)显示尾迹

可以显示每个小球过去50个刷新周期所处位置，以灰色小点标记
(SINCE 1.2)当速度比例大于10并且显示尾迹开关仍然打开时，软件会自动关闭，以避免屏幕过度地闪烁

触发方式：
- 右侧“Show Tail”按钮（若当前未显示）“Hide Tail”按钮（若当前显示）
- (SINCE 1.2)菜单栏 - Control - Show / Hide Tail
- (SINCE 1.3)键盘快捷键Ctrl+T

### 7. (SINCE 1.0)保存当前场景

可以以文件的形式保存当前所有小球的：{直径、位置、速度、加速度}七元组，可以在jar文件的同目录下找到写入的`scene.ncl`文件
该`.ncl`文件可以在不同设备中流转，并在版本相同的程序中被加载
(SINCE 1.2)文件末尾添加该文件的哈希码保证文件安全

触发方式：

- 右侧“Save Scene”按钮
- (SINCE 1.2)菜单栏 - File - Save current scene
- (SINCE 1.3)键盘快捷键Ctrl+S

### 8. (SINCE 1.0)加载文件

可以打开jar文件所在的目录下的`scene.ncl`文件，读取并验证其正确性，并以此数据进入主界面
(SINCE 1.2)文件末尾附带文件的哈希码，在读取的时候加以验证，以避免文件在外部更改，影响程序功能，未通过哈希验证时将警告用户

触发方式：

- **起始界面**下方“Load From `scene.ncl`”按钮
- (SINCE 1.2)菜单栏 - File - Load from `scene.ncl`
- (SINCE 1.3)键盘快捷键Ctrl+L

### 9. (SINCE 0.1)返回起始界面

返回起始界面

触发方式：

- 右侧“Close”按钮
- (SINCE 1.2)菜单栏 - No-Collision System Illustrator - Back To Start Screen
- (SINCE 1.3)键盘快捷键Ctrl+B

### 10. (SINCE 0.1)关闭程序

关闭程序

触发方式：

- **起始界面**下方“End Program”按钮
- (SINCE 1.2)菜单栏 - No-Collision System Illustrator - Close the Software

## 四、算法介绍

### 1. 碰撞算法

该软件的核心功能是碰撞算法

实践可以验证，对于任何一个有限规模的多元小球碰撞体系，都可以在有限的时间内彼此碰撞后产生如本软件所示的，互不相撞的周期运动。而碰撞算法是本软件十分重要的组成部分。

本软件使用如下的碰撞规则：

- 两球相撞时，不对小球的速度、加速度做任何改变，但发生碰撞的小球所在的**位置**会**瞬时地变化**以避免运动轨迹的重合
- 所有小球受到来自于中心的、随距离中心的长度线性增加的向心加速度，以避免小球达到逃逸速度以离开碰撞体系

本软件使用每0.002秒（每秒500次）刷新率刷新小球位置（判断小球碰撞情况）

开发者注：虽然碰撞算法完全可以在两行之内完成编写，但是发现这样的碰撞逻辑花费了大量的脑力和眼力

### 2. 图形化界面

图形化界面采用AWT，内部绘图采用canvas类

本软件使用每0.025秒（每秒40次）刷新率依据当前小球位置重绘界面

开发者注：实际上本人完全了解AWT一些过时的点，在AWT图形化操作界面编写过程中也遇到了诸多问题，本人也完全清楚可以使用诸如JFrame、其他的第三方库等等方法来实现GUI，但是本人认为，利用课程所教学的内容，解决遇到的问题，完成相应的目标，这更能培养本人的开发能力。

### 3. 所使用库

Java.util.*

Java.awt.*

Java.io.*

## 五、后记

本软件的开发过程遵循开源社区守则，所有重要迭代过程可以在GitHub仓库中找到，并且所有的迭代更新公告都在网站中发布并记录

请参阅：

[No Collision System | Dynamically Updated | TrickEye’s Personal Blog](https://trickeye.github.io/2021/12/05/No-Collision-System-Dynamic-Update.html)

GitHub Repo : [TrickEye/NoCollisionSystem](https://github.com/TrickEye/NoCollisionSystem)

