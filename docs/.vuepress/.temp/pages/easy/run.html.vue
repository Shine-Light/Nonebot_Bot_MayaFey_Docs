<template><div><h1 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h1>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>在安装完成后,建议先开启go-cqhttp,挂个3~5天,再开启机器人,这样不容易风控</p>
</div>
<h2 id="运行go-cqhttp" tabindex="-1"><a class="header-anchor" href="#运行go-cqhttp" aria-hidden="true">#</a> 运行go-cqhttp</h2>
<ol>
<li>
<p>输入 <code v-pre>screen -R gocq</code> 进入新窗口</p>
</li>
<li>
<p>输入 <code v-pre>cd /nonebot/go-cqhttp</code></p>
</li>
<li>
<p>输入 <code v-pre>./go-cqhttp</code></p>
</li>
<li>
<p>若出现下面的情况,说明已启动
<img src='/image/easy/run/gocq1.png'></p>
</li>
<li>
<p>同时按下键盘的 <code v-pre>Ctrl</code> , <code v-pre>A</code> 和 <code v-pre>D</code>键 将程序挂在后台运行</p>
</li>
</ol>
<h2 id="运行机器人" tabindex="-1"><a class="header-anchor" href="#运行机器人" aria-hidden="true">#</a> 运行机器人</h2>
<ol>
<li>输入 <code v-pre>screen -R bot</code> 进入新窗口</li>
<li>输入 <code v-pre>cd /nonebot/bot</code></li>
<li>输入 <code v-pre>poetry run python3 bot.py</code></li>
<li>在初次运行时会下载 chromiun 内核,下载速度可能很慢,等待下载完成</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>libatk-1.0.so.0 libatk-bridge-2.0.so.0 libcups.so.2 libxkbcommon.so.0 libXcomposite.so.1 libXdamage.so.1 libXext.so.6 libXfixes.so.3 libXrandr.so.2 libgbm.so.1 libpango-1.0.so.0 libcairo.so.2 libatspi.so.0</p>
</div>
<ol start="5">
<li>等待机器人启动</li>
<li>启动后,同时按下键盘的 <code v-pre>Ctrl</code> , <code v-pre>A</code> 和 <code v-pre>D</code>键 将程序挂在后台运行</li>
<li>将机器人拉入群,在群内发送一条信息 <code v-pre>/初始化</code></li>
<li>当机器人回复 <code v-pre>初始化成功</code> 时,机器人开始正常运行</li>
</ol>
</div></template>
