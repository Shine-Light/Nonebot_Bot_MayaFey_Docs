<template><div><h1 id="前置准备" tabindex="-1"><a class="header-anchor" href="#前置准备" aria-hidden="true">#</a> 前置准备</h1>
<h2 id="服务器准备" tabindex="-1"><a class="header-anchor" href="#服务器准备" aria-hidden="true">#</a> 服务器准备</h2>
<h3 id="选购" tabindex="-1"><a class="header-anchor" href="#选购" aria-hidden="true">#</a> 选购</h3>
<p>云服务器提供商有很多腾讯云、阿里云、百度云、华为云等等,每个提供商的活动都不相同,可以自行前往官网了解<br>
服务器类型推荐 轻量应用服务器 ,轻量应用服务器适合机器人这样的小项目,价格便宜部署简单,但是弹性较差,可以自行权衡选择<br>
这里以 本地的 Ubuntu20.04 虚拟机 做演示,各个平台的操作大同小异<br>
<img src='/image/easy/pre/server_buy.gif'></p>
<div class="custom-container warning"><p class="custom-container-title">提示</p>
<p>服务器的地区尽量选择中国大陆地区,我选择香港地区主要是因为便宜,如果选择在非大陆地区,则后期配置会较麻烦,且有部分功能可能无法使用</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">提示</p>
<p>购买时的系统<br>
Windows:无限制<br>
Linux:Ubuntu20.04/Ubuntu18.04/Ubuntu22.04</p>
</div>
<p>完成选择后点击购买<br>
如果出现售罄的情况,可以选择其他配置或地区的机器,或者等待补货(纯看运气)</p>
<h2 id="软件准备" tabindex="-1"><a class="header-anchor" href="#软件准备" aria-hidden="true">#</a> 软件准备</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>涉及的软件我都放在蓝奏云上,可以直接下载,但还是推荐在官网下载确保是新版本<br>
地址:<a href="https://wwi.lanzoup.com/b01jfb1ng" target="_blank" rel="noopener noreferrer">https://wwi.lanzoup.com/b01jfb1ng<ExternalLinkIcon/></a><br>
密码:86lx</p>
</div>
<h3 id="xshell" tabindex="-1"><a class="header-anchor" href="#xshell" aria-hidden="true">#</a> Xshell</h3>
<p>下载XshellPlus安装程序<br>
双击程序进行安装</p>
<h3 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> VScode</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>其实记事本也可以<br>
别问我为什么不用notepad++</p>
</div>
<p>在<a href="https://code.visualstudio.com/Download" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>下载安装包<br>
打开安装程序进行安装</p>
<h2 id="连接准备" tabindex="-1"><a class="header-anchor" href="#连接准备" aria-hidden="true">#</a> 连接准备</h2>
<ol>
<li>进入<a href="https://aliyun.com" target="_blank" rel="noopener noreferrer">阿里云<ExternalLinkIcon/></a>官网,在右上角打开控制台</li>
<li>选择轻量应用服务器</li>
<li>找到刚才购买的服务器</li>
<li>在侧边栏选择远程连接</li>
<li>设置密码,然后复制IP</li>
</ol>
<div class="custom-container warning"><p class="custom-container-title">警告</p>
<p>服务器的IP千万不要泄露出去,不然容易被攻击</p>
</div>
<ol start="6">
<li>打开Xshell,选择新建</li>
<li>在主机一栏中填写刚才复制的IP</li>
<li>在侧边栏选择用户身份验证,用户名输入 <code v-pre>root</code>,密码输入刚才设置的密码,填写完点击确定</li>
<li>双击刚才新建得到会话进行连接</li>
</ol>
<details class="custom-container details"><summary>具体流程图</summary>
<ol>
<li>进入<a href="https://aliyun.com" target="_blank" rel="noopener noreferrer">阿里云<ExternalLinkIcon/></a>官网,在右上角打开控制台<br>
<img src='/image/easy/pre/con1.png'></li>
<li>选择轻量应用服务器<br>
<img src='/image/easy/pre/con2.png'></li>
<li>找到刚才购买的服务器<br>
<img src='/image/easy/pre/con3.png'></li>
<li>在侧边栏选择远程连接<br>
<img src='/image/easy/pre/con4.png'></li>
<li>设置密码,然后复制IP<br>
<img src='/image/easy/pre/con5.png'></li>
<li>打开Xshell,选择新建<br>
<img src='/image/easy/pre/con6.png'></li>
<li>在主机一栏中填写刚才复制的IP<br>
<img src='/image/easy/pre/con7.png'></li>
<li>在侧边栏选择用户身份验证,用户名输入 <code v-pre>root</code>,密码输入刚才设置的密码,填写完点击确定<br>
<img src='/image/easy/pre/con8.png'></li>
<li>双击刚才新建得到会话进行连接<br>
<img src='/image/easy/pre/con9.png'></li>
</ol>
</details>
<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>以下操作全部在 Xshell 中操作</p>
</div>
<h3 id="更换-apt-源" tabindex="-1"><a class="header-anchor" href="#更换-apt-源" aria-hidden="true">#</a> 更换 apt 源</h3>
<ol>
<li>输入 <code v-pre>vim /etc/apt/sources.list</code> 回车</li>
<li>按顺序按下键盘上的 <code v-pre>g</code> <code v-pre>g</code> <code v-pre>d</code> <code v-pre>G</code>,按下键盘上的 <code v-pre>i</code> 键</li>
<li>复制下面的代码,右键粘贴</li>
</ol>
<CodeGroup>
<CodeGroupItem title="18.04">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="20.04">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<ol start="4">
<li>输入 <code v-pre>:</code>,输入 <code v-pre>wq</code> 回车</li>
<li>输入 <code v-pre>apt update</code> 回车</li>
</ol>
<h3 id="python-3-9" tabindex="-1"><a class="header-anchor" href="#python-3-9" aria-hidden="true">#</a> Python 3.9</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>输入 <code v-pre>python3 -V</code> 回车,如果出现 3.9.x 则说明已经安装过python3.9,可以跳过这一步</p>
</div>
<ol>
<li>输入 <code v-pre>apt install -y python3.9</code></li>
<li>输入 <code v-pre>ln -s /bin/python3.9 /bin/python3</code>,回车</li>
<li>输入 <code v-pre>python3 -V</code>,回车,若出现Python3.9.x,则说明安装成功<br>
<img src='/image/easy/pre/python4.png'></li>
</ol>
<h3 id="pip3" tabindex="-1"><a class="header-anchor" href="#pip3" aria-hidden="true">#</a> pip3</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>输入 <code v-pre>pip3 --version</code> 回车,如果有版本显示,说明已安装过<br>
输入 <code v-pre>pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple</code>,回车,然后可以跳过这步</p>
</div>
<ol>
<li>
<p>输入 <code v-pre>curl https://bootstrap.pypa.io/ez_setup.py -o - | python3 &amp;&amp; python3 -m easy_install pip</code></p>
</li>
<li>
<p>输入 <code v-pre>ln -s /bin/pip /bin/pip3</code></p>
</li>
<li>
<p>输入 <code v-pre>pip3 --version</code> 回车,如果有版本显示,说明安装成功
<img src='/image/easy/pre/python5.png'></p>
</li>
<li>
<p>输入 <code v-pre>pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple</code>,回车</p>
</li>
</ol>
<h3 id="poetry" tabindex="-1"><a class="header-anchor" href="#poetry" aria-hidden="true">#</a> poetry</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>输入 <code v-pre>poetry -V</code> 回车,若出现版本,说明已安装过,可以跳过这步</p>
</div>
<ol>
<li>输入 <code v-pre>pip3 install poetry</code>,等待安装完成</li>
<li>输入 <code v-pre>poetry -V</code> 回车,若出现版本,说明安装成功</li>
</ol>
<h3 id="screen" tabindex="-1"><a class="header-anchor" href="#screen" aria-hidden="true">#</a> Screen</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>输入 <code v-pre>screen -v</code> 回车,若有版本显示,则说明已经安装过,可以跳过这一步</p>
</div>
<ol>
<li>输入 <code v-pre>apt install -y screen</code>,等待安装完成</li>
<li>输入 <code v-pre>screen -v</code>,若有版本显示,则说明安装成功
<img src='/image/easy/pre/screen1.png'></li>
</ol>
<h3 id="ffmpeg" tabindex="-1"><a class="header-anchor" href="#ffmpeg" aria-hidden="true">#</a> ffmpeg</h3>
<p>参考<a href="https://docs.go-cqhttp.org/guide/quick_start.html#%E5%AE%89%E8%A3%85-ffmpeg" target="_blank" rel="noopener noreferrer">https://docs.go-cqhttp.org/guide/quick_start.html#%E5%AE%89%E8%A3%85-ffmpeg<ExternalLinkIcon/></a></p>
<h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySql</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>使用 <code v-pre>rpm -qa|grep -i mysql</code> 回车,若有版本显示,则说明已安装过,可以跳过这一步</p>
</div>
<ol>
<li>
<p>输入 <code v-pre>wget https://dev.mysql.com/get/mysql-apt-config_0.8.22-1_all.deb</code> 回车</p>
</li>
<li>
<p>输入 <code v-pre>dpkg -i mysql-apt-config_0.8.22-1_all.deb</code> 回车,等待安装完成</p>
</li>
<li>
<p>如果出现下面的提示,18.04选择bionic,20.04选择focal,没有就不管
<img src="/image/easy/pre/mysql2.png"></p>
</li>
<li>
<p>安装过程中会出现一个提示界面,通过方向键选择到 <code v-pre>OK</code> 然后回车
<img src='/image/easy/pre/mysql1.png'></p>
</li>
<li>
<p>输入 <code v-pre>apt -y install mysql-server</code> 回车,等待安装完成</p>
</li>
</ol>
<h3 id="mysql修改密码并开机自启" tabindex="-1"><a class="header-anchor" href="#mysql修改密码并开机自启" aria-hidden="true">#</a> MySql修改密码并开机自启</h3>
<ol>
<li>
<p>输入 <code v-pre>mysql</code> 回车</p>
</li>
<li>
<p>输入 <code v-pre>use mysql;</code> 回车</p>
</li>
<li>
<p>输入 <code v-pre>update user set plugin='caching_sha2_password' where user='root';</code></p>
</li>
<li>
<p>输入 <code v-pre>flush privileges;</code> 回车</p>
</li>
<li>
<p>输入 <code v-pre>exit</code> 回车</p>
</li>
<li>
<p>输入 <code v-pre>mysqladmin -u用户名 -p password '你的密码'</code> 回车 X 2,密码要牢记</p>
</li>
<li>
<p>输入 <code v-pre>/etc/init.d/mysql restart</code> 回车</p>
</li>
<li>
<p>输入 <code v-pre>systemctl enable mysql</code> 回车</p>
</li>
</ol>
</div></template>
