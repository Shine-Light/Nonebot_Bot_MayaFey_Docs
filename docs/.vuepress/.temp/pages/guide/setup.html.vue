<template><div><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1>
<h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>系统:Windows 10 / Window 11 / Ubuntu 18.04 / Ubuntu 20.04 / Mac(没试过)<br>
python &gt;= 3.9<br>
poetry &gt;= 1.1.13<br>
mysql &gt;= 5.6<br>
以前安装过环境的可以跳过<br>
测试环境: Windows10 Mysql8.0 python3.9 poetry1.1.13</p>
</div>
<h3 id="安装微软运行库" tabindex="-1"><a class="header-anchor" href="#安装微软运行库" aria-hidden="true">#</a> 安装微软运行库</h3>
<h4 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h4>
<ol>
<li>在<a href="https://visualstudio.microsoft.com/zh-hans/downloads/" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>下载软件并打开(社区版本即可)</li>
<li>勾选C++桌面开发,可选勾选前两个,点击安装,等待安装完成<br>
<img src="/image/setup/setup/c++14.0.png"></li>
<li>点击重启,安装完成</li>
</ol>
<h4 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h4>
<p>Linux无需该步骤</p>
<h3 id="安装python和pip" tabindex="-1"><a class="header-anchor" href="#安装python和pip" aria-hidden="true">#</a> 安装Python和pip</h3>
<h4 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> Window</h4>
<ol>
<li>在<a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python官网<ExternalLinkIcon/></a>下载 python3.9.x 的安装程序<br>
<img src='/image/setup/setup/python_install.png'></li>
<li>安装程序,安装时勾选 Add to Path<br>
<img src='/image/setup/setup/python_install1.png'></li>
<li>安装后打开cmd,输入 <code v-pre>python -V</code> 回车,若显示版本为3.9.x则 Python 安装成功</li>
</ol>
<h4 id="linux-1" tabindex="-1"><a class="header-anchor" href="#linux-1" aria-hidden="true">#</a> Linux</h4>
<p>方法很多,自行百度</p>
<h3 id="安装poetry" tabindex="-1"><a class="header-anchor" href="#安装poetry" aria-hidden="true">#</a> 安装poetry</h3>
<ol>
<li>在命令行输入 <code v-pre>pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/</code> 回车</li>
<li>输入 <code v-pre>pip install poetry</code> 回车,等待安装完成</li>
<li>输入 <code v-pre>poetry -V</code> 回车,若显示版本则 poetry 安装成功</li>
</ol>
<h3 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql" aria-hidden="true">#</a> 安装mysql</h3>
<h4 id="windows-1" tabindex="-1"><a class="header-anchor" href="#windows-1" aria-hidden="true">#</a> Windows</h4>
<ol>
<li>下载<a href="https://www.apachefriends.org/zh_cn/index.html" target="_blank" rel="noopener noreferrer">XAMPP<ExternalLinkIcon/></a>,打开安装程序,只需勾选 Mysql 即可,其余自行选择,等待安装完成</li>
<li>以管理员身份启动XAMPP</li>
<li>启动Apache和Mysql</li>
<li>选择Mysql栏的 Admin 进入管理面板</li>
<li>选择 用户 选项卡,选择主机名为 <code v-pre>localhost</code> 的 <code v-pre>root</code> 账户,选择 <code v-pre>change password</code> 选项卡,修改密码后确认</li>
</ol>
<h4 id="linux-2" tabindex="-1"><a class="header-anchor" href="#linux-2" aria-hidden="true">#</a> Linux</h4>
<p>方法很多,自行百度</p>
<h3 id="安装ffmpeg" tabindex="-1"><a class="header-anchor" href="#安装ffmpeg" aria-hidden="true">#</a> 安装ffmpeg</h3>
<p>参考<a href="https://docs.go-cqhttp.org/guide/quick_start.html#%E5%AE%89%E8%A3%85-ffmpeg" target="_blank" rel="noopener noreferrer">https://docs.go-cqhttp.org/guide/quick_start.html#%E5%AE%89%E8%A3%85-ffmpeg<ExternalLinkIcon/></a></p>
<h2 id="安装并配置go-cqhttp" tabindex="-1"><a class="header-anchor" href="#安装并配置go-cqhttp" aria-hidden="true">#</a> 安装并配置go-cqhttp</h2>
<h3 id="windows-2" tabindex="-1"><a class="header-anchor" href="#windows-2" aria-hidden="true">#</a> Windows</h3>
<ol>
<li>新建一个文件夹用于存放程序</li>
<li>根据自己的系统下载最新版的<a href="https://github.com/Mrs4s/go-cqhttp/releases" target="_blank" rel="noopener noreferrer">go-cqhttp<ExternalLinkIcon/></a>,不知道现在那个版本的请参考<a href="https://docs.go-cqhttp.org/guide/quick_start.html#%E4%B8%8B%E8%BD%BD" target="_blank" rel="noopener noreferrer">版本说明<ExternalLinkIcon/></a>,这里以Windows10系统演示(Github 打不开的可以自行百度 github hosts加速)</li>
<li>打开 <code v-pre>go-cqhttp.exe</code>,一路确定</li>
<li>打开 <code v-pre>go-cqhttp.bat</code>, 输入 <code v-pre>3</code>,然后回车</li>
<li>打开 <code v-pre>config.yml</code> (使用记事本,vscode等打开),修改<code v-pre>uin</code>和<code v-pre>password</code>为机器人的账号和密码(不建议使用自己的主账号)</li>
<li>修改 <code v-pre>universal</code> 为 <code v-pre>ws://127.0.0.1:25888/onebot/v11/ws</code>, 其余项目根据自己需要修改</li>
<li>打开 <code v-pre>go-cqhttp.bat</code>,可能会要求扫码或验证码,若出现下图的提示说明安装成功<br>
<img src='/image/setup/setup/go_success.png'></li>
</ol>
<h3 id="linux-3" tabindex="-1"><a class="header-anchor" href="#linux-3" aria-hidden="true">#</a> Linux</h3>
<ol>
<li><code v-pre>wget https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_linux_amd64.tar.gz</code></li>
<li><code v-pre>tar -xvf go-cqhttp_linux_amd64.tar.gz</code></li>
<li><code v-pre>cd go-cqhttp_linux_amd64</code></li>
<li><code v-pre>vi config.yml</code>,按i开始修改,将 <code v-pre>universal</code> 修改为 <code v-pre>ws://127.0.0.1:25888/onebot/v11/ws</code>,修改<code v-pre>uin</code>和<code v-pre>password</code>为机器人的账号和密码,修改完输入 <code v-pre>:wq</code>,回车退出</li>
<li><code v-pre>./go-cqhttp</code>,可能会要求扫码或验证码,若出现下图的提示说明安装成功<br>
<img src='/image/setup/setup/go_success.png'></li>
</ol>
<h2 id="安装机器人" tabindex="-1"><a class="header-anchor" href="#安装机器人" aria-hidden="true">#</a> 安装机器人</h2>
<h3 id="windows-3" tabindex="-1"><a class="header-anchor" href="#windows-3" aria-hidden="true">#</a> Windows</h3>
<ol>
<li>前往<a href="https://github.com/Shine-Light/Nonebot_Bot_MayaFey" target="_blank" rel="noopener noreferrer">Github<ExternalLinkIcon/></a>下载最新版本的压缩包并解压</li>
<li>在解压后的文件夹内打开cmd,输入 <code v-pre>poetry install</code>,等待安装完成,安装期间请不要关闭程序,根据机器配置不同可能需要5~20分钟</li>
<li>安装完成</li>
</ol>
<h3 id="linux-4" tabindex="-1"><a class="header-anchor" href="#linux-4" aria-hidden="true">#</a> Linux</h3>
<ol>
<li>输入 <code v-pre>git clone https://github.com/Shine-Light/Nonebot_Bot_MayaFey.git</code> 回车</li>
<li>进入目录,<code v-pre>poetry install</code>,等待安装完成,安装期间请不要关闭程序,根据机器配置不同可能需要5~20分钟</li>
<li>安装完成</li>
</ol>
<h2 id="安装原神祈愿api-可选" tabindex="-1"><a class="header-anchor" href="#安装原神祈愿api-可选" aria-hidden="true">#</a> 安装原神祈愿API(可选)</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>如果不需要这个功能可以跳过这一步</p>
</div>
<h3 id="windows-4" tabindex="-1"><a class="header-anchor" href="#windows-4" aria-hidden="true">#</a> Windows</h3>
<ol>
<li>下载 <a href="https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-6.0.8-windows-hosting-bundle-installer" target="_blank" rel="noopener noreferrer">https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-6.0.8-windows-hosting-bundle-installer<ExternalLinkIcon/></a> 并安装</li>
<li>新建一个文件夹用于存放程序</li>
<li>在 <a href="https://github.com/GardenHamster/GenshinPray" target="_blank" rel="noopener noreferrer">https://github.com/GardenHamster/GenshinPray<ExternalLinkIcon/></a> 中下载源代码并解压</li>
<li>进入解压后的文件夹,保留 <code v-pre>GenshinPray/PrayMaterial</code> 文件夹, <code v-pre>GenshinPray/PrayMaterial/initData.sql</code> 和 <code v-pre>GenshinPray/Fonts/zh-cn.ttf</code> 文件,其余文件删除</li>
<li>打开 <code v-pre>zh-cn.ttf</code> 并安装</li>
<li>在 <a href="https://github.com/GardenHamster/GenshinPray/releases" target="_blank" rel="noopener noreferrer">https://github.com/GardenHamster/GenshinPray/releases<ExternalLinkIcon/></a> 中下载最新版本的 <code v-pre>GenshinPray.zip</code> 并解压</li>
<li>进入文件夹,编辑 <code v-pre>appsettings.Production.json</code>,按要求修改以下代码并复制,然后替换原有内容,路径中的 <code v-pre>\</code> 要写成 <code v-pre>\\</code></li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"ConnectionString"</span><span class="token operator">:</span> <span class="token string">"Data Source=127.0.0.1;port=3306;Initial Catalog=genshinpray;uid=root;pwd=数据库密码;CharSet=utf8mb4;SslMode=None;"</span><span class="token punctuation">,</span> <span class="token comment">//数据库链接字符串</span>
  <span class="token property">"PrayImgSavePath"</span><span class="token operator">:</span> <span class="token string">"机器人目录\\resource\\img\\GenshinPray"</span><span class="token punctuation">,</span> <span class="token comment">//祈愿结果图片保存目录</span>
  <span class="token property">"PrayMaterialSavePath"</span><span class="token operator">:</span> <span class="token string">"PrayMaterial目录"</span><span class="token punctuation">,</span> <span class="token comment">//祈愿素材图片目录</span>
  <span class="token property">"PrayImgHttpUrl"</span><span class="token operator">:</span> <span class="token string">"{imgPath}"</span> <span class="token comment">//祈愿接口中返回的图片地址</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8">
<li>在cmd中运行 <code v-pre>dotnet GenshinPray.dll --launch-profile Production --urls http://0.0.0.0:8081</code>,等待初始化完成后退出程序</li>
<li>在 xampp 中打开 mysql 管理面板</li>
<li>选择 <code v-pre>genshinpray</code> 数据库,选择 <code v-pre>导入</code> 选项卡,点击选择文件,选择 <code v-pre>initData.sql</code>,点击执行,成功后退出面板</li>
</ol>
<h3 id="linux-5" tabindex="-1"><a class="header-anchor" href="#linux-5" aria-hidden="true">#</a> Linux</h3>
<ol>
<li>在 <a href="https://github.com/GardenHamster/GenshinPray/releases" target="_blank" rel="noopener noreferrer">https://github.com/GardenHamster/GenshinPray/releases<ExternalLinkIcon/></a> 中找到最新版本的压缩包链接,替换下方的 <code v-pre>{releases}</code></li>
<li>根据情况修改以下代码,顺序将以下代码复制粘贴回车运行</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">screen</span> -R Genshin
<span class="token builtin class-name">cd</span> /机器人目录
<span class="token function">git</span> clone https://github.com/GardenHamster/GenshinPray.git
<span class="token builtin class-name">cd</span> GenshinPray/GenshinPray
<span class="token function">mv</span> PrayMaterial /机器人目录/GenshinPray/PrayMaterial
<span class="token function">mv</span> Sql/initData.sql /机器人目录/GenshinPray/initData.sql
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
<span class="token function">vim</span> appsettings.Production.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>将以下代码的 <code v-pre>{password}</code> 替换为你的数据库密码,粘贴并保存</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"ConnectionString"</span><span class="token operator">:</span> <span class="token string">"Data Source=127.0.0.1;port=3306;Initial Catalog=genshinpray;uid=root;pwd=数据库密码;CharSet=utf8mb4;SslMode=None;"</span><span class="token punctuation">,</span> <span class="token comment">//数据库链接字符串</span>
  <span class="token property">"PrayImgSavePath"</span><span class="token operator">:</span> <span class="token string">"机器人目录/resource/img/GenshinPray"</span><span class="token punctuation">,</span> <span class="token comment">//祈愿结果图片保存目录</span>
  <span class="token property">"PrayMaterialSavePath"</span><span class="token operator">:</span> <span class="token string">"PrayMaterial目录"</span><span class="token punctuation">,</span> <span class="token comment">//祈愿素材图片目录</span>
  <span class="token property">"PrayImgHttpUrl"</span><span class="token operator">:</span> <span class="token string">"{imgPath}"</span> <span class="token comment">//祈愿接口中返回的图片地址</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>按下 <code v-pre>:</code> <code v-pre>w</code> <code v-pre>q</code> 回车保存</li>
<li>输入 <code v-pre>dotnet GenshinPray.dll --launch-profile Production --urls http://0.0.0.0:8081</code>,回车</li>
<li><code v-pre>Ctrl</code> + <code v-pre>C</code> 退出程序</li>
<li>运行 <code v-pre>mysql -uroot -p你的密码 genshinpray&lt;initData.sql</code><br>
<code v-pre>Ctrl</code> + <code v-pre>A</code> + <code v-pre>D</code> 返回主窗口</li>
</ol>
</div></template>
