<template><div><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1>
<h2 id="go-cqhttp" tabindex="-1"><a class="header-anchor" href="#go-cqhttp" aria-hidden="true">#</a> go-cqhttp</h2>
<ol>
<li>输入 <code v-pre>mkdir -p /nonebot/go-cqhttp</code></li>
<li>输入 <code v-pre>cd /nonebot/go-cqhttp</code></li>
<li>输入 <code v-pre>wget https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_linux_386.tar.gz</code>,回车,等待下载完成</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>github连不上或者下载太慢? 看<a href="#github%E8%BF%9E%E6%8E%A5">常见问题</a></p>
</div>
<ol start="4">
<li>
<p>输入 <code v-pre>tar -zxvf go-cqhttp_linux_386.tar.gz</code>,回车</p>
</li>
<li>
<p>输入 <code v-pre>./go-cqhttp</code>,回车</p>
</li>
<li>
<p>输入 <code v-pre>3</code>,回车</p>
</li>
<li>
<p>同时按下键盘的 <code v-pre>Ctrl</code> 和 <code v-pre>C</code> 键</p>
</li>
<li>
<p>选择顶部的 <code v-pre>窗口</code>,选择 <code v-pre>传输新建文件</code></p>
</li>
<li>
<p>在弹出的窗口(后面统称为<code v-pre>传输窗口</code>)里,按住 <code v-pre>config.yml</code> 并拖至桌面</p>
</li>
<li>
<p>在桌面右键 <code v-pre>config.yml</code> 选择打开方式,选择其他应用,选择VScode勾选 <code v-pre>始终用该应用打开</code>,点击确定</p>
</li>
<li>
<p>在 <code v-pre>uin:</code> 后面填写机器人账号的QQ号,在 <code v-pre>password:</code> 的 <code v-pre>&quot;&quot;</code> 里面填写机器人账号的密码</p>
</li>
<li>
<p>划到最下面,将 <code v-pre>universal:</code> 的后面修改为 <code v-pre>ws://127.0.0.1:25888/onebot/v11/ws</code></p>
</li>
<li>
<p>同时按下键盘上的 <code v-pre>Ctrl</code> 和 <code v-pre>S</code> 键</p>
</li>
<li>
<p>返回桌面,把 <code v-pre>config.yml</code> 拖到 <code v-pre>传输窗口</code> 里,点击确定,关闭 <code v-pre>传输窗口</code></p>
</li>
<li>
<p>输入 <code v-pre>screen -R gocq</code> 回车,输入 <code v-pre>./go-cqhttp</code> 回车</p>
</li>
<li>
<p>若出现下图的情况则说明安装成功
<img src='/image/easy/setup/gocq5.png'></p>
</li>
<li>
<p>同时按下键盘的 <code v-pre>Ctrl</code> , <code v-pre>C</code> 退出程序</p>
</li>
<li>
<p>同时按下键盘的 <code v-pre>Ctrl</code> , <code v-pre>A</code> 和 <code v-pre>D</code>键 返回主窗口</p>
</li>
</ol>
<details class="custom-container details"><summary>具体流程图</summary>
<ol start="10">
<li>
<p>在桌面右键 <code v-pre>config.yml</code> 选择打开方式,选择其他应用,选择VScode勾选 <code v-pre>始终用该应用打开</code>,点击确定
<img src='/image/easy/setup/gocq1.png'>
<img src='/image/easy/setup/gocq2.png'></p>
</li>
<li>
<p>在 <code v-pre>uin:</code> 后面填写机器人账号的QQ号,在 <code v-pre>password:</code> 的 <code v-pre>&quot;&quot;</code> 里面填写机器人账号的密码
<img src='/image/easy/setup/gocq3.png'></p>
</li>
<li>
<p>划到最下面,将 <code v-pre>universal:</code> 的后面修改为 <code v-pre>ws://127.0.0.1:25888/onebot/v11/ws</code>
<img src='/image/easy/setup/gocq4.png'></p>
</li>
</ol>
</details>
<h2 id="安装机器人" tabindex="-1"><a class="header-anchor" href="#安装机器人" aria-hidden="true">#</a> 安装机器人</h2>
<ol>
<li>输入 <code v-pre>apt -y install git</code> 回车,等待安装完成</li>
<li>输入 <code v-pre>cd /nonebot</code> 回车</li>
<li>输入 <code v-pre>git clone https://github.com/Shine-Light/Nonebot_Bot_MayaFey.git</code> 回车</li>
<li>输入 <code v-pre>mv Nonebot_Bot_MayaFey bot</code> 回车</li>
<li>输入 <code v-pre>cd bot</code> 回车,输入 <code v-pre>poetry install</code>,等待安装(可能需要5~20分钟)</li>
<li>打开 <code v-pre>传输窗口</code> ,将 <code v-pre>.env.prod</code> 拖到桌面,关闭传输窗口</li>
</ol>
</div></template>
