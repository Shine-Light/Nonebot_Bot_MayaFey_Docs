<template><div><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1>
<h2 id="go-cqhttp" tabindex="-1"><a class="header-anchor" href="#go-cqhttp" aria-hidden="true">#</a> go-cqhttp</h2>
<ol>
<li>输入 <code v-pre>mkdir -p /nonebot/go-cqhttp</code></li>
<li>输入 <code v-pre>cd /nonebot/go-cqhttp</code></li>
<li>输入 <code v-pre>wget https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_linux_386.tar.gz</code>,回车,等待下载完成</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>github连不上或者下载太慢? 看<RouterLink to="/problem/#github%E9%80%9F%E5%BA%A6%E6%85%A2">常见问题</RouterLink></p>
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
<h2 id="安装原神祈愿api-可选" tabindex="-1"><a class="header-anchor" href="#安装原神祈愿api-可选" aria-hidden="true">#</a> 安装原神祈愿API(可选)</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>如果不需要这个功能可以跳过这一步</p>
</div>
<ol>
<li>
<p>在 <a href="https://github.com/GardenHamster/GenshinPray/releases" target="_blank" rel="noopener noreferrer">https://github.com/GardenHamster/GenshinPray/releases<ExternalLinkIcon/></a> 中找到最新版本的压缩包,右键复制链接,替换下方的 <code v-pre>{releases}</code>
<img src="/image/easy/setup/GenshinPray2.png"></p>
</li>
<li>
<p>顺序将以下代码复制粘贴回车运行</p>
</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /nonebot
<span class="token function">git</span> clone https://github.com/GardenHamster/GenshinPray.git
<span class="token builtin class-name">cd</span> GenshinPray/GenshinPray
<span class="token function">mv</span> PrayMaterial /nonebot/GenshinPray/PrayMaterial
<span class="token function">mv</span> Sql/initData.sql /nonebot/GenshinPray/initData.sql
<span class="token function">mv</span> Fonts/zh-cn.ttf /usr/share/fonts
fc-cache
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
<span class="token function">rm</span> -rf GenshinPray
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
<span class="token function">wget</span> <span class="token punctuation">{</span>releases<span class="token punctuation">}</span>
<span class="token function">unzip</span> GenshinPray.zip
<span class="token function">rm</span> -f GenshinPray.zip
<span class="token function">wget</span> https://dot.net/v1/dotnet-install.sh
<span class="token function">sudo</span> <span class="token function">bash</span> dotnet-install.sh -c <span class="token number">6.0</span> --runtime aspnetcore
<span class="token function">ln</span> -s <span class="token environment constant">$HOME</span>/.dotnet/dotnet /usr/bin/dotnet
<span class="token builtin class-name">cd</span> GenshinPray
<span class="token function">apt</span> <span class="token function">install</span> -y libgdiplus
<span class="token function">vim</span> appsettings.Production.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>依次按下 <code v-pre>g</code> <code v-pre>g</code> <code v-pre>d</code> <code v-pre>G</code>,按下 <code v-pre>i</code> 键</li>
<li>将以下代码的 <code v-pre>{password}</code> 替换为你的数据库密码,复制后右键粘贴到控制台</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"ConnectionString"</span><span class="token operator">:</span> <span class="token string">"Data Source=127.0.0.1;port=3306;Initial Catalog=genshinpray;uid=root;pwd={password};CharSet=utf8mb4;SslMode=None;"</span><span class="token punctuation">,</span> <span class="token comment">//数据库链接字符串</span>
  <span class="token property">"PrayImgSavePath"</span><span class="token operator">:</span> <span class="token string">"/nonebot/bot/resource/img/GenshinPray"</span><span class="token punctuation">,</span> <span class="token comment">//祈愿结果图片保存目录</span>
  <span class="token property">"PrayMaterialSavePath"</span><span class="token operator">:</span> <span class="token string">"/nonebot/GenshinPray/PrayMaterial"</span><span class="token punctuation">,</span> <span class="token comment">//祈愿素材图片目录</span>
  <span class="token property">"PrayImgHttpUrl"</span><span class="token operator">:</span> <span class="token string">"{imgPath}"</span> <span class="token comment">//祈愿接口中返回的图片地址</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>
<p>按下 <code v-pre>:</code> <code v-pre>w</code> <code v-pre>q</code> 回车保存</p>
</li>
<li>
<p>输入 <code v-pre>dotnet GenshinPray.dll --launch-profile Production --urls http://0.0.0.0:8081</code>,回车,如果出现下面的提示,说明安装正常
<img src="/image/easy/setup/GenshinPray.png"></p>
</li>
<li>
<p>按下 <code v-pre>Ctrl</code> + <code v-pre>C</code> 退出程序</p>
</li>
<li>
<p>运行 <code v-pre>mysql -uroot -p你的密码 genshinpray&lt;initData.sql</code></p>
</li>
</ol>
</div></template>
