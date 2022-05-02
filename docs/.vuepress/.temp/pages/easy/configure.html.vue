<template><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1>
<h2 id="api账号注册" tabindex="-1"><a class="header-anchor" href="#api账号注册" aria-hidden="true">#</a> API账号注册</h2>
<h3 id="腾讯api" tabindex="-1"><a class="header-anchor" href="#腾讯api" aria-hidden="true">#</a> 腾讯API</h3>
<h4 id="翻译api" tabindex="-1"><a class="header-anchor" href="#翻译api" aria-hidden="true">#</a> 翻译API</h4>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该接口每月有500w字符的免费额度,若超出则需另付费,具体定价参考<a href="https://cloud.tencent.com/document/product/551/35017" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
</div>
<ol>
<li>进入<a href="https://cloud.tencent.com" target="_blank" rel="noopener noreferrer">腾讯云官网<ExternalLinkIcon/></a></li>
<li>搜索 TMT机器翻译 ,进入机器翻译控制台,选择开通</li>
</ol>
<details class="custom-container details"><summary>具体流程图</summary>
<img src='/image/easy/configure/TMT1.png'>
<img src='/image/easy/configure/TMT2.png'>
</details>
<h3 id="和风天气api" tabindex="-1"><a class="header-anchor" href="#和风天气api" aria-hidden="true">#</a> 和风天气API</h3>
<h4 id="注册" tabindex="-1"><a class="header-anchor" href="#注册" aria-hidden="true">#</a> 注册</h4>
<ol>
<li>
<p>进入<a href="https://id.qweather.com/#/login?redirect=https://console.qweather.com" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>,注册一个账号</p>
</li>
<li>
<p>选择应用管理,选择新建应用,选择免费开发版,输入名称,选择Web Api,输入名称,创建成功</p>
</li>
</ol>
<details class="custom-container details"><summary>具体流程图</summary>
<img src='/image/easy/configure/he1.png'>
<img src='/image/easy/configure/he2.png'>
</details>
<h2 id="机器人配置" tabindex="-1"><a class="header-anchor" href="#机器人配置" aria-hidden="true">#</a> 机器人配置</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>只需填写全是<code>x</code>的部分,全是<code>a</code>的为可选项,没有提及的就是不必填的默认即可</p>
</div>
<h3 id="superusers" tabindex="-1"><a class="header-anchor" href="#superusers" aria-hidden="true">#</a> SUPERUSERS</h3>
<p>说明: 根用户,拥有机器人的所有权限,每个超级用户用 <code>&quot;&quot;</code> 包起来,用 <code>,</code> 隔开(英文半角逗号,不是中文的逗号),没有特殊情况的话填自己的QQ号就好<br>
示例: <code>SUPERUSERS = [&quot;12345678&quot;, &quot;114514&quot;, &quot;12138&quot;]</code></p>
<h3 id="bot-id" tabindex="-1"><a class="header-anchor" href="#bot-id" aria-hidden="true">#</a> bot_id</h3>
<p>说明: 填入机器人QQ号<br>
示例: <code>bot_id = &quot;xxxxxxxx&quot;</code></p>
<h3 id="mysql-host" tabindex="-1"><a class="header-anchor" href="#mysql-host" aria-hidden="true">#</a> mysql_host</h3>
<p>说明: 数据库密码,填入之前设置的密码<br>
示例: <code>mysql_password = &quot;xxxxxxxx&quot;</code></p>
<h2 id="api设置" tabindex="-1"><a class="header-anchor" href="#api设置" aria-hidden="true">#</a> API设置</h2>
<h3 id="腾讯机器翻译" tabindex="-1"><a class="header-anchor" href="#腾讯机器翻译" aria-hidden="true">#</a> 腾讯机器翻译</h3>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>以下设置的密钥请保存好,不要泄露给任何人</p>
</div>
<h4 id="tencentcloud-common-secretid" tabindex="-1"><a class="header-anchor" href="#tencentcloud-common-secretid" aria-hidden="true">#</a> tencentcloud_common_secretid</h4>
<p>说明: 访问密钥id,在<a href="https://console.cloud.tencent.com/cam/capi" target="_blank" rel="noopener noreferrer">腾讯云控制台<ExternalLinkIcon/></a>里获取<br>
示例: <code>tencentcloud_common_secretid=&quot;xxxxxxxx&quot;</code></p>
<h4 id="tencentcloud-common-secretkey" tabindex="-1"><a class="header-anchor" href="#tencentcloud-common-secretkey" aria-hidden="true">#</a> tencentcloud_common_secretkey</h4>
<p>说明: 访问密钥,在<a href="https://console.cloud.tencent.com/cam/capi" target="_blank" rel="noopener noreferrer">腾讯云控制台<ExternalLinkIcon/></a>里获取<br>
示例: <code>tencentcloud_common_secretkey=&quot;xxxxxxxx&quot;</code><br>
<img src='/image/easy/configure/ten.png'></p>
<h3 id="和风天气" tabindex="-1"><a class="header-anchor" href="#和风天气" aria-hidden="true">#</a> 和风天气</h3>
<h4 id="qweather-apikey" tabindex="-1"><a class="header-anchor" href="#qweather-apikey" aria-hidden="true">#</a> QWEATHER_APIKEY</h4>
<p>说明: APIKEY,在<a href="https://console.qweather.com/#/apps" target="_blank" rel="noopener noreferrer">控制台<ExternalLinkIcon/></a>中获取<br>
示例: <code>QWEATHER_APIKEY=xxxxxxxx</code></p>
<img src='/image/easy/configure/he3.png'>
<h4 id="qweather-apitype" tabindex="-1"><a class="header-anchor" href="#qweather-apitype" aria-hidden="true">#</a> QWEATHER_APITYPE</h4>
<p>说明: 版本,免费版、个人开发版、商业版,区别请看<a href="https://dev.qweather.com/help/account/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a><br>
0:免费版,1:个人开发版,2:商业版,没有特殊情况填 <code>0</code> 即可<br>
示例: <code>QWEATHER_APITYPE=0</code></p>
<h3 id="允许违禁次数" tabindex="-1"><a class="header-anchor" href="#允许违禁次数" aria-hidden="true">#</a> 允许违禁次数</h3>
<h4 id="ban-count-allow" tabindex="-1"><a class="header-anchor" href="#ban-count-allow" aria-hidden="true">#</a> BAN_COUNT_ALLOW</h4>
<p>说明: 最大允许违禁次数,违禁达到次数时将踢出并拉黑<br>
示例: <code>BAN_COUNT_ALLOW=3</code></p>
<h2 id="保存配置" tabindex="-1"><a class="header-anchor" href="#保存配置" aria-hidden="true">#</a> 保存配置</h2>
<ol>
<li>回到 Xshell ,打开 <code>传输窗口</code></li>
<li>将桌面的 <code>.env.prod</code> 拖进 <code>传输窗口</code>,选择是</li>
</ol>
</template>
