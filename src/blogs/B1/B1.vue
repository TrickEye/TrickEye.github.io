<script setup lang="ts">
import { NH1, NDivider } from 'naive-ui'
import BlogParagraph from '../BlogParagraph.vue';
import BlogFigure from '../BlogFigure.vue';
import BlogCodeBlock from '../BlogCodeBlock.vue';

import P1 from './P1.png'
import P2 from './P2.png'
import P3 from './P3.png'
import P4 from './P4.drawio.png'

import { blogs } from '../meta'
const blog = blogs["B1"]
</script>

<template>
  <div class="blog">
    <n-h1 prefix="bar" class="title">{{ blog.title }}</n-h1>
    <n-h1 prefix="bar" class="date">{{ blog.date }}</n-h1>
    <n-divider></n-divider>
    <BlogParagraph>
      要用VSCode来写C语言，总得先不用VSCode写C语言嘛对吧。或者说，得先搞懂C语言的运行是什么过程。
    </BlogParagraph>
    <BlogCodeBlock code='gcc code.c -o code.exe' language="bash">
        将 code.c 编译为可执行文件的指令
    </BlogCodeBlock>
    <BlogParagraph>
        gcc 是编译器，一个软件，老师肯定跟你介绍过什么是编译器，这行指令干的事情就是运行这个软件。
        不过 gcc 后面的三坨东西就不是软件了，而是在运行 gcc 软件的时候需要告诉 gcc 的信息。
    </BlogParagraph>
    <BlogParagraph>
        code.c 的意义是一个文件名，（我们假设写的代码叫做 code.c ，那么编译器得知这个信息之后就会读取
        code.c 这个文件。编译器需要读取这个文件才能编译。
    </BlogParagraph>
    <BlogParagraph>
        -o 是编译器的参数，告诉编译器 -o 的作用是告诉编译器输出的可执行文件放在哪里。
        code.exe 的意义是一个文件名。和前面的 -o 一起，意义是告诉编译器编译好后的程序保存为 code.exe
    </BlogParagraph>
    <BlogFigure :src="P1" title="检验 GCC 存在性">
      要怎么验证电脑里面有没有 gcc 这个软件呢？
      一个办法是打开一个终端（ Windows 徽标键 + R ，然后输入 cmd）
      然后在新的窗口里面输入 gcc 。
      例如下面这张图，就是正常运行 gcc 的结果。
    </BlogFigure>
    <BlogFigure :src="P2">
      他会告诉你没有输入文件，当然了，毕竟我的确没有告诉他读取哪个文件，但这至少证明了电脑里面有 gcc 存在。
    </BlogFigure>
    <BlogParagraph>
      总结一下，要运行一个 C 语言文件，需要先编译得到程序，再去执行这个程序。其他的工具比如 dev-IDE 
      看起来可以一键运行的原因是它自动帮助你完成了“编译-执行”这个过程。VS Code 
      不能一键运行的原因也是因为 VS Code 需要经过一定的配置才能帮你自动完成“编译-执行”这个过程。
    </BlogParagraph>
    <n-divider></n-divider>
    <BlogParagraph>
      VS Code 本身是不对 C 语言提供完整支持的，不过 VS Code 提供相应的拓展来帮助完成对应的功能。下面会介绍一些。
    </BlogParagraph>
    <BlogParagraph>
      VS Code 的软件市场在最左边侧边栏从上往下的第5个。（一个田字格但是右上角那个方块飞了）点进去之后有个搜索框，搜索 C。
      会搜到一个标题为 C/C++ ，简介是 C/C++ IntelliSense, debugging, and code browsing ，作者是 Microsoft 的拓展。
      点进去，按 Install ，就会给你的 VS Code 安装这个拓展。
    </BlogParagraph>
    <BlogParagraph>
      装完这个拓展其实就可以调试了。调试按钮在左边侧边栏第四个，有个三角形那个。可以随便写一点 C 语言代码，
      然后保存，点调试界面的 “Run and Debug” 按钮，然后会让你选一个配置
    </BlogParagraph>
    <BlogFigure :src="P3" title="Debug 选择配置">
      如果你电脑中有 gcc ，那么这边<em>应该</em>会识别到你的编译器。点击它，VS Code 会闪一些字符，然后就可以调试了。<br>
      VS Code 调试功能非常强大，这就是另一门学问了。
    </BlogFigure>
    <BlogParagraph>
      不过这个插件目前只是能正确地调试，但是代码预览和编辑这块要正常的话还需要调整一下 C/C++ 这个插件的设置。
      插件详情页 “Disable” “Uninstall” 两个按钮右边有个设置，菜单里面点 Extension Settings. 可以编辑这个插件的设置。
    </BlogParagraph>
    <BlogFigure :src="P4" title="配置 C/C++ 插件以正确识别 IntelliSense">
      1. Intelli Sense Mode 字段可以根据操作系统和软件架构选择。如果你不了解这方面的知识，那么 Windows 用户可以选择
      windows-gcc-x86 ； Mac 用户可以选择 macos-gcc-arm <br>
      2. Compiler Path 字段要求填写 gcc 在本机中的位置，这取决于 gcc 编译器安装在你电脑中的哪个位置。不一定与我的完全相同。<br>
      修改好上面两个配置后 IntelliSense <em>应该</em>就可以自动工作了。
    </BlogFigure>
    <n-divider></n-divider>
    <BlogParagraph>
      一键运行需要另一个拓展：搜 Code Runner 并安装，安装好后，打开一个 C 语言文件，右键就可以看到 Run Code 了。
      这样就可以一键运行了
    </BlogParagraph>
  </div>
</template>

<style scoped>
.blog {
  width: min(90%, 1800px);
  margin: 0 auto;
}

.title {
  font-size: 5em;
  font-weight: 600;
  text-align: start;
}

.date {
  text-align: left;
  font-size: 1.5em;
}

@media (max-width: 1200px) {
  .title {
    font-size: 4em;
  }

  .date {
    font-size: 1.3em;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 3em;
  }
  .date {
    font-size: 1em;
  }
}
</style>