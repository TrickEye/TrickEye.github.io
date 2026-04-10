---
title: 本地部署 Overleaf Community
date: 2026-04-02 23:48:31
tags: latex
categories:
- [gallery]
featured_image: assets/260402-1.png
---

## 硬件

- 一台 Mac Mini M4 16GB RAM 256GB SSD

## 软件

- Docker
- git
- [Overleaf Toolkit](https://github.com/overleaf/toolkit#)

## 步骤

1. 获取 overleaf toolkit `git clone https://github.com/overleaf/toolkit.git ./overleaf-toolkit`，之后根据其 [quick start guide](https://github.com/overleaf/toolkit/blob/master/doc/quick-start-guide.md) 进行配置。
2. `cd ./overleaf-toolkit`
3. `./bin/init` 这一步会生成 `config/` 内有 overleaf.rc, variables.env, version
    1. variables.env：含传递给 docker 的环境变量，比如 OVERLEAF_APP_NAME, 管理员邮箱信息等
    2. overleaf.rc: 重要变量包括 OVERLEAF_DATA_PATH, OVERLEAF_LISTEN_IP, PORT
    3. version: 记录当前使用的 sharelatex 版本
4. 原仓库是对于 x86 机器可用的，但 M4 是 arm 架构，部分行为不一致，因此需要做下面的修改：
    1. docker-compose.base.yml: `platform: linux/arm64`
    2. shared-functions.sh, L30: `mongo_image=${mongo_image/'MONGO_IMAGE='/}`, `mongo_version=${mongo_version/'MONGO_VERSION='/}`
5. `./bin/up` 启动服务，可能需要 sudo

---

到这里为止可以访问网页并注册一个管理员账号了。但原仓库使用的是最小化版本的 texlive，一些常用包和字体都没有装，因此需要安装完整版的 texlive：这一阶段的教程需要跟着 [这个知乎专栏](https://zhuanlan.zhihu.com/p/656444021) 走

1. 可以在 docker desktop 的 GUI 中进入 sharfelatex 的 bash，或者用 docker exec - it sharelatex bash
2. `tlmgr install scheme-full` 安装完整版 texlive

现在可以使用 overleaf 了。下一步需要安装部分缺少的字体，但在也可以在 overleaf 项目文件中使用 `\usepackage{fontspec}` 来使用系统字体，或目录下的字体了。比如

```latex
\usepackage{fontspec}
\newfontfamily\myfont{SimSun}
```

---

接下来在使用上还需要做的一些后续：

- 配一个反向代理来远程访问
- 使用 Mac 的 mDNS 来设置局域网域名访问，比如 `<name-of-your-mac>.local`