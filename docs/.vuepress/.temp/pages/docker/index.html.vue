<template><div><h1 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装" aria-hidden="true">#</a> Docker安装</h1>
<h2 id="下载镜像" tabindex="-1"><a class="header-anchor" href="#下载镜像" aria-hidden="true">#</a> 下载镜像</h2>
<h2 id="运行镜像" tabindex="-1"><a class="header-anchor" href="#运行镜像" aria-hidden="true">#</a> 运行镜像</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run --name mayafey_test -v H:/project/Bot/Docker/test/.env.prod:/Nonebot/MayaFey/.env.prod -v H:/project/Bot/Docker/test/config.yml:/Nonebot/go-cqhttp/config.yml -p <span class="token number">3307</span>:3306 mayafey:0.4.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
