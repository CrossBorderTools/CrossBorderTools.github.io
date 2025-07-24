# VuePress

## 准备环境

1. Node.js v18.19.0+
1. npm
1. Git
1. 新建一个名为 `<username>.github.io` 的仓库
1. 配置 GitHub 密钥

### 配置 GitHub 密钥

1. 生成SSH密钥  
```bash
ssh-keygen -t rsa -f ~/.ssh/id_rsa -C "youremail"
```
2. 添加 SSH 密钥到平台  
将生成的公钥`id_rsa.pub`添加到 GitHub [设置][https://github.com/settings/keys]中

## 创建项目

```bash
npm init vuepress <username>.github.io
```

1. 这里的`<username>.github.io`是项目名称，可以自定义
1. 按回车键后根据提示选择配置，一般选择默认即可
  1. 如果需要侧边栏等配置选择`docs`
  1. 如果需要自动部署到 GitHub Pages，`是否需要一个自动部署文档到 GitHub Pages 的工作流？`一定要选择Yes
1. 当前最新版本是2.x，以下命令都是基于2.x版本的。

# 上传到GitHub
1. 初始化Git仓库
2. 新建.gitignore文件，添加以下内容
3. 提交代码并上传到GitHub
::: code-tabs
@tab 初始化Git仓库
```bash
cd <username>.github.io.git
git init
```
@tab .gitignore
```
# VuePress 默认临时文件目录
docs/.vuepress/.temp
# VuePress 默认缓存目录
docs/.vuepress/.cache
# VuePress 默认构建生成的静态文件目录
docs/.vuepress/dist
# 依赖
node_modules
```

@tab 提交代码并上传到GitHub
```bash
git add.
git commit -m "Initial commit"
git checkout -b main # 创建 main 分支
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin main # 首次推送 main 分支并设置上游
```
:::

## 部署
Settings > Pages > Build and deployment，设置Source为 Deploy from a brach，分支设置为gh-pages。

## 使用VuePress

### 启动开发环境
```bash
npm run docs:dev
```

### 构建静态网站
```bash
npm run docs:build
```

## 配置VuePress

### 基本配置

VuePress 站点的基本配置文件是 `/docs/.vuepress/config.js`，在.`/docs/.vuepress/config.js`文件中，我们可以配置 VuePress 的基本信息、主题、插件、markdown渲染器等。

