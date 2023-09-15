# Conversation with GitHub Copilot Chat

> Q：使用vite创建一个新的vue3-ts项目的命令是什么？

以下是使用 Vite 创建一个新的 Vue 3 TypeScript 项目的步骤：

1. 确保已经安装了最新版本的 Node.js 和 npm。

1. 打开终端并创建一个新的文件夹，例如 my-vue-project。

1. 进入该文件夹并运行以下命令安装 Vue CLI 和 Vite：
    ```
    npm install -g @vue/cli
    npm install -g vite
    ```

1. 运行以下命令创建一个新的 Vue 3 TypeScript 项目：

    ```
    vue create my-vue-project --preset=vue/cli-plugin-vue-next
    ```

1. 在创建项目的过程中，选择 TypeScript 作为语言，并根据需要选择其他选项。

1. 进入项目文件夹并运行以下命令启动开发服务器：

    ```
    cd my-vue-project
    npm run dev
    ```

现在，您应该可以在浏览器中访问 http://localhost:3000 并查看您的新项目。

---
> 