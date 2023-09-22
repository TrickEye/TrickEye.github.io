export type blogMetaTemplate = {
    uuid: string;
    title: string;
    date: string;
    tags: string[];
    desc?: string[];
    wait?: boolean;
}

export const blogs: {[key: string]: blogMetaTemplate} = {
    "B0": {
        uuid: "B0",
        title: "Hello World",
        date: "2023-09-15",
        tags: ["Vue"],
        desc: [
            `你好，世界！本文使用该网站写作的第一篇博客。`,
            `本博客使用GitHub维护，是一个纯前端项目，部署在GitHub Pages服务上。
            项目本身使用了NodeJS, Vue, Naive-ui等开源技术。项目部署借助CI/CD和其他云服务提供商的Serverless产品完成。`,
            `本文用于介绍和记录此博客的使用方式和特性，并协助测试本站开发的过程。`
        ]
        
    },
    "B1": {
        uuid: "B1",
        title: "VS Code配置C语言开发环境",
        date: "2023-09-16",
        tags: ["C", "IDE"],
        desc: [
            `本文旨在帮助尚无C语言开发基础，甚至尚无计算机科学基础的读者
            配置一个具有运行和调试C语言源文件能力的VS Code. `,
            `主要的操作包括：安装必要插件，配置任务等。`,
            `此外安利一波CLion`
        ]
    },
    "B2": {
        uuid: "B2",
        title: "响应式布局实现",
        date: "2023-09-18",
        tags: ["CSS"],
        desc: [
            `响应式布局是指这样一种布局：在不同的屏幕尺寸下，页面的布局会自动调整，以适应不同的屏幕尺寸。`,
            `本文中可以看到一种 CSS 的实现思路`
        ]
    },
    "B3": {
        uuid: "B3",
        title: "GitHub Pages 和使用",
        date: "2023-09-18",
        tags: ["前端"],
        desc: [
            `本文将介绍什么是 GitHub Pages ，如何使用 GitHub Pages 提供的服务，如何使用 CI/CD 部署网站。`,
            `此外参考本人经验和诸多博客，给出一些建站工具，以及列举一些建站的坑点。`,
        ]
    },
    "B4": {
        uuid: "B4",
        title: "如何理解 Vue 单页面应用",
        date: "2023-09-22",
        tags: ["Vue"],
        desc: [
            `这个问题在我尝试消除 Vue-Router 在 URL 中留下的 # 时出现：研究了诸多文档，发现
            使用 Vue 创建的应用是一个单页面应用。路由是通过 JS 完成的，而不是通过访问对应位置文件完成的。
            事实上那个对应位置根本就没有文件。这会引发一些 404 问题，带来一些坑，在此列举`,
        ]
    },
    "B5": {
        uuid: "B5",
        title: "使用 CSS 移除输入框自动填充的背景颜色",
        date: "2023-08-04",
        tags: ["CSS", "Vue"],
        desc: [
            `这是 Curve Summer Code Camp 的一份 PR 报告。`,
            `Issuer 希望移除浏览器自动填充功能生效后的背景颜色，
            但这并非一件易事。本文介绍问题分析，解决和测试的过程`
        ]
    },
    "B6": {
        uuid: "B6",
        title: "Ruby 中 === 的机制分析",
        date: "2023-09-21",
        tags: ["Ruby"],
        desc: [
            `这是 2023 年 Ruby 课程作业的一部分。Ruby 语言中的 ===
            操作，或者 case quality 操作符是与其它语言不完全相通的概念。`,
            `本文搜索相关资料，提出 case quality 操作的语义分析`
        ]
    }
};

export const todoBlog: blogMetaTemplate = {
    uuid: "TODO",
    title: "待完成的帖子",
    date: "2023-13-32",
    tags: ["todo"],
    desc: ['就快好了别急，键盘要冒烟了']
}