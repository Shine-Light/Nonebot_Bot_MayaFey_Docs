<template><div><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1>
<p>配置文件在根目录下的 <code v-pre>.env.prod</code></p>
<h2 id="api账号注册-可选" tabindex="-1"><a class="header-anchor" href="#api账号注册-可选" aria-hidden="true">#</a> API账号注册(可选)</h2>
<h3 id="腾讯api-可选" tabindex="-1"><a class="header-anchor" href="#腾讯api-可选" aria-hidden="true">#</a> 腾讯API(可选)</h3>
<p>涉及插件: 腾讯翻译,违禁图片检测</p>
<h4 id="注册" tabindex="-1"><a class="header-anchor" href="#注册" aria-hidden="true">#</a> 注册</h4>
<ol>
<li>进入<a href="https://cloud.tencent.com" target="_blank" rel="noopener noreferrer">腾讯云官网<ExternalLinkIcon/></a>,注册账号</li>
</ol>
<h4 id="翻译api-可选" tabindex="-1"><a class="header-anchor" href="#翻译api-可选" aria-hidden="true">#</a> 翻译API(可选)</h4>
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
<h3 id="和风天气api-可选" tabindex="-1"><a class="header-anchor" href="#和风天气api-可选" aria-hidden="true">#</a> 和风天气API(可选)</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该接口一天1000次免费调用额度,日常使用足够</p>
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
<p>该接口每日100次免费调用额度</p>
</div>
<p>涉及插件: 全网热搜, 聊天机器人</p>
<h4 id="注册-2" tabindex="-1"><a class="header-anchor" href="#注册-2" aria-hidden="true">#</a> 注册</h4>
<ol>
<li>进入<a href="https://www.tianapi.com/login.html" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>,注册账号</li>
<li>进入<a href="https://www.tianapi.com/apiview/223" target="_blank" rel="noopener noreferrer">热搜API<ExternalLinkIcon/></a>,选择申请开通</li>
<li>开通完成</li>
</ol>
<h3 id="茉莉云-可选" tabindex="-1"><a class="header-anchor" href="#茉莉云-可选" aria-hidden="true">#</a> 茉莉云(可选)</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该接口每日500次免费调用额度</p>
</div>
<p>涉及插件: 聊天机器人</p>
<h4 id="注册-3" tabindex="-1"><a class="header-anchor" href="#注册-3" aria-hidden="true">#</a> 注册</h4>
<ol>
<li>进入<a href="https://mlyai.com/login" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>,注册账号</li>
<li>选择 <code v-pre>机器人</code> 选项卡, 选择添加机器人, 填写消息后保存</li>
</ol>
<h3 id="图灵机器人-可选" tabindex="-1"><a class="header-anchor" href="#图灵机器人-可选" aria-hidden="true">#</a> 图灵机器人(可选)</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该接口为付费接口</p>
</div>
<p>涉及插件: 聊天机器人</p>
<h4 id="注册-4" tabindex="-1"><a class="header-anchor" href="#注册-4" aria-hidden="true">#</a> 注册</h4>
<ol>
<li>进入<a href="https://www.tuling123.com" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>,注册账号</li>
<li>激活机器人,根据自己情况选择套餐</li>
</ol>
<h3 id="百度翻译开放平台api-可选" tabindex="-1"><a class="header-anchor" href="#百度翻译开放平台api-可选" aria-hidden="true">#</a> 百度翻译开放平台API(可选)</h3>
<p>涉及插件: 百度翻译</p>
<h4 id="注册-5" tabindex="-1"><a class="header-anchor" href="#注册-5" aria-hidden="true">#</a> 注册</h4>
<ol>
<li>进入<a href="http://api.fanyi.baidu.com/" target="_blank" rel="noopener noreferrer">百度翻译开放平台官网<ExternalLinkIcon/></a>,注册账号,并实名认证</li>
</ol>
<h4 id="翻译api-可选-1" tabindex="-1"><a class="header-anchor" href="#翻译api-可选-1" aria-hidden="true">#</a> 翻译API(可选)</h4>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该接口每月有100w字符的免费额度,若超出则需另付费,具体定价参考<a href="http://api.fanyi.baidu.com/product/112" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
</div>
<ol>
<li>进入<a href="http://api.fanyi.baidu.com/api/trans/product/desktop" target="_blank" rel="noopener noreferrer">控制台<ExternalLinkIcon/></a></li>
<li>选择 <code v-pre>总览</code> 选项卡,选择开通服务,选择通用翻译,填好信息,选择确定</li>
</ol>
<h3 id="百度内容安全api-可选" tabindex="-1"><a class="header-anchor" href="#百度内容安全api-可选" aria-hidden="true">#</a> 百度内容安全API(可选)</h3>
<p>涉及插件: 违禁图片检测</p>
<h4 id="注册-6" tabindex="-1"><a class="header-anchor" href="#注册-6" aria-hidden="true">#</a> 注册</h4>
<p>前往<a href="https://login.bce.baidu.com/new-reg?tpl=bceplat&amp;from=portal" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>注册,并实名认证</p>
<h4 id="内容安全api-可选" tabindex="-1"><a class="header-anchor" href="#内容安全api-可选" aria-hidden="true">#</a> 内容安全API(可选)</h4>
<ol>
<li>在<a href="cloud.baidu.com">官网</a>依次选择, 产品 人工智能 图像内容安全,点击立即使用</li>
<li>进入控制台后,点击领取免费资源,勾选<code v-pre>内容审核平台-文本</code>点击领取</li>
<li>回到控制台,点击应用列表,选择创建应用,填写信息,点击立即创建</li>
<li>应用列表的 <code v-pre>API key</code> 和 <code v-pre>Secret key</code> 就是需要填写在配置中的密钥</li>
</ol>
<h2 id="机器人配置" tabindex="-1"><a class="header-anchor" href="#机器人配置" aria-hidden="true">#</a> 机器人配置</h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h3>
<h4 id="host" tabindex="-1"><a class="header-anchor" href="#host" aria-hidden="true">#</a> HOST</h4>
<p>说明: 主机地址,默认即可</p>
<h4 id="port" tabindex="-1"><a class="header-anchor" href="#port" aria-hidden="true">#</a> PORT</h4>
<p>说明: 端口,默认即可</p>
<h4 id="superusers" tabindex="-1"><a class="header-anchor" href="#superusers" aria-hidden="true">#</a> SUPERUSERS</h4>
<p>说明: 根用户,拥有机器人的所有权限,每个超级用户用 <code v-pre>&quot;&quot;</code> 包起来,用 <code v-pre>,</code> 隔开(英文半角逗号,不是中文的逗号)<br>
示例: <code v-pre>SUPERUSERS = [&quot;12345678&quot;, &quot;114514&quot;, &quot;12138&quot;]</code></p>
<h4 id="nickname" tabindex="-1"><a class="header-anchor" href="#nickname" aria-hidden="true">#</a> NICKNAME</h4>
<p>说明: 机器人的昵称,自行修改,使用时会随机抽取一个使用</p>
<h4 id="command-start" tabindex="-1"><a class="header-anchor" href="#command-start" aria-hidden="true">#</a> COMMAND_START</h4>
<p>说明: 命令起始符,即命令前加的前缀,若设置为空则命令前无需加前缀<br>
示例:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>COMMAND_START=["/", "!"]  
命令触发: /菜单 !菜单
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="command-sep" tabindex="-1"><a class="header-anchor" href="#command-sep" aria-hidden="true">#</a> COMMAND_SEP</h4>
<p>说明: 命令分隔符,用来分开命令和参数,默认即可</p>
<h4 id="bot-id" tabindex="-1"><a class="header-anchor" href="#bot-id" aria-hidden="true">#</a> bot_id</h4>
<p>说明: 机器人QQ号</p>
<h4 id="timezone" tabindex="-1"><a class="header-anchor" href="#timezone" aria-hidden="true">#</a> timezone</h4>
<p>说明: 时区,默认为上海</p>
<h4 id="resource-path" tabindex="-1"><a class="header-anchor" href="#resource-path" aria-hidden="true">#</a> RESOURCE_PATH</h4>
<p>说明: resource路径,默认即可</p>
<h4 id="custom-font-path" tabindex="-1"><a class="header-anchor" href="#custom-font-path" aria-hidden="true">#</a> custom_font_path</h4>
<p>说明: 字体路径,默认即可</p>
<h3 id="代理设置" tabindex="-1"><a class="header-anchor" href="#代理设置" aria-hidden="true">#</a> 代理设置</h3>
<h4 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> proxy</h4>
<p>说明: 代理地址,若代理需认证,在前面要加上 <code v-pre>用户名:密码@</code></p>
<h3 id="数据库设置" tabindex="-1"><a class="header-anchor" href="#数据库设置" aria-hidden="true">#</a> 数据库设置</h3>
<h4 id="mysql-host" tabindex="-1"><a class="header-anchor" href="#mysql-host" aria-hidden="true">#</a> mysql_host</h4>
<p>说明: 数据库服务器主机地址,默认即可</p>
<h4 id="mysql-port" tabindex="-1"><a class="header-anchor" href="#mysql-port" aria-hidden="true">#</a> mysql_port</h4>
<p>说明: 数据库服务器端口,默认即可</p>
<h4 id="mysql-user" tabindex="-1"><a class="header-anchor" href="#mysql-user" aria-hidden="true">#</a> mysql_user</h4>
<p>说明: 数据库用户名,使用 <code v-pre>root</code> 用户</p>
<h4 id="mysql-password" tabindex="-1"><a class="header-anchor" href="#mysql-password" aria-hidden="true">#</a> mysql_password</h4>
<p>说明: 数据库密码,填入之前设置的密码</p>
<h4 id="mysql-db" tabindex="-1"><a class="header-anchor" href="#mysql-db" aria-hidden="true">#</a> mysql_db</h4>
<p>说明: 数据库名,填入自己想要的那种,或者用默认</p>
<h3 id="原神祈愿设置" tabindex="-1"><a class="header-anchor" href="#原神祈愿设置" aria-hidden="true">#</a> 原神祈愿设置</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>没有特殊情况的话,前四项和mysql设置一致即可</p>
</div>
<h4 id="mysql-host-genshin" tabindex="-1"><a class="header-anchor" href="#mysql-host-genshin" aria-hidden="true">#</a> mysql_host_genshin</h4>
<p>说明: 数据库服务器主机地址,默认即可</p>
<h4 id="mysql-port-genshin" tabindex="-1"><a class="header-anchor" href="#mysql-port-genshin" aria-hidden="true">#</a> mysql_port_genshin</h4>
<p>说明: 数据库服务器端口,默认即可</p>
<h4 id="mysql-user-genshin" tabindex="-1"><a class="header-anchor" href="#mysql-user-genshin" aria-hidden="true">#</a> mysql_user_genshin</h4>
<p>说明: 数据库用户名,使用 <code v-pre>root</code> 用户</p>
<h4 id="mysql-password-genshin" tabindex="-1"><a class="header-anchor" href="#mysql-password-genshin" aria-hidden="true">#</a> mysql_password_genshin</h4>
<p>说明: 数据库密码,填入之前设置的密码</p>
<h4 id="mysql-db-genshin" tabindex="-1"><a class="header-anchor" href="#mysql-db-genshin" aria-hidden="true">#</a> mysql_db_genshin</h4>
<p>说明: 数据库名,默认 <code v-pre>genshinpray</code>,无特殊情况不修改</p>
<h4 id="genshin-port" tabindex="-1"><a class="header-anchor" href="#genshin-port" aria-hidden="true">#</a> genshin_port</h4>
<p>说明: 祈愿API端口,默认即可</p>
<h4 id="genshin-host" tabindex="-1"><a class="header-anchor" href="#genshin-host" aria-hidden="true">#</a> genshin_host</h4>
<p>说明: 祈愿API主机名,默认即可</p>
<h4 id="genshin-ssl" tabindex="-1"><a class="header-anchor" href="#genshin-ssl" aria-hidden="true">#</a> genshin_ssl</h4>
<p>说明: 是否使用https, 0关 1开</p>
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
<h4 id="违规图片检测" tabindex="-1"><a class="header-anchor" href="#违规图片检测" aria-hidden="true">#</a> 违规图片检测</h4>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该配置为可选配置,若不设置请将 <code v-pre>tenid</code> 和 <code v-pre>tenkey</code> 设置为 <code v-pre>xxxxx</code></p>
</div>
<h5 id="腾讯接口" tabindex="-1"><a class="header-anchor" href="#腾讯接口" aria-hidden="true">#</a> 腾讯接口</h5>
<h5 id="tenid" tabindex="-1"><a class="header-anchor" href="#tenid" aria-hidden="true">#</a> tenid</h5>
<p>说明: 访问密钥id,<a href="#tencentcloud_common_secretid">同上</a></p>
<h5 id="tankey" tabindex="-1"><a class="header-anchor" href="#tankey" aria-hidden="true">#</a> tankey</h5>
<p>说明: 访问密钥,<a href="#tencentcloud_common_secretkey">同上</a></p>
<h5 id="百度接口" tabindex="-1"><a class="header-anchor" href="#百度接口" aria-hidden="true">#</a> 百度接口</h5>
<h5 id="baidu-image-key" tabindex="-1"><a class="header-anchor" href="#baidu-image-key" aria-hidden="true">#</a> baidu_image_key</h5>
<p>说明: APIkey,可以在<a href="https://console.bce.baidu.com/ai/#/ai/antiporn/app/list" target="_blank" rel="noopener noreferrer">控制台<ExternalLinkIcon/></a>查看</p>
<h5 id="baidu-image-secret" tabindex="-1"><a class="header-anchor" href="#baidu-image-secret" aria-hidden="true">#</a> baidu_image_secret</h5>
<p>说明: Secretkey,可以在<a href="https://console.bce.baidu.com/ai/#/ai/antiporn/app/list" target="_blank" rel="noopener noreferrer">控制台<ExternalLinkIcon/></a>查看</p>
<h5 id="baidu-image-level" tabindex="-1"><a class="header-anchor" href="#baidu-image-level" aria-hidden="true">#</a> baidu_image_level</h5>
<p>说明: 检测等级,0:宽松,1:严格,具体检测项可以在<a href="https://ai.baidu.com/censoring#/strategylist" target="_blank" rel="noopener noreferrer">策略配置<ExternalLinkIcon/></a>查看</p>
<h4 id="热搜api版本" tabindex="-1"><a class="header-anchor" href="#热搜api版本" aria-hidden="true">#</a> 热搜API版本</h4>
<h5 id="nethot-version" tabindex="-1"><a class="header-anchor" href="#nethot-version" aria-hidden="true">#</a> nethot_version</h5>
<p>说明: 热搜接口版本选择,<code v-pre>han</code>(韩小韩) 或 <code v-pre>tian</code>(天行数据)</p>
<h4 id="天行数据" tabindex="-1"><a class="header-anchor" href="#天行数据" aria-hidden="true">#</a> 天行数据</h4>
<h5 id="tianxtoken" tabindex="-1"><a class="header-anchor" href="#tianxtoken" aria-hidden="true">#</a> tianxtoken</h5>
<p>说明: 天行数据接口密钥,在<a href="https://www.tianapi.com/console/" target="_blank" rel="noopener noreferrer">控制台<ExternalLinkIcon/></a>获取</p>
<h4 id="和风天气" tabindex="-1"><a class="header-anchor" href="#和风天气" aria-hidden="true">#</a> 和风天气</h4>
<h5 id="qweather-apikey" tabindex="-1"><a class="header-anchor" href="#qweather-apikey" aria-hidden="true">#</a> QWEATHER_APIKEY</h5>
<p>说明: APIKEY,在<a href="https://console.qweather.com/#/apps" target="_blank" rel="noopener noreferrer">控制台<ExternalLinkIcon/></a>中获取</p>
<h5 id="qweather-apitype" tabindex="-1"><a class="header-anchor" href="#qweather-apitype" aria-hidden="true">#</a> QWEATHER_APITYPE</h5>
<p>说明: 版本,免费版、个人开发版、商业版,区别请看<a href="https://dev.qweather.com/help/account/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a><br>
0:免费版,1:个人开发版,2:商业版</p>
<h4 id="ai聊天" tabindex="-1"><a class="header-anchor" href="#ai聊天" aria-hidden="true">#</a> AI聊天</h4>
<h5 id="ai-talk-api-type" tabindex="-1"><a class="header-anchor" href="#ai-talk-api-type" aria-hidden="true">#</a> ai_talk_api_type</h5>
<p>说明: 接口类型,根据自己购买情况选择<br>
可选项: tianx(<a href="https://www.tianapi.com/apiview/47" target="_blank" rel="noopener noreferrer">天行数据<ExternalLinkIcon/></a>),qingyunke(<a href="http://api.qingyunke.com/" target="_blank" rel="noopener noreferrer">青云客<ExternalLinkIcon/></a>),moli(<a href="https://mlyai.com/" target="_blank" rel="noopener noreferrer">茉莉云<ExternalLinkIcon/></a>))<br>
青云客免费且无需注册(暂时),天行数据每日100次免费额度</p>
<h5 id="ai-talk-tianx-key" tabindex="-1"><a class="header-anchor" href="#ai-talk-tianx-key" aria-hidden="true">#</a> ai_talk_tianx_key</h5>
<p>说明: 天行数据接口密钥,<a href="https://www.tianapi.com/console/" target="_blank" rel="noopener noreferrer">控制台<ExternalLinkIcon/></a>获取,若不使用该接口该项可不填</p>
<h5 id="ai-talk-tianx-mode" tabindex="-1"><a class="header-anchor" href="#ai-talk-tianx-mode" aria-hidden="true">#</a> ai_talk_tianx_mode</h5>
<p>说明: 天行数据接口工作模式,详情请看<a href="https://www.tianapi.com/apiview/47" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>,若不使用该接口该项可不填</p>
<h5 id="ai-talk-tianx-priv" tabindex="-1"><a class="header-anchor" href="#ai-talk-tianx-priv" aria-hidden="true">#</a> ai_talk_tianx_priv</h5>
<p>说明: 天行数据接口私有词库匹配模式,详情请看<a href="https://www.tianapi.com/apiview/47" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>,若不使用该接口该项可不填</p>
<h5 id="ai-talk-moli-key" tabindex="-1"><a class="header-anchor" href="#ai-talk-moli-key" aria-hidden="true">#</a> ai_talk_moli_key</h5>
<p>说明: 茉莉云接口key,<a href="https://mlyai.com/profile/index.html#/robot/list" target="_blank" rel="noopener noreferrer">控制台<ExternalLinkIcon/></a>获取,若不使用该接口该项可不填</p>
<h5 id="ai-talk-moli-secret" tabindex="-1"><a class="header-anchor" href="#ai-talk-moli-secret" aria-hidden="true">#</a> ai_talk_moli_secret</h5>
<p>说明: 茉莉云接口密钥,<a href="https://mlyai.com/profile/index.html#/robot/list" target="_blank" rel="noopener noreferrer">控制台<ExternalLinkIcon/></a>获取,若不使用该接口该项可不填</p>
<h3 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置" aria-hidden="true">#</a> 插件配置</h3>
<h4 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务" aria-hidden="true">#</a> 定时任务</h4>
<p>配置默认即可</p>
<h4 id="词云" tabindex="-1"><a class="header-anchor" href="#词云" aria-hidden="true">#</a> 词云</h4>
<h5 id="wordcloud-background-color" tabindex="-1"><a class="header-anchor" href="#wordcloud-background-color" aria-hidden="true">#</a> wordcloud_background_color</h5>
<p>说明: 词云背景颜色</p>
<h5 id="wordcloud-timezone" tabindex="-1"><a class="header-anchor" href="#wordcloud-timezone" aria-hidden="true">#</a> wordcloud_timezone</h5>
<p>说明: 时区,默认即可</p>
<h4 id="epic喜加一" tabindex="-1"><a class="header-anchor" href="#epic喜加一" aria-hidden="true">#</a> Epic喜加一</h4>
<h5 id="epic-scheduler" tabindex="-1"><a class="header-anchor" href="#epic-scheduler" aria-hidden="true">#</a> epic_scheduler</h5>
<p>说明: 订阅推送时间,&quot;星期(周日为0) 小时 分钟 秒&quot;<br>
示例: 星期五 20:00:00 推送<br>
<code v-pre>epic_scheduler=&quot;4 20 0 0&quot;</code></p>
<h4 id="群管" tabindex="-1"><a class="header-anchor" href="#群管" aria-hidden="true">#</a> 群管</h4>
<h5 id="ban-count-allow" tabindex="-1"><a class="header-anchor" href="#ban-count-allow" aria-hidden="true">#</a> BAN_COUNT_ALLOW</h5>
<p>说明: 最大允许违禁次数,违禁达到次数时将踢出并拉黑</p>
<h5 id="ban-rand-time-min" tabindex="-1"><a class="header-anchor" href="#ban-rand-time-min" aria-hidden="true">#</a> BAN_RAND_TIME_MIN</h5>
<p>说明: 随机禁言最小时间</p>
<h5 id="ban-rand-timr-max" tabindex="-1"><a class="header-anchor" href="#ban-rand-timr-max" aria-hidden="true">#</a> BAN_RAND_TIMR_MAX</h5>
<p>说明: 随机禁言最大时间</p>
<h4 id="今天吃什么" tabindex="-1"><a class="header-anchor" href="#今天吃什么" aria-hidden="true">#</a> 今天吃什么</h4>
<h5 id="eating-limit" tabindex="-1"><a class="header-anchor" href="#eating-limit" aria-hidden="true">#</a> EATING_LIMIT</h5>
<p>说明: 每餐每个时间段询问上限<br>
示例: <code v-pre>EATING_LIMIT=9</code></p>
<h5 id="greeting-groups-id" tabindex="-1"><a class="header-anchor" href="#greeting-groups-id" aria-hidden="true">#</a> GREETING_GROUPS_ID</h5>
<p>说明: 开启按时吃饭提示的群<br>
示例: <code v-pre>GREETING_GROUPS_ID=[&quot;123456789&quot;]</code></p>
<h4 id="恶意触发" tabindex="-1"><a class="header-anchor" href="#恶意触发" aria-hidden="true">#</a> 恶意触发</h4>
<p>说明: 在 fast_time 内触发 fast_count 次命令</p>
<h5 id="fast-time" tabindex="-1"><a class="header-anchor" href="#fast-time" aria-hidden="true">#</a> fast_time</h5>
<p>说明: 恶意触发时间,单位:秒<br>
示例: <code v-pre>fast_time=10</code></p>
<h5 id="fast-count" tabindex="-1"><a class="header-anchor" href="#fast-count" aria-hidden="true">#</a> fast_count</h5>
<p>说明: 恶意触发次数<br>
示例: <code v-pre>fast_count=5</code></p>
<h4 id="防白嫖" tabindex="-1"><a class="header-anchor" href="#防白嫖" aria-hidden="true">#</a> 防白嫖</h4>
<p>说明: 在入群后 指定时间 内退群将直接纳入黑名单</p>
<h4 id="auto-baned-delta-time" tabindex="-1"><a class="header-anchor" href="#auto-baned-delta-time" aria-hidden="true">#</a> auto_baned_delta_time</h4>
<p>说明: 指定时间,单位:分钟<br>
示例: <code v-pre>auto_baned_delta_time=0</code></p>
<h4 id="疫情查询配置" tabindex="-1"><a class="header-anchor" href="#疫情查询配置" aria-hidden="true">#</a> 疫情查询配置</h4>
<h5 id="covid19-message-type" tabindex="-1"><a class="header-anchor" href="#covid19-message-type" aria-hidden="true">#</a> covid19_message_type</h5>
<p>说明: 推送消息类型,image:图片, text:文字<br>
示例: <code v-pre>covid19_message_type = &quot;image&quot;</code></p>
</div></template>
