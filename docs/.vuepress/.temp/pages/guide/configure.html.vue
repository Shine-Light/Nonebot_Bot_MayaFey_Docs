<template><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1>
<h2 id="api账号注册" tabindex="-1"><a class="header-anchor" href="#api账号注册" aria-hidden="true">#</a> API账号注册</h2>
<h3 id="腾讯api" tabindex="-1"><a class="header-anchor" href="#腾讯api" aria-hidden="true">#</a> 腾讯API</h3>
<p>涉及插件: 翻译,违禁图片检测</p>
<h4 id="注册" tabindex="-1"><a class="header-anchor" href="#注册" aria-hidden="true">#</a> 注册</h4>
<ol>
<li>进入<a href="https://cloud.tencent.com" target="_blank" rel="noopener noreferrer">腾讯云官网<ExternalLinkIcon/></a>,注册账号</li>
</ol>
<h4 id="翻译api" tabindex="-1"><a class="header-anchor" href="#翻译api" aria-hidden="true">#</a> 翻译API</h4>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该接口每月有500w字符的免费额度,若超出则需另付费,具体定价参考<a href="https://cloud.tencent.com/document/product/551/35017" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
</div>
<ol>
<li>搜索 TMT机器翻译 ,进入机器翻译控制台,选择开通</li>
</ol>
<h4 id="违禁图片检测api-可选" tabindex="-1"><a class="header-anchor" href="#违禁图片检测api-可选" aria-hidden="true">#</a> 违禁图片检测API(可选)</h4>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该接口首月免费1w张图片,超出额度或次月开始需自行购买,具体前往<a href="https://cloud.tencent.com/document/product/1125/37108" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>查询</p>
</div>
<ol>
<li>搜索 图片内容安全 ,进入图片内容安全控制台,选择开通</li>
</ol>
<h3 id="和风天气api" tabindex="-1"><a class="header-anchor" href="#和风天气api" aria-hidden="true">#</a> 和风天气API</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该接口一天1000次调用额度,日常使用足够</p>
</div>
<p>涉及插件: 天气</p>
<h4 id="注册-1" tabindex="-1"><a class="header-anchor" href="#注册-1" aria-hidden="true">#</a> 注册</h4>
<ol>
<li>
<p>进入<a href="https://id.qweather.com/#/login?redirect=https://console.qweather.com" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>,注册一个账号</p>
</li>
<li>
<p>选择应用管理,选择新建应用,选择免费开发版,输入名称,选择Web Api,输入名称,创建成功</p>
</li>
</ol>
<h3 id="天行数据-可选" tabindex="-1"><a class="header-anchor" href="#天行数据-可选" aria-hidden="true">#</a> 天行数据(可选)</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该接口每日100次调用额度</p>
</div>
<p>涉及插件: 全网热搜</p>
<h4 id="注册-2" tabindex="-1"><a class="header-anchor" href="#注册-2" aria-hidden="true">#</a> 注册</h4>
<ol>
<li>进入<a href="https://www.tianapi.com/login.html" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>,注册账号</li>
<li>进入<a href="https://www.tianapi.com/apiview/223" target="_blank" rel="noopener noreferrer">热搜API<ExternalLinkIcon/></a>,选择申请开通</li>
<li>开通完成</li>
</ol>
<h2 id="机器人配置" tabindex="-1"><a class="header-anchor" href="#机器人配置" aria-hidden="true">#</a> 机器人配置</h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h3>
<h4 id="host" tabindex="-1"><a class="header-anchor" href="#host" aria-hidden="true">#</a> HOST</h4>
<p>说明: 主机地址,默认即可</p>
<h4 id="port" tabindex="-1"><a class="header-anchor" href="#port" aria-hidden="true">#</a> PORT</h4>
<p>说明: 端口,默认即可</p>
<h4 id="superusers" tabindex="-1"><a class="header-anchor" href="#superusers" aria-hidden="true">#</a> SUPERUSERS</h4>
<p>说明: 根用户,拥有机器人的所有权限,每个超级用户用 <code>&quot;&quot;</code> 包起来,用 <code>,</code> 隔开(英文半角逗号,不是中文的逗号)<br>
示例: <code>SUPERUSERS = [&quot;12345678&quot;, &quot;114514&quot;, &quot;12138&quot;]</code></p>
<h4 id="nickname" tabindex="-1"><a class="header-anchor" href="#nickname" aria-hidden="true">#</a> NICKNAME</h4>
<p>说明: 机器人的昵称,默认即可</p>
<h4 id="command-start" tabindex="-1"><a class="header-anchor" href="#command-start" aria-hidden="true">#</a> COMMAND_START</h4>
<p>说明: 命令起始符,即命令前加的前缀,若设置为空则命令前无需加前缀<br>
示例:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    COMMAND_START=["/", "!"]  
    命令触发: /菜单 !菜单
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="command-sep" tabindex="-1"><a class="header-anchor" href="#command-sep" aria-hidden="true">#</a> COMMAND_SEP</h4>
<p>说明: 命令分隔符,原来分开命令和参数,不建议修改</p>
<h4 id="bot-id" tabindex="-1"><a class="header-anchor" href="#bot-id" aria-hidden="true">#</a> bot_id</h4>
<p>说明: 机器人QQ号</p>
<h4 id="timezone" tabindex="-1"><a class="header-anchor" href="#timezone" aria-hidden="true">#</a> timezone</h4>
<p>说明: 时区,默认为上海</p>
<h3 id="数据库设置" tabindex="-1"><a class="header-anchor" href="#数据库设置" aria-hidden="true">#</a> 数据库设置</h3>
<h4 id="mysql-host" tabindex="-1"><a class="header-anchor" href="#mysql-host" aria-hidden="true">#</a> mysql_host</h4>
<p>说明: 数据库服务器主机地址,默认即可</p>
<h4 id="mysql-port" tabindex="-1"><a class="header-anchor" href="#mysql-port" aria-hidden="true">#</a> mysql_port</h4>
<p>说明: 数据库服务器端口,默认即可</p>
<h4 id="mysql-host-1" tabindex="-1"><a class="header-anchor" href="#mysql-host-1" aria-hidden="true">#</a> mysql_host</h4>
<p>说明: 数据库用户名,默认即可</p>
<h4 id="mysql-host-2" tabindex="-1"><a class="header-anchor" href="#mysql-host-2" aria-hidden="true">#</a> mysql_host</h4>
<p>说明: 数据库密码,填入之前设置的密码</p>
<h4 id="mysql-host-3" tabindex="-1"><a class="header-anchor" href="#mysql-host-3" aria-hidden="true">#</a> mysql_host</h4>
<p>说明: 数据库名,默认即可</p>
<h3 id="api设置" tabindex="-1"><a class="header-anchor" href="#api设置" aria-hidden="true">#</a> API设置</h3>
<h4 id="腾讯机器翻译" tabindex="-1"><a class="header-anchor" href="#腾讯机器翻译" aria-hidden="true">#</a> 腾讯机器翻译</h4>
<h5 id="tencentcloud-common-region" tabindex="-1"><a class="header-anchor" href="#tencentcloud-common-region" aria-hidden="true">#</a> tencentcloud_common_region</h5>
<p>说明: 接口地域,详情请前往<a href="https://cloud.tencent.com/document/product/551/15614#1.-.E6.9C.8D.E5.8A.A1.E5.9C.B0.E5.9D.80" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>查询</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>以下设置的密钥请保存好,不要泄露给任何人</p>
</div>
<h5 id="tencentcloud-common-secretid" tabindex="-1"><a class="header-anchor" href="#tencentcloud-common-secretid" aria-hidden="true">#</a> tencentcloud_common_secretid</h5>
<p>说明: 访问密钥id,在<a href="https://console.cloud.tencent.com/cam/capi" target="_blank" rel="noopener noreferrer">腾讯云控制台<ExternalLinkIcon/></a>里获取</p>
<h5 id="tencentcloud-common-secretkey" tabindex="-1"><a class="header-anchor" href="#tencentcloud-common-secretkey" aria-hidden="true">#</a> tencentcloud_common_secretkey</h5>
<p>说明: 访问密钥,在<a href="https://console.cloud.tencent.com/cam/capi" target="_blank" rel="noopener noreferrer">腾讯云控制台<ExternalLinkIcon/></a>里获取</p>
<h4 id="腾讯违规图片检测-可选" tabindex="-1"><a class="header-anchor" href="#腾讯违规图片检测-可选" aria-hidden="true">#</a> 腾讯违规图片检测(可选)</h4>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该配置为可选配置,若不设置请将 <code>tenid</code> 和 <code>tenkey</code> 设置为 <code>xxxxx</code></p>
</div>
<h5 id="tenid" tabindex="-1"><a class="header-anchor" href="#tenid" aria-hidden="true">#</a> tenid</h5>
<p>说明: 访问密钥id,同<a href="#tencentcloudcommonsecretid">上</a></p>
<h5 id="tankey" tabindex="-1"><a class="header-anchor" href="#tankey" aria-hidden="true">#</a> tankey</h5>
<p>说明: 访问密钥,同<a href="#tencentcloudcommonsecretkey">上</a></p>
<h4 id="和风天气" tabindex="-1"><a class="header-anchor" href="#和风天气" aria-hidden="true">#</a> 和风天气</h4>
<h5 id="qweather-apikey" tabindex="-1"><a class="header-anchor" href="#qweather-apikey" aria-hidden="true">#</a> QWEATHER_APIKEY</h5>
<p>说明: APIKEY,在<a href="https://console.qweather.com/#/apps" target="_blank" rel="noopener noreferrer">控制台<ExternalLinkIcon/></a>中获取</p>
<h5 id="qweather-apitype" tabindex="-1"><a class="header-anchor" href="#qweather-apitype" aria-hidden="true">#</a> QWEATHER_APITYPE</h5>
<p>说明: 版本,免费版、个人开发版、商业版,区别请看<a href="https://dev.qweather.com/help/account/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a><br>
0:免费版,1:个人开发版,2:商业版</p>
<h3 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置" aria-hidden="true">#</a> 插件配置</h3>
<h4 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务" aria-hidden="true">#</a> 定时任务</h4>
<p>配置默认即可</p>
<h4 id="词云" tabindex="-1"><a class="header-anchor" href="#词云" aria-hidden="true">#</a> 词云</h4>
<h5 id="wordcloud-background-color" tabindex="-1"><a class="header-anchor" href="#wordcloud-background-color" aria-hidden="true">#</a> wordcloud_background_color</h5>
<p>说明: 词云背景颜色</p>
<h5 id="wordcloud-timezone" tabindex="-1"><a class="header-anchor" href="#wordcloud-timezone" aria-hidden="true">#</a> wordcloud_timezone</h5>
<p>说明: 时区,默认即可</p>
<h4 id="允许违禁次数" tabindex="-1"><a class="header-anchor" href="#允许违禁次数" aria-hidden="true">#</a> 允许违禁次数</h4>
<h5 id="ban-count-allow" tabindex="-1"><a class="header-anchor" href="#ban-count-allow" aria-hidden="true">#</a> BAN_COUNT_ALLOW</h5>
<p>说明: 最大允许违禁次数,违禁达到次数时将踢出并拉黑</p>
<h4 id="epic喜加一" tabindex="-1"><a class="header-anchor" href="#epic喜加一" aria-hidden="true">#</a> Epic喜加一</h4>
<h5 id="epic-scheduler" tabindex="-1"><a class="header-anchor" href="#epic-scheduler" aria-hidden="true">#</a> epic_scheduler</h5>
<p>说明: 订阅推送时间,&quot;星期 小时 分钟 秒&quot;<br>
示例: 星期五 20:00:00 推送<br>
<code>epic_scheduler=&quot;5 20 0 0&quot;</code></p>
</template>
