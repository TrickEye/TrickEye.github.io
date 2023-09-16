export type blogMetaTemplate = {
    uuid: string;
    title: string;
    date: string;
    tags: string[];
    desc?: string[];
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
            配置一个具有运行和调试C语言源文件能力的VS Code`,
            `主要的操作包括：安装必要插件，配置任务等`,
            `此外安利一波CLion`
        ]
    },
    "B2": {
        uuid: "B2",
        title: "Hello World",
        date: "2023-09-15",
        tags: ["Vue"]
    },
    "B3": {
        uuid: "B3",
        title: "Hello World",
        date: "2023-09-15",
        tags: ["Vue"]
    },
    "B4": {
        uuid: "B4",
        title: "Hello World",
        date: "2023-09-15",
        tags: ["Vue"]
    },
    "B5": {
        uuid: "B5",
        title: "Hello World",
        date: "2023-09-15",
        tags: ["Vue"]
    },
    "B6": {
        uuid: "B5",
        title: "Hello World",
        date: "2023-09-15",
        tags: ["Vue"]
    },
    "B7": {
        uuid: "B5",
        title: "Hello World",
        date: "2023-09-15",
        tags: ["Vue"]
    },
    "B8": {
        uuid: "B5",
        title: "Hello World",
        date: "2023-09-15",
        tags: ["Vue"]
    },
    "B9": {
        uuid: "B5",
        title: "Hello World",
        date: "2023-09-15",
        tags: ["Vue"]
    },
    "B10": {
        uuid: "B5",
        title: "Hello World",
        date: "2023-09-15",
        tags: ["Vue"]
    },
    "B11": {
        uuid: "B5",
        title: "Hello World",
        date: "2023-09-15",
        tags: ["Vue"]
    },
    "B12": {
        uuid: "B5",
        title: "Hello World",
        date: "2023-09-15",
        tags: ["Vue"]
    },
    "B13": {
        uuid: "B5",
        title: "Hello World",
        date: "2023-09-15",
        tags: ["Vue"]
    },
    "B14": {
        uuid: "B5",
        title: "Hello World",
        date: "2023-09-15",
        tags: ["Vue"]
    },
    "B15": {
        uuid: "B5",
        title: "Hello World",
        date: "2023-09-15",
        tags: ["Vue"]
    },
    "B16": {
        uuid: "B5",
        title: "Hello World",
        date: "2023-09-15",
        tags: ["Vue"]
    },
};

export const todoBlog: blogMetaTemplate = {
    uuid: "TODO",
    title: "待完成的帖子",
    date: "2023-13-32",
    tags: ["todo"],
    desc: ['就快好了别急，键盘要冒烟了']
}