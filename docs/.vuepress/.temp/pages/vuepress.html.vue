<template><div><h1 id="准备环境" tabindex="-1"><a class="header-anchor" href="#准备环境"><span>准备环境</span></a></h1>
<ol>
<li>Node.js v18.19.0+</li>
<li>npm</li>
<li>Git</li>
<li>新建一个名为 <code v-pre>&lt;username&gt;.github.io</code> 的仓库</li>
</ol>
<h2 id="git-配置密钥" tabindex="-1"><a class="header-anchor" href="#git-配置密钥"><span>Git 配置密钥</span></a></h2>
<ol>
<li>生成SSH密钥</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-f</span> ~/.ssh/id_rsa <span class="token parameter variable">-C</span> <span class="token string">"youremail"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>添加 SSH 密钥到平台<br>
将生成的公钥<code v-pre>id_rsa.pub</code>添加到 GitHub [设置][https://github.com/settings/keys]中</li>
</ol>
<h1 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h1>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> init vuepress <span class="token operator">&lt;</span>username<span class="token operator">></span>.github.io</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol>
<li>这里的<code v-pre>&lt;username&gt;.github.io</code>是项目名称，可以自定义</li>
<li>按回车键后根据提示选择配置，一般选择默认即可</li>
<li>如果需要侧边栏等配置选择<code v-pre>docs</code></li>
<li>如果需要自动部署到 GitHub Pages，<code v-pre>是否需要一个自动部署文档到 GitHub Pages 的工作流？</code>一定要选择Yes</li>
<li>当前最新版本是2.x，以下命令都是基于2.x版本的。</li>
</ol>
<h1 id="上传到github" tabindex="-1"><a class="header-anchor" href="#上传到github"><span>上传到GitHub</span></a></h1>
<ol>
<li>初始化Git仓库</li>
<li>新建.gitignore文件，添加以下内容</li>
<li>提交代码并上传到GitHub</li>
</ol>
<CodeTabs id="94" :data='[{"id":"初始化Git仓库"},{"id":".gitignore"},{"id":"提交代码并上传到GitHub"}]'>
<template #title0="{ value, isActive }">初始化Git仓库</template>
<template #title1="{ value, isActive }">.gitignore</template>
<template #title2="{ value, isActive }">提交代码并上传到GitHub</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>username<span class="token operator">></span>.github.io.git</span>
<span class="line"><span class="token function">git</span> init</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line"># VuePress 默认临时文件目录</span>
<span class="line">.vuepress/.temp</span>
<span class="line"># VuePress 默认缓存目录</span>
<span class="line">.vuepress/.cache</span>
<span class="line"># VuePress 默认构建生成的静态文件目录</span>
<span class="line">.vuepress/dist</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> add.</span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Initial commit"</span></span>
<span class="line"><span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/<span class="token operator">&lt;</span>username<span class="token operator">></span>/<span class="token operator">&lt;</span>username<span class="token operator">></span>.github.io.git</span>
<span class="line"><span class="token function">git</span> push <span class="token parameter variable">-u</span> origin HEAD <span class="token comment"># 首次推送默认分支并设置上游</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h1 id="使用vuepress" tabindex="-1"><a class="header-anchor" href="#使用vuepress"><span>使用VuePress</span></a></h1>
<h2 id="启动开发环境" tabindex="-1"><a class="header-anchor" href="#启动开发环境"><span>启动开发环境</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run docs:dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>构建静态网站</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run docs:build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


