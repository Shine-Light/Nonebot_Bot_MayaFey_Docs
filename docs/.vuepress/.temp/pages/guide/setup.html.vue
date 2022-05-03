<template><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1>
<h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>系统:Windows 10 / Window 11 / Ubuntu 18.04 / Ubuntu 20.04 / Mac(没试过)<br>
python &gt;= 3.9<br>
poetry &gt;= 1.1.13<br>
mysql &gt;= 5.6<br>
以前安装过环境的可以跳过</p>
</div>
<h3 id="安装微软运行库" tabindex="-1"><a class="header-anchor" href="#安装微软运行库" aria-hidden="true">#</a> 安装微软运行库</h3>
<ol>
<li>
<p>在<a href="https://visualstudio.microsoft.com/zh-hans/downloads/" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>下载软件并打开(社区版本即可)</p>
</li>
<li>
<p>勾选C++桌面开发,可选勾选前两个,点击安装,等待安装完成<br>
<img src="/image/setup/setup/c++14.0.png"></p>
</li>
<li>
<p>点击重启,安装完成</p>
</li>
</ol>
<h3 id="安装python" tabindex="-1"><a class="header-anchor" href="#安装python" aria-hidden="true">#</a> 安装Python</h3>
<ol>
<li>
<p>在<a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python官网<ExternalLinkIcon/></a>下载 python3.9.x 的安装程序<br>
<img src='/image/setup/setup/python_install.png'></p>
</li>
<li>
<p>安装程序,安装时勾选 Add to Path<br>
<img src='/image/setup/setup/python_install1.png'></p>
</li>
<li>
<p>安装后打开cmd,输入 <code>python -V</code> 回车,若显示版本为3.9.x则 Python 安装成功</p>
</li>
</ol>
<h3 id="安装poetry" tabindex="-1"><a class="header-anchor" href="#安装poetry" aria-hidden="true">#</a> 安装poetry</h3>
<ol>
<li>
<p>输入 <code>pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/</code> 回车</p>
</li>
<li>
<p>输入 <code>pip install poetry</code> 回车,等待安装完成</p>
</li>
<li>
<p>输入 <code>poetry -V</code> 回车,若显示版本则 poetry 安装成功</p>
</li>
</ol>
<h3 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql" aria-hidden="true">#</a> 安装mysql</h3>
<ol>
<li>
<p>下载<a href="https://www.apachefriends.org/zh_cn/index.html" target="_blank" rel="noopener noreferrer">XAMPP<ExternalLinkIcon/></a>,打开安装程序,只需勾选 Mysql 即可,其余自行选择,等待安装完成</p>
</li>
<li>
<p>启动XAMPP,选择 Mysql 栏中的 Config,去掉 <code>password</code> 前的 <code>#</code> 号,修改等号后的 <code>your password</code>,这将作为数据库的密码</p>
</li>
</ol>
<h2 id="安装并配置go-cqhttp" tabindex="-1"><a class="header-anchor" href="#安装并配置go-cqhttp" aria-hidden="true">#</a> 安装并配置go-cqhttp</h2>
<ol>
<li>
<p>新建一个文件夹用于存放程序</p>
</li>
<li>
<p>根据自己的系统下载最新版的<a href="https://github.com/Mrs4s/go-cqhttp/releases/tag/v1.0.0-rc1" target="_blank" rel="noopener noreferrer">go-cqhttp<ExternalLinkIcon/></a>,不知道现在那个版本的请参考<a href="https://docs.go-cqhttp.org/guide/quick_start.html#%E4%B8%8B%E8%BD%BD" target="_blank" rel="noopener noreferrer">版本说明<ExternalLinkIcon/></a>,这里以Windows10系统演示(Github 打不开的可以自行百度 github hosts加速)</p>
</li>
<li>
<p>打开 <code>go-cqhttp.exe</code>,一路确定</p>
</li>
<li>
<p>打开 <code>go-cqhttp.bat</code>, 输入 <code>3</code>,然后回车</p>
</li>
<li>
<p>打开 <code>config.yml</code> (使用记事本,notepad等打开),修改<code>uin</code>和<code>password</code>为机器人的账号和密码(不建议使用自己的主账号)</p>
</li>
<li>
<p>修改 <code>universal</code> 为 <code>ws://127.0.0.1:25888/onebot/v11/ws</code>, 其余项目根据自己需要修改</p>
</li>
<li>
<p>打开 <code>go-cqhttp.bat</code>,可能会要求扫码或验证码,若出现下图的提示说明安装成功<br>
<img src='/image/setup/setup/go_success.png'></p>
</li>
</ol>
<h2 id="安装机器人" tabindex="-1"><a class="header-anchor" href="#安装机器人" aria-hidden="true">#</a> 安装机器人</h2>
<ol>
<li>
<p>前往<a href="https://github.com/Shine-Light/Nonebot_Bot_MayaFey" target="_blank" rel="noopener noreferrer">Github<ExternalLinkIcon/></a>下载最新版本的压缩包并解压</p>
</li>
<li>
<p>在解压后的文件夹内打开cmd,输入 <code>poetry install</code>,等待安装完成,安装期间请不要关闭程序,根据机器配置不同可能需要5~20分钟</p>
</li>
<li>
<p>安装完成</p>
</li>
</ol>
</template>
