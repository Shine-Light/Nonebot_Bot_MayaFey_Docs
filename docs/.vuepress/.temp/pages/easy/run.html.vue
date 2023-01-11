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
<h2 id="运行祈愿接口" tabindex="-1"><a class="header-anchor" href="#运行祈愿接口" aria-hidden="true">#</a> 运行祈愿接口</h2>
<ol>
<li>输入 <code v-pre>screen -R bot</code> 进入新窗口</li>
<li>输入 <code v-pre>cd /nonebot/GenshinPray</code></li>
<li>输入 <code v-pre>dotnet GenshinPray.dll --launch-profile Production --urls http://0.0.0.0:8081</code></li>
<li>启动后,同时按下键盘的 <code v-pre>Ctrl</code> , <code v-pre>A</code> 和 <code v-pre>D</code>键 将程序挂在后台运行</li>
</ol>
<h2 id="运行机器人" tabindex="-1"><a class="header-anchor" href="#运行机器人" aria-hidden="true">#</a> 运行机器人</h2>
<ol>
<li>输入 <code v-pre>screen -R bot</code> 进入新窗口</li>
<li>输入 <code v-pre>cd /nonebot/bot</code></li>
<li>输入 <code v-pre>poetry run python3 bot.py</code></li>
<li>在初次运行时会下载 chromiun 内核,下载速度可能很慢,等待下载完成</li>
<li>等待机器人启动</li>
<li>启动后,同时按下键盘的 <code v-pre>Ctrl</code> , <code v-pre>A</code> 和 <code v-pre>D</code>键 将程序挂在后台运行</li>
</ol>
</div></template>
