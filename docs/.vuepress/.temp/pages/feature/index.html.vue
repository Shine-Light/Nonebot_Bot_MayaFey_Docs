<template><div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>在默认情况下,大部分命令前需加 <code v-pre>/</code> 号,若需取消 <code v-pre>/</code> 或者替换为其他,请查看<RouterLink to="/guide/configure.html#command-start">机器人配置</RouterLink></p>
<p>命令随时变换,命令按群内帮助菜单为准</p>
<p>成员不能在 <strong>10s内 触发命令 5次</strong>,否则会被禁言 5分钟</p>
<p>机器人权限(不是群内权限): Van(根用户) &gt; 群主(owner) &gt; 管理员(admin) &gt; 超级用户(superuser) &gt; 群员(member) &gt; 黑名单(baned)</p>
<p>具体权限控制请前往<a href="#%E6%9D%83%E9%99%90%E7%B3%BB%E7%BB%9F">权限系统</a></p>
<p>所有功能都是分群管理,不用担心数据混乱</p>
</div>
<h1 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h1>
<h2 id="菜单功能" tabindex="-1"><a class="header-anchor" href="#菜单功能" aria-hidden="true">#</a> 菜单功能</h2>
<p>命令: <code v-pre>/菜单</code> <code v-pre>/帮助</code> <code v-pre>/help</code></p>
<p>功能: 获取总菜单,显示所有菜单的命令</p>
<p>权限: <strong>成员</strong>及以上</p>
<h2 id="娱乐功能" tabindex="-1"><a class="header-anchor" href="#娱乐功能" aria-hidden="true">#</a> 娱乐功能</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>游戏功能请<a href="#%E6%B8%B8%E6%88%8F%E5%8A%9F%E8%83%BD">点击这里</a></p>
</div>
<h3 id="签到" tabindex="-1"><a class="header-anchor" href="#签到" aria-hidden="true">#</a> 签到</h3>
<p>命令: <code v-pre>/签到</code> <code v-pre>/打卡</code> <code v-pre>/sign</code></p>
<p>功能: 每日一签,随机返回一张<strong>二次元图片</strong>,并增加<strong>积分</strong>。积分增加数随累计签到天数累加</p>
<p>权限: 群员及以上</p>
<p>图片接口来源: <a href="https://api.ixiaowai.cn/" target="_blank" rel="noopener noreferrer">api.ixiaowai.cn<ExternalLinkIcon/></a></p>
<h3 id="一言" tabindex="-1"><a class="header-anchor" href="#一言" aria-hidden="true">#</a> 一言</h3>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>该功能非大陆IP机器可能无法使用,可能需要代理回国,具体设置查看<RouterLink to="/guide/configure.md/#%E4%BB%A3%E7%90%86%E8%AE%BE%E7%BD%AE">代理设置</RouterLink></p>
</div>
<p>命令: <code v-pre>/一言</code> <code v-pre>/ian</code></p>
<p>功能: 随机返回<strong>一句鸡汤或者毒鸡汤</strong></p>
<p>权限: 群员及以上</p>
<p>接口来源: <a href="https://docs.tenapi.cn/yiyan.html" target="_blank" rel="noopener noreferrer">docs.tenapi.cn/yiyan.html<ExternalLinkIcon/></a></p>
<h3 id="随机图片" tabindex="-1"><a class="header-anchor" href="#随机图片" aria-hidden="true">#</a> 随机图片</h3>
<p>命令: <code v-pre>/图片 {模式}</code></p>
<p>功能: 随机返回一张图片</p>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>参数类型</th>
<th>可选值</th>
<th>必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>模式</td>
<td>字符串</td>
<td>二次元图片(默认)/头像/Bing</td>
<td>否</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>/图片 头像</code></p>
<p>权限: 群员及以上</p>
<p>接口来源: <a href="https://www.eee.dog/tech/rand-pic-api.html" target="_blank" rel="noopener noreferrer">www.eee.dog/tech/rand-pic-api.html<ExternalLinkIcon/></a></p>
<h3 id="热搜" tabindex="-1"><a class="header-anchor" href="#热搜" aria-hidden="true">#</a> 热搜</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该功能分多版本,具体按群内设置为准</p>
</div>
<h4 id="韩小韩接口版本" tabindex="-1"><a class="header-anchor" href="#韩小韩接口版本" aria-hidden="true">#</a> 韩小韩接口版本</h4>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>无需注册,分类较多,但非大陆IP无法访问。该版本适合大陆IP机器使用<br>
非大陆IP机器有时会被屏蔽,需配置代理回国,具体设置查看<RouterLink to="/guide/configure.md/#%E4%BB%A3%E7%90%86%E8%AE%BE%E7%BD%AE">代理设置</RouterLink></p>
</div>
<p>命令: <code v-pre>/热搜 {类别}</code></p>
<p>功能: 获取各平台热搜</p>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
</tr>
</thead>
<tbody>
<tr>
<td>类别</td>
<td>百度/知乎/B站/历史今天/贴吧/微博/IT</td>
<td>是</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>/热搜 IT</code></p>
<p>权限: 群员及以上</p>
<p>接口来源: <a href="https://api.vvhan.com/hotlist.html" target="_blank" rel="noopener noreferrer">api.vvhan.com/hotlist.html<ExternalLinkIcon/></a></p>
<h4 id="天行数据版本" tabindex="-1"><a class="header-anchor" href="#天行数据版本" aria-hidden="true">#</a> 天行数据版本</h4>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该版本需注册天行数据账号,免费版每天限制100次请求,但全球可用</p>
</div>
<p>命令: <code v-pre>/热搜</code></p>
<p>功能: 获取全网热搜</p>
<p>权限: 群员及以上</p>
<p>接口来源: <a href="https://www.tianapi.com/apiview/223" target="_blank" rel="noopener noreferrer">www.tianapi.com/apiview/223<ExternalLinkIcon/></a></p>
<h3 id="随机笑话" tabindex="-1"><a class="header-anchor" href="#随机笑话" aria-hidden="true">#</a> 随机笑话</h3>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>该功能非大陆IP机器无法使用</p>
</div>
<p>命令: <code v-pre>/笑话</code> <code v-pre>/xh</code></p>
<p>功能: 随机返回一个笑话</p>
<p>权限: 群员及以上</p>
<p>接口来源: <a href="https://api.vvhan.com/xiaohua.html" target="_blank" rel="noopener noreferrer">api.vvhan.com/xiaohua.html<ExternalLinkIcon/></a></p>
<h3 id="点歌台" tabindex="-1"><a class="header-anchor" href="#点歌台" aria-hidden="true">#</a> 点歌台</h3>
<p>命令: <code v-pre>/{平台}点歌 {歌名}</code></p>
<p>功能: 发送指定歌曲在指定平台的链接</p>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>平台</td>
<td>网易/酷我/酷狗/b站/qq</td>
<td>否</td>
<td>平台不填默认为qq</td>
</tr>
<tr>
<td>歌名</td>
<td>自行输入</td>
<td>是</td>
<td>找不到时会寻找相似音乐</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>/qq点歌 孤勇者</code></p>
<p>权限: 群员及以上</p>
<p>插件来源: <a href="https://github.com/noneplugin/nonebot-plugin-simplemusic" target="_blank" rel="noopener noreferrer">github.com/noneplugin/nonebot-plugin-simplemusic<ExternalLinkIcon/></a></p>
<h3 id="群词云" tabindex="-1"><a class="header-anchor" href="#群词云" aria-hidden="true">#</a> 群词云</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该功能只有在群<a href="#%E7%BE%A4%E8%AF%8D%E4%BA%91%E8%AE%BE%E7%BD%AE">开启群词云记录</a>后才能使用
在开启情况下,每天19:00会自动推送</p>
</div>
<p>命令: <code v-pre>/群词云</code></p>
<p>功能: 获取当日群消息词云</p>
<p>权限: 成员及以上</p>
<p>插件来源: <a href="https://github.com/yzyyz1387/nonebot_plugin_admin" target="_blank" rel="noopener noreferrer">github.com/yzyyz1387/nonebot_plugin_admin<ExternalLinkIcon/></a>修改而来</p>
<h3 id="logo制作" tabindex="-1"><a class="header-anchor" href="#logo制作" aria-hidden="true">#</a> logo制作</h3>
<p>帮助命令: <code v-pre>/logo 帮助</code></p>
<p>功能: 制作P站,油管等LOGO</p>
<p>命令: <code v-pre>/{类別} {文本1} {文本2} ...</code></p>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>类别</td>
<td>ph/yt/5000兆/douyin/google</td>
<td>是</td>
<td>ph: Pornhub,yt: Youtuber</td>
</tr>
<tr>
<td>文本1,文本2</td>
<td>自行输入</td>
<td>是</td>
<td>每个类别有不同的文本数,<br />请在群里获取帮助查看</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>/ph Bili Bili</code></p>
<p>权限: 群员及以上</p>
<p>插件来源: <a href="https://github.com/noneplugin/nonebot-plugin-logo" target="_blank" rel="noopener noreferrer">github.com/noneplugin/nonebot-plugin-logo<ExternalLinkIcon/></a></p>
<h3 id="表情包制作" tabindex="-1"><a class="header-anchor" href="#表情包制作" aria-hidden="true">#</a> 表情包制作</h3>
<p>帮助命令: <code v-pre>/表情包制作</code></p>
<p>功能: 制作鲁迅说,王境泽等表情包</p>
<p>命令: <code v-pre>/{类别} {文本1} {文本2} ...</code></p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>类别</td>
<td>见下图</td>
<td>是</td>
<td>类别见图</td>
</tr>
<tr>
<td>文本1,文本2</td>
<td>自行输入</td>
<td>是</td>
<td>每个类别有不同的文本数,<br />请在群里获取帮助查看</td>
</tr>
</tbody>
</table>
<img src="/image/feature/memes_help.jpg" height='500px'>
<p>示例: <code v-pre>/鲁迅说过 我没说过这句话</code></p>
<p>权限: 群员及以上</p>
<p>插件来源: <a href="https://github.com/noneplugin/nonebot-plugin-memes" target="_blank" rel="noopener noreferrer">github.com/noneplugin/nonebot-plugin-memes<ExternalLinkIcon/></a></p>
<h3 id="答案之书" tabindex="-1"><a class="header-anchor" href="#答案之书" aria-hidden="true">#</a> 答案之书</h3>
<p>功能: 返回一个 &quot;答案&quot;</p>
<p>命令: <code v-pre>翻看答案{问题}</code></p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
</tr>
</thead>
<tbody>
<tr>
<td>问题</td>
<td>自行输入</td>
<td>是</td>
</tr>
</tbody>
</table>
<p>权限: 群员及以上</p>
<p>插件来源: <a href="https://github.com/A-kirami/nonebot-plugin-answersbook" target="_blank" rel="noopener noreferrer">github.com/A-kirami/nonebot-plugin-answersbook<ExternalLinkIcon/></a></p>
<h3 id="到账语音生成" tabindex="-1"><a class="header-anchor" href="#到账语音生成" aria-hidden="true">#</a> 到账语音生成</h3>
<p>功能: 生成一条支付宝到账语音</p>
<p>命令: <code v-pre>/到账 {金额}</code></p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
</tr>
</thead>
<tbody>
<tr>
<td>金额</td>
<td>0.01~999999999999.99</td>
<td>是</td>
</tr>
</tbody>
</table>
<p>权限: 群员及以上</p>
<p>接口来源: <a href="https://mm.cqu.cc/share/zhifubaodaozhang" target="_blank" rel="noopener noreferrer">mm.cqu.cc/share/zhifubaodaozhang<ExternalLinkIcon/></a></p>
<h2 id="生活功能" tabindex="-1"><a class="header-anchor" href="#生活功能" aria-hidden="true">#</a> 生活功能</h2>
<h3 id="翻译" tabindex="-1"><a class="header-anchor" href="#翻译" aria-hidden="true">#</a> 翻译</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该功能需配置腾讯云TMT机器翻译接口密钥</p>
</div>
<p>命令: <code v-pre>/翻译</code></p>
<p>功能: 翻译指定内容</p>
<p>权限: 群员及以上</p>
<p>插件来源: <a href="https://github.com/Lancercmd/nonebot_plugin_translator" target="_blank" rel="noopener noreferrer">github.com/Lancercmd/nonebot_plugin_translator<ExternalLinkIcon/></a></p>
<h3 id="疫情" tabindex="-1"><a class="header-anchor" href="#疫情" aria-hidden="true">#</a> 疫情</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该功能可以设置定时推送指定城市信息,具体前往<a href="#%E7%AE%A1%E7%90%86%E5%8A%9F%E8%83%BD">管理功能</a></p>
</div>
<p>命令: <code v-pre>{城市}疫情</code> <code v-pre>{城市}疫情政策</code></p>
<p>功能: 查看指定城市疫情/疫情政策</p>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
</tr>
</thead>
<tbody>
<tr>
<td>城市</td>
<td>自行输入</td>
<td>是</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>上海疫情</code> <code v-pre>上海疫情政策</code></p>
<p>插件来源: <a href="https://github.com/Zeta-qixi/nonebot-plugin-covid19-news" target="_blank" rel="noopener noreferrer">github.com/Zeta-qixi/nonebot-plugin-covid19-news<ExternalLinkIcon/></a></p>
<h3 id="天气" tabindex="-1"><a class="header-anchor" href="#天气" aria-hidden="true">#</a> 天气</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该功能使用了 和风天气API,需配置API密钥</p>
</div>
<p>功能:查看指定城市天气</p>
<p>命令: <code v-pre>{城市}天气</code></p>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
</tr>
</thead>
<tbody>
<tr>
<td>城市</td>
<td>自行输入</td>
<td>是</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>北京天气</code></p>
<p>插件来源: <a href="https://github.com/kexue-z/nonebot-plugin-heweather" target="_blank" rel="noopener noreferrer">github.com/kexue-z/nonebot-plugin-heweather<ExternalLinkIcon/></a></p>
<h3 id="违禁词查询" tabindex="-1"><a class="header-anchor" href="#违禁词查询" aria-hidden="true">#</a> 违禁词查询</h3>
<p>命令: <code v-pre>/违禁词 列表</code></p>
<p>权限: 成员及以上</p>
<h3 id="epic喜加一资讯" tabindex="-1"><a class="header-anchor" href="#epic喜加一资讯" aria-hidden="true">#</a> Epic喜加一资讯</h3>
<p>命令:</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>功能</th>
<th>权限</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>epic喜加一</code></td>
<td>查询epic本周免费游戏</td>
<td>群员及以上</td>
</tr>
<tr>
<td><code v-pre>喜加一订阅</code></td>
<td>订阅喜加一资讯,定时推送</td>
<td>超级用户及以上</td>
</tr>
</tbody>
</table>
<p>插件来源: <a href="https://github.com/monsterxcn/nonebot_plugin_epicfree" target="_blank" rel="noopener noreferrer">github.com/monsterxcn/nonebot_plugin_epicfree<ExternalLinkIcon/></a>修改而来</p>
<h2 id="管理功能" tabindex="-1"><a class="header-anchor" href="#管理功能" aria-hidden="true">#</a> 管理功能</h2>
<h3 id="群聊管理" tabindex="-1"><a class="header-anchor" href="#群聊管理" aria-hidden="true">#</a> 群聊管理</h3>
<h4 id="机器人更新" tabindex="-1"><a class="header-anchor" href="#机器人更新" aria-hidden="true">#</a> 机器人更新</h4>
<p>命令: <code v-pre>/检查更新</code> <code v-pre>/更新</code> <code v-pre>/更新日志</code></p>
<p>权限: 超级用户及以上</p>
<h4 id="疫情关注" tabindex="-1"><a class="header-anchor" href="#疫情关注" aria-hidden="true">#</a> 疫情关注</h4>
<p>命令: <code v-pre>/关注疫情 {城市}</code> <code v-pre>/取消关注疫情 {城市}</code> <code v-pre>/疫情关注列表</code></p>
<p>功能: 关注城市疫情并自动在每天18:30推送</p>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
</tr>
</thead>
<tbody>
<tr>
<td>城市</td>
<td>自行输入</td>
<td>是</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>/关注疫情 上海</code></p>
<p>权限: 超级用户及以上</p>
<p>插件来源: <a href="https://github.com/Zeta-qixi/nonebot-plugin-covid19-news" target="_blank" rel="noopener noreferrer">github.com/Zeta-qixi/nonebot-plugin-covid19-news<ExternalLinkIcon/></a></p>
<h4 id="群管-禁、解、踢、黑" tabindex="-1"><a class="header-anchor" href="#群管-禁、解、踢、黑" aria-hidden="true">#</a> 群管(禁、解、踢、黑)</h4>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>请将机器人设置为群管理员,否则功能无法使用</p>
</div>
<p>命令:</p>
<table>
<thead>
<tr>
<th>功能</th>
<th>命令</th>
</tr>
</thead>
<tbody>
<tr>
<td>禁言</td>
<td><code v-pre>/禁{@xx} {@xx} ... {时间}</code></td>
</tr>
<tr>
<td>解禁</td>
<td><code v-pre>/解{@xx} {@xx} ...</code></td>
</tr>
<tr>
<td>踢出</td>
<td><code v-pre>/踢{@xx} {@xx} ...</code></td>
</tr>
<tr>
<td>拉黑</td>
<td><code v-pre>/黑{@xx} {@xx} ...</code></td>
</tr>
</tbody>
</table>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>@xx</td>
<td>@群成员</td>
<td>是</td>
<td>可以@多个,多个之间使用空格隔开<br />若@自带空格则无需再加空格</td>
</tr>
<tr>
<td>时间</td>
<td>1~25919999</td>
<td>否</td>
<td>单位:秒,不加则随机时间(不建议)</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>/禁@群词云 60</code></p>
<p>插件来源: <a href="https://github.com/yzyyz1387/nonebot_plugin_admin" target="_blank" rel="noopener noreferrer">github.com/yzyyz1387/nonebot_plugin_admin<ExternalLinkIcon/></a>修改而来</p>
<h5 id="测试功能" tabindex="-1"><a class="header-anchor" href="#测试功能" aria-hidden="true">#</a> 测试功能</h5>
<div class="custom-container danger"><p class="custom-container-title">警告</p>
<p>此功能为测试功能,不保证能用性</p>
<p>以下测试功能需机器人为群主</p>
<p>并且只有根用户(即配置文件写死的超级用户)有权使用</p>
</div>
<p>命令:</p>
<p>添加管理员 <code v-pre>/管理员+ {@xx} {@xx} ...</code></p>
<p>取消管理员 <code v-pre>/管理员- {@xx} {@xx} ...</code></p>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>@xx</td>
<td>@群成员</td>
<td>是</td>
<td>可以@多个,多个之间使用空格隔开<br />若@自带空格则无需再加空格</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>/管理员+ @群成员</code></p>
<p>权限: 超级用户及以上</p>
<h4 id="群词云设置" tabindex="-1"><a class="header-anchor" href="#群词云设置" aria-hidden="true">#</a> 群词云设置</h4>
<p>命令:</p>
<table>
<thead>
<tr>
<th>功能</th>
<th>命令</th>
</tr>
</thead>
<tbody>
<tr>
<td>开启</td>
<td><code v-pre>/记录本群</code></td>
</tr>
<tr>
<td>关闭</td>
<td><code v-pre>/停止记录本群</code></td>
</tr>
</tbody>
</table>
<p>权限: 超级用户及以上</p>
<p>插件来源: <a href="https://github.com/yzyyz1387/nonebot_plugin_admin" target="_blank" rel="noopener noreferrer">github.com/yzyyz1387/nonebot_plugin_admin<ExternalLinkIcon/></a>修改而来</p>
<h4 id="违禁词" tabindex="-1"><a class="header-anchor" href="#违禁词" aria-hidden="true">#</a> 违禁词</h4>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>违禁词有两套系统,一套自定义系统,一套内置系统<br />
管理员不会被违禁词系统处罚,但是会有提示<br />
两者违禁词不可重复,如需将关键词处罚力度提高至自定义系统等级请使用强制添加<br />
内置系统违禁词为侮辱性词汇及其他敏感词汇,处罚永久为禁言5min<br />
自定义系统处罚为:第一次禁言10min,第二次禁言1day,第三次踢出并拉黑</p>
</div>
<h5 id="内置违禁词系统命令" tabindex="-1"><a class="header-anchor" href="#内置违禁词系统命令" aria-hidden="true">#</a> 内置违禁词系统命令</h5>
<table>
<thead>
<tr>
<th>功能</th>
<th>命令</th>
</tr>
</thead>
<tbody>
<tr>
<td>简单违禁等级</td>
<td><code v-pre>/简单违禁词</code></td>
</tr>
<tr>
<td>严格违禁等级</td>
<td><code v-pre>/严格违禁词</code></td>
</tr>
<tr>
<td>更新词库</td>
<td><code v-pre>/更新违禁词库</code></td>
</tr>
</tbody>
</table>
<p>权限: 超级用户及以上<br>
插件来源: <a href="https://github.com/yzyyz1387/nonebot_plugin_admin" target="_blank" rel="noopener noreferrer">github.com/yzyyz1387/nonebot_plugin_admin<ExternalLinkIcon/></a>修改而来</p>
<h5 id="自定义违禁词系统命令" tabindex="-1"><a class="header-anchor" href="#自定义违禁词系统命令" aria-hidden="true">#</a> 自定义违禁词系统命令</h5>
<table>
<thead>
<tr>
<th>功能</th>
<th>命令</th>
</tr>
</thead>
<tbody>
<tr>
<td>添加违禁词</td>
<td><code v-pre>/违禁词 + {内容}</code></td>
</tr>
<tr>
<td>删除违禁词</td>
<td><code v-pre>/违禁词 - {内容}</code></td>
</tr>
<tr>
<td>强制添加违禁词</td>
<td><code v-pre>/违禁词 ++ {内容}</code></td>
</tr>
<tr>
<td>清空违禁词</td>
<td><code v-pre>/违禁词 清空</code></td>
</tr>
<tr>
<td><a href="#%E8%BF%9D%E7%A6%81%E8%AF%8D%E6%9F%A5%E8%AF%A2">查看违禁词</a></td>
<td><code v-pre>/违禁词 列表</code></td>
</tr>
</tbody>
</table>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>内容</td>
<td>自行输入</td>
<td>是</td>
<td>关键词检测为模糊检测,即关键词在消息中就会触发</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>/违禁词 + 歌姬吧</code></p>
<p>权限: 超级用户及以上</p>
<h4 id="插件控制" tabindex="-1"><a class="header-anchor" href="#插件控制" aria-hidden="true">#</a> 插件控制</h4>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>部分不可控制插件会隐藏</p>
</div>
<p>命令:</p>
<table>
<thead>
<tr>
<th>功能</th>
<th>命令</th>
</tr>
</thead>
<tbody>
<tr>
<td>查看插件状态</td>
<td><code v-pre>/插件控制 状态</code></td>
</tr>
<tr>
<td>开关插件</td>
<td><code v-pre>/插件控制 {插件}</code></td>
</tr>
</tbody>
</table>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>插件</td>
<td>自行输入</td>
<td>是</td>
<td>插件列表可以通过开关状态来获取</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>/插件控制 一言</code></p>
<p>权限: 超级用户及以上</p>
<h4 id="入-回群欢迎词" tabindex="-1"><a class="header-anchor" href="#入-回群欢迎词" aria-hidden="true">#</a> 入/回群欢迎词</h4>
<p>命令:</p>
<table>
<thead>
<tr>
<th>功能</th>
<th>命令</th>
</tr>
</thead>
<tbody>
<tr>
<td>入群欢迎</td>
<td><code v-pre>/入群欢迎 {内容}</code></td>
</tr>
<tr>
<td>回群欢迎</td>
<td><code v-pre>/回群欢迎 {内容}</code></td>
</tr>
</tbody>
</table>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
</tr>
</thead>
<tbody>
<tr>
<td>内容</td>
<td>自行输入</td>
<td>是</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>/入群欢迎 欢迎新朋友,记得修改群昵称</code></p>
<p>权限: 超级用户及以上</p>
<h4 id="插件调用统计" tabindex="-1"><a class="header-anchor" href="#插件调用统计" aria-hidden="true">#</a> 插件调用统计</h4>
<p>命令: <code v-pre>/插件统计</code></p>
<p>功能: 查看各插件调用次数</p>
<p>权限: 超级用户及以上</p>
<h3 id="私聊管理" tabindex="-1"><a class="header-anchor" href="#私聊管理" aria-hidden="true">#</a> 私聊管理</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>所有私聊管理功能权限需在 管理员 及以上</p>
</div>
<h4 id="执行sql" tabindex="-1"><a class="header-anchor" href="#执行sql" aria-hidden="true">#</a> 执行SQL</h4>
<p>命令: <code v-pre>/sql {群号}</code></p>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>群号</td>
<td>自行输入</td>
<td>是</td>
<td>检测是否有本群权限</td>
</tr>
<tr>
<td>SQL语句</td>
<td>自行输入</td>
<td>是</td>
<td>检测成功后输入的SQL语句,只能查,不能增删改</td>
</tr>
</tbody>
</table>
<p>功能: 执行sql语句,并返回结果</p>
<p>权限: 管理员及以上</p>
<h2 id="积分系统" tabindex="-1"><a class="header-anchor" href="#积分系统" aria-hidden="true">#</a> 积分系统</h2>
<h3 id="查看积分" tabindex="-1"><a class="header-anchor" href="#查看积分" aria-hidden="true">#</a> 查看积分</h3>
<p>命令: <code v-pre>/我的积分</code> <code v-pre>/积分</code></p>
<p>权限: 成员及以上</p>
<h3 id="积分排行榜-前十" tabindex="-1"><a class="header-anchor" href="#积分排行榜-前十" aria-hidden="true">#</a> 积分排行榜(前十)</h3>
<p>命令: <code v-pre>/积分排行榜</code> <code v-pre>/积分排名</code></p>
<p>权限: 成员及以上</p>
<h3 id="积分获取分式" tabindex="-1"><a class="header-anchor" href="#积分获取分式" aria-hidden="true">#</a> 积分获取分式</h3>
<h4 id="方式1-签到" tabindex="-1"><a class="header-anchor" href="#方式1-签到" aria-hidden="true">#</a> 方式1: 签到</h4>
<p>命令: <code v-pre>/签到</code></p>
<p>权限: 成员及以上</p>
<h4 id="方式2-小游戏" tabindex="-1"><a class="header-anchor" href="#方式2-小游戏" aria-hidden="true">#</a> 方式2: 小游戏</h4>
<p>详情请看<a href="#%E6%B8%B8%E6%88%8F%E5%8A%9F%E8%83%BD">游戏功能</a></p>
<h2 id="权限系统" tabindex="-1"><a class="header-anchor" href="#权限系统" aria-hidden="true">#</a> 权限系统</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>权限说明: 根用户 &gt; 群主 &gt; 群管理 &gt; 超级用户 &gt; 成员 &gt; 黑名单</p>
<p>权限说明(en): Van &gt; owner &gt; admin &gt; superuser &gt; member &gt; baned</p>
</div>
<h3 id="查看当前权限" tabindex="-1"><a class="header-anchor" href="#查看当前权限" aria-hidden="true">#</a> 查看当前权限</h3>
<p>命令: <code v-pre>/我的权限</code></p>
<p>权限: 成员及以上</p>
<h3 id="设置权限" tabindex="-1"><a class="header-anchor" href="#设置权限" aria-hidden="true">#</a> 设置权限</h3>
<p>命令: <code v-pre>/权限设置 {@xx} {权限}</code></p>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>@xx</td>
<td>@群成员</td>
<td>是</td>
<td>可以@多个,多个之间使用空格隔开<br />若@自带空格则无需再加空格</td>
</tr>
<tr>
<td>权限</td>
<td>baned/黑名单/member/成员/<br />superuser/超级用户</td>
<td>是</td>
<td>群主,根用户和管理员权限不可设置<br />设置管理员请使用QQ自带添加管理员<br />设置根用户请在配置文件中修改</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>/权限设置 @群成员 黑名单</code></p>
<p>权限: 管理员及以上</p>
<h2 id="问答系统" tabindex="-1"><a class="header-anchor" href="#问答系统" aria-hidden="true">#</a> 问答系统</h2>
<h3 id="查看问题列表" tabindex="-1"><a class="header-anchor" href="#查看问题列表" aria-hidden="true">#</a> 查看问题列表</h3>
<p>命令: <code v-pre>/问答列表</code></p>
<p>权限: 成员及以上</p>
<h3 id="问答管理-增删" tabindex="-1"><a class="header-anchor" href="#问答管理-增删" aria-hidden="true">#</a> 问答管理(增删)</h3>
<p>命令:</p>
<table>
<thead>
<tr>
<th>功能</th>
<th>命令</th>
</tr>
</thead>
<tbody>
<tr>
<td>添加(精准)</td>
<td><code v-pre>精准问{问题}答{回答}</code></td>
</tr>
<tr>
<td>添加(模糊)</td>
<td><code v-pre>模糊问{问题}答{回答}</code></td>
</tr>
<tr>
<td>删除</td>
<td><code v-pre>/问答删除 {问题}</code></td>
</tr>
</tbody>
</table>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>问题</td>
<td>自行输入</td>
<td>是</td>
<td></td>
</tr>
<tr>
<td>回答</td>
<td>自行输入</td>
<td>是</td>
<td>回答中只能有图片、文字和QQ表情,其他内容不识别</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>问主页答shinelight.xyz</code></p>
<p>权限: 超级用户及以上</p>
<h2 id="游戏功能" tabindex="-1"><a class="header-anchor" href="#游戏功能" aria-hidden="true">#</a> 游戏功能</h2>
<h3 id="获取游戏菜单" tabindex="-1"><a class="header-anchor" href="#获取游戏菜单" aria-hidden="true">#</a> 获取游戏菜单</h3>
<p>命令: <code v-pre>/游戏菜单</code></p>
<p>权限: 群员及以上</p>
<h3 id="获取各游戏帮助" tabindex="-1"><a class="header-anchor" href="#获取各游戏帮助" aria-hidden="true">#</a> 获取各游戏帮助</h3>
<p>命令: <code v-pre>/{游戏} 帮助</code></p>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>游戏</td>
<td>自行输入</td>
<td>是</td>
<td><a href="#%E8%8E%B7%E5%8F%96%E6%B8%B8%E6%88%8F%E8%8F%9C%E5%8D%95">游戏列表</a>可以使用命令<code v-pre>/游戏菜单</code>获取</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>/俄罗斯轮盘 帮助</code></p>
<p>权限: 成员及以上</p>
<h3 id="游戏列表" tabindex="-1"><a class="header-anchor" href="#游戏列表" aria-hidden="true">#</a> 游戏列表</h3>
<h4 id="俄罗斯轮盘" tabindex="-1"><a class="header-anchor" href="#俄罗斯轮盘" aria-hidden="true">#</a> 俄罗斯轮盘</h4>
<p>开启游戏：/装弹 {装填子弹数} {@XXX}<br>
接受对决：/接受对决 /拒绝决斗<br>
开始对决：/开枪 {打出子弹数}<br>
结算：/结算（当某一方30秒未开枪，可使用该命令强行结束对决并胜利）<br>
我的战绩：/我的战绩<br>
排行榜：/俄罗斯轮盘排名 {类型}<br>
(注：同一时间群内只能有一场对决)</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>装填子弹数</td>
<td>1~7</td>
<td>是</td>
<td></td>
</tr>
<tr>
<td>积分</td>
<td>自行输入</td>
<td>否</td>
<td>不填默认10积分</td>
</tr>
<tr>
<td>@XXX</td>
<td>自行输入</td>
<td>否</td>
<td>指定决斗对象，为空则所有群友都可接受决斗</td>
</tr>
<tr>
<td>打出子弹数</td>
<td>1~装填子弹数-1</td>
<td>否</td>
<td>默认为1</td>
</tr>
<tr>
<td>打出子弹数</td>
<td>积分排行榜/胜场排行/败场排行/欧洲人排行/慈善家排行</td>
<td>是</td>
<td></td>
</tr>
</tbody>
</table>
<p>示例：/装弹 1 10</p>
<p>插件来源: <a href="https://github.com/HibiKier/nonebot_plugin_russian" target="_blank" rel="noopener noreferrer">github.com/HibiKier/nonebot_plugin_russian<ExternalLinkIcon/></a>修改而来</p>
<h4 id="_21点" tabindex="-1"><a class="header-anchor" href="#_21点" aria-hidden="true">#</a> 21点</h4>
<p>发起游戏: /21点 {积分}<br>
查看游戏列表: /21点列表<br>
加入游戏: /21点加入 {游戏ID}<br>
叫牌: /叫牌 {游戏ID}<br>
停牌: /停牌 {游戏ID}<br>
对战(自动进行): /21点对战 {积分} {@XXX}<br>
接收对战: /21点接受对战 {游戏ID}<br>
查看对战列表: /21点对战列表<br>
可以有多场游戏,也可以同时进行多场游戏</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选值</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>积分</td>
<td>自行输入</td>
<td>是</td>
<td></td>
</tr>
<tr>
<td>游戏ID</td>
<td>自行输入</td>
<td>是</td>
<td>游戏ID,通过 查看游戏列表 获取</td>
</tr>
<tr>
<td>@XXX</td>
<td>自行输入</td>
<td>是</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="被动功能" tabindex="-1"><a class="header-anchor" href="#被动功能" aria-hidden="true">#</a> 被动功能</h2>
<h3 id="恶意触发命令检测" tabindex="-1"><a class="header-anchor" href="#恶意触发命令检测" aria-hidden="true">#</a> 恶意触发命令检测</h3>
<p>成员不能在 <strong>10s内 触发命令 5次</strong>,否则会被禁言 5分钟</p>
<h3 id="违禁图片检测" tabindex="-1"><a class="header-anchor" href="#违禁图片检测" aria-hidden="true">#</a> 违禁图片检测</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该功能需配置腾讯云内容安全中的图片安全API密钥</p>
<p>检测的类型为: 色情,性感,违法,广告,暴恐,政治,谩骂</p>
<p>由于容易误封,所以只开启高度确认为违规的情况下触发</p>
<p>若需关闭检测类型可自行开关</p>
</div>
<p>检测到违规图片会撤回并禁言</p>
<h3 id="闪照捕获" tabindex="-1"><a class="header-anchor" href="#闪照捕获" aria-hidden="true">#</a> 闪照捕获</h3>
<div class="custom-container danger"><p class="custom-container-title">警告</p>
<p>该功能请谨慎开启</p>
</div>
<p>将群内闪照转化为正常图片,通过私聊发送到指定用户</p>
<p>接受用户只能在配置文件中设置</p>
<h3 id="拉群自接受" tabindex="-1"><a class="header-anchor" href="#拉群自接受" aria-hidden="true">#</a> 拉群自接受</h3>
<p>自动同意超级用户及以上邀请的成员</p>
<h3 id="好友自接受" tabindex="-1"><a class="header-anchor" href="#好友自接受" aria-hidden="true">#</a> 好友自接受</h3>
<p>自动同意管理员及以上的好友请求</p>
<h3 id="复读机" tabindex="-1"><a class="header-anchor" href="#复读机" aria-hidden="true">#</a> 复读机</h3>
<p>当群内消息 +1 时,机器人会跟着 +1</p>
</div></template>
