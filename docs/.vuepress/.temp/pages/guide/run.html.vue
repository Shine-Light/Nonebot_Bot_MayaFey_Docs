<template><div><h1 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h1>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>在安装完成后,建议先开启go-cqhttp,挂个3~5天,再开启机器人,这样不容易风控</p>
</div>
<h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h2>
<ol>
<li>进入go-cqhttp所在目录,打开 <code v-pre>go-cqhttp.bat</code></li>
<li>在机器人所在目录,打开 <code v-pre>start.bat</code></li>
<li>开始运行</li>
</ol>
<h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h2>
<ol>
<li>进入go-cqhttp所在目录,输入 <code v-pre>screen -R gocq</code></li>
<li>输入 <code v-pre>./go-cqhttp</code></li>
<li>等待运行,运行后按 Ctrl + A + D 退出窗口</li>
<li>进入机器人目录,输入 <code v-pre>screen -R bot</code></li>
<li>输入 <code v-pre>poetry run python3 bot.py</code></li>
<li>等待运行,运行后按 Ctrl + A + D 退出窗口,想回到机器人终端输入 <code v-pre>screen -R bot</code> 即可</li>
</ol>
</div></template>
