<template><div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>在默认情况下,大部分命令前需加 <code v-pre>/</code> 号,若需取消 <code v-pre>/</code> 或者替换为其他,请查看<RouterLink to="/guide/configure.html#command-start">机器人配置</RouterLink><br>
命令随时变换,命令按群内帮助菜单为准<br>
机器人权限(不是群内权限): Van(根用户) &gt; 群主(owner) &gt; 管理员(admin) &gt; 超级用户(superuser) &gt; 群员(member) &gt; 黑名单(baned)<br>
具体权限控制请前往<a href="#%E6%9D%83%E9%99%90%E7%B3%BB%E7%BB%9F">权限系统</a><br>
所有功能都是分群管理,不用担心数据混乱<br>
出于国内环境的特殊性,本机器人没有涩图相关的功能,需要的话可以在<a href="https://v2.nonebot.dev/store" target="_blank" rel="noopener noreferrer">nb商店<ExternalLinkIcon/></a>中寻找插件</p>
</div>
<h1 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h1>
<h2 id="帮助功能" tabindex="-1"><a class="header-anchor" href="#帮助功能" aria-hidden="true">#</a> 帮助功能</h2>
<h3 id="菜单" tabindex="-1"><a class="header-anchor" href="#菜单" aria-hidden="true">#</a> 菜单</h3>
<p>命令: <code v-pre>/菜单</code> <code v-pre>/帮助</code> <code v-pre>/help</code></p>
<p>功能: 获取总菜单,显示所有菜单的命令</p>
<p>权限: <strong>成员</strong>及以上</p>
<h3 id="插件帮助" tabindex="-1"><a class="header-anchor" href="#插件帮助" aria-hidden="true">#</a> 插件帮助</h3>
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
<td><code v-pre>/帮助 {插件名}</code></td>
<td>获取插件帮助</td>
<td><strong>群员</strong>及以上</td>
</tr>
<tr>
<td><code v-pre>/帮助 list</code></td>
<td>查看正常加载的插件</td>
<td><strong>群员</strong>及以上</td>
</tr>
</tbody>
</table>
<p>插件来源: <a href="https://github.com/XZhouQD/nonebot-plugin-help" target="_blank" rel="noopener noreferrer">nonebot-plugin-help<ExternalLinkIcon/></a></p>
<h2 id="娱乐功能" tabindex="-1"><a class="header-anchor" href="#娱乐功能" aria-hidden="true">#</a> 娱乐功能</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>游戏功能请<a href="#%E6%B8%B8%E6%88%8F%E5%8A%9F%E8%83%BD">点击这里</a></p>
</div>
<h3 id="签到" tabindex="-1"><a class="header-anchor" href="#签到" aria-hidden="true">#</a> 签到</h3>
<p>命令: <code v-pre>/签到</code> <code v-pre>/打卡</code> <code v-pre>/sign</code></p>
<p>功能: 每日一签,随机返回一张<strong>二次元图片</strong>,并增加<strong>积分</strong>。积分增加数随累计签到天数累加</p>
<p>权限: <strong>群员</strong>及以上</p>
<p>图片接口来源: <a href="https://api.ixiaowai.cn/" target="_blank" rel="noopener noreferrer">api.ixiaowai.cn<ExternalLinkIcon/></a></p>
<h3 id="一言" tabindex="-1"><a class="header-anchor" href="#一言" aria-hidden="true">#</a> 一言</h3>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>该功能非大陆IP机器可能无法使用,可能需要代理回国,具体设置查看<RouterLink to="/guide/configure.md/#%E4%BB%A3%E7%90%86%E8%AE%BE%E7%BD%AE">代理设置</RouterLink></p>
</div>
<p>命令: <code v-pre>/一言</code> <code v-pre>/ian</code></p>
<p>功能: 随机返回<strong>一句鸡汤或者毒鸡汤</strong></p>
<p>权限: <strong>群员</strong>及以上</p>
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
<p>权限: <strong>群员</strong>及以上</p>
<p>接口来源: <a href="https://www.eee.dog/tech/rand-pic-api.html" target="_blank" rel="noopener noreferrer">www.eee.dog/tech/rand-pic-api.html<ExternalLinkIcon/></a></p>
<h3 id="热搜" tabindex="-1"><a class="header-anchor" href="#热搜" aria-hidden="true">#</a> 热搜</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该功能分多版本,具体按群内设置为准</p>
</div>
<h4 id="韩小韩接口版本" tabindex="-1"><a class="header-anchor" href="#韩小韩接口版本" aria-hidden="true">#</a> 韩小韩接口版本</h4>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>无需注册,分类较多,但非大陆IP无法访问。该版本适合大陆IP机器使用<br>
非大陆IP机器有时会被屏蔽,需配置代理回国,具体设置查看<RouterLink to="/guide/configure.html/#%E4%BB%A3%E7%90%86%E8%AE%BE%E7%BD%AE">代理设置</RouterLink></p>
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
<p>权限: <strong>群员</strong>及以上</p>
<p>接口来源: <a href="https://api.vvhan.com/hotlist.html" target="_blank" rel="noopener noreferrer">api.vvhan.com/hotlist.html<ExternalLinkIcon/></a></p>
<h4 id="天行数据版本" tabindex="-1"><a class="header-anchor" href="#天行数据版本" aria-hidden="true">#</a> 天行数据版本</h4>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该版本需注册天行数据账号,免费版每天限制100次请求,但全球可用</p>
</div>
<p>命令: <code v-pre>/热搜</code></p>
<p>功能: 获取全网热搜</p>
<p>权限: <strong>群员</strong>及以上</p>
<p>接口来源: <a href="https://www.tianapi.com/apiview/223" target="_blank" rel="noopener noreferrer">www.tianapi.com/apiview/223<ExternalLinkIcon/></a></p>
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
<p>权限: <strong>群员</strong>及以上</p>
<p>插件来源: <a href="https://github.com/noneplugin/nonebot-plugin-simplemusic" target="_blank" rel="noopener noreferrer">nonebot-plugin-simplemusic<ExternalLinkIcon/></a>修改而来</p>
<h3 id="群词云" tabindex="-1"><a class="header-anchor" href="#群词云" aria-hidden="true">#</a> 群词云</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该功能只有在群<a href="#%E7%BE%A4%E8%AF%8D%E4%BA%91%E8%AE%BE%E7%BD%AE">开启群词云记录</a>后才能使用
在开启情况下,每天19:00会自动推送</p>
</div>
<p>命令: <code v-pre>/群词云</code></p>
<p>功能: 获取当日群消息词云</p>
<p>权限: <strong>群员</strong>及以上</p>
<p>插件来源: <a href="https://github.com/yzyyz1387/nonebot_plugin_admin" target="_blank" rel="noopener noreferrer">nonebot_plugin_admin<ExternalLinkIcon/></a>修改而来</p>
<h3 id="表情包制作" tabindex="-1"><a class="header-anchor" href="#表情包制作" aria-hidden="true">#</a> 表情包制作</h3>
<p>功能: 制作鲁迅说,王境泽等表情包</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>功能</th>
<th>权限</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/表情包制作</code></td>
<td>查看支持的指令</td>
<td><strong>群员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/{表情名} {文字1} {文字2} ...</code></td>
<td>生成表情包</td>
<td><strong>群员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/禁用头像表情 {表情名}</code></td>
<td>关闭指定表情包</td>
<td><strong>超级用户</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/启用头像表情 {表情名}</code></td>
<td>开启被关闭的表情包</td>
<td><strong>超级用户</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/全局禁用头像表情 {表情名}</code></td>
<td>关闭指定表情包,所有群生效</td>
<td><strong>超级用户</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/全局启用头像表情 {表情名}</code></td>
<td>开启被关闭的表情包,所有群生效</td>
<td><strong>超级用户</strong>及以上</td>
<td></td>
</tr>
</tbody>
</table>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>可选值</th>
<th>必须</th>
</tr>
</thead>
<tbody>
<tr>
<td>表情名</td>
<td>通过<code v-pre>/表情包</code>获取</td>
<td>是</td>
</tr>
<tr>
<td>文字n</td>
<td>自行输入</td>
<td>是s</td>
</tr>
</tbody>
</table>
<img src="/image/feature/memes_help.jpg" height='450px'>
<p>示例: <code v-pre>/鲁迅说过 我没说过这句话</code></p>
<p>权限: <strong>群员</strong>及以上</p>
<p>插件来源: <a href="https://github.com/noneplugin/nonebot-plugin-memes" target="_blank" rel="noopener noreferrer">nonebot-plugin-memes<ExternalLinkIcon/></a>修改而来</p>
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
<p>权限: <strong>群员</strong>及以上</p>
<p>插件来源: <a href="https://github.com/A-kirami/nonebot-plugin-answersbook" target="_blank" rel="noopener noreferrer">nonebot-plugin-answersbook<ExternalLinkIcon/></a>修改而来</p>
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
<p>权限: <strong>群员</strong>及以上</p>
<p>接口来源: <a href="https://mm.cqu.cc/share/zhifubaodaozhang" target="_blank" rel="noopener noreferrer">mm.cqu.cc/share/zhifubaodaozhang<ExternalLinkIcon/></a></p>
<h3 id="今日运势" tabindex="-1"><a class="header-anchor" href="#今日运势" aria-hidden="true">#</a> 今日运势</h3>
<p>功能: 抽取你今天的运势</p>
<p>命令:</p>
<table>
<thead>
<tr>
<th>功能</th>
<th>命令</th>
<th>权限</th>
</tr>
</thead>
<tbody>
<tr>
<td>抽签</td>
<td><code v-pre>/今日运势</code></td>
<td><strong>群员</strong>及以上</td>
</tr>
<tr>
<td>指定角色签底</td>
<td><code v-pre>/指定{角色}签</code></td>
<td><strong>群员</strong>及以上</td>
</tr>
<tr>
<td>指定主题抽签</td>
<td><code v-pre>/{主题}抽签</code></td>
<td><strong>群员</strong>及以上</td>
</tr>
<tr>
<td>查看可选的抽签主题</td>
<td><code v-pre>/主题列表</code></td>
<td><strong>群员</strong>及以上</td>
</tr>
<tr>
<td>设置群抽签主题</td>
<td><code v-pre>/设置{主题}签</code></td>
<td><strong>超级用户</strong>及以上</td>
</tr>
<tr>
<td>重置群抽签主题</td>
<td><code v-pre>/重置抽签</code></td>
<td><strong>超级用户</strong>及以上</td>
</tr>
<tr>
<td>刷新抽签</td>
<td><code v-pre>/刷新抽签</code></td>
<td><strong>超级用户</strong>及以上</td>
</tr>
<tr>
<td>查看群抽签主题</td>
<td><code v-pre>/抽签设置</code></td>
<td><strong>群员</strong>及以上</td>
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
<td>角色</td>
<td>自行输入</td>
<td>是</td>
<td>可根据主题列表来尝试角色</td>
</tr>
<tr>
<td>主题</td>
<td>自行输入</td>
<td>是</td>
<td>通过主题列表查看可用主题</td>
</tr>
</tbody>
</table>
<p>插件来源:<a href="https://github.com/MinatoAquaCrews/nonebot_plugin_fortune" target="_blank" rel="noopener noreferrer">nonebot_plugin_fortune<ExternalLinkIcon/></a>修改而来</p>
<h3 id="发言排行榜" tabindex="-1"><a class="header-anchor" href="#发言排行榜" aria-hidden="true">#</a> 发言排行榜</h3>
<p>命令:</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/今日榜首</code> <code v-pre>/今天谁话多</code></td>
<td>查看今日发言最多</td>
</tr>
<tr>
<td><code v-pre>/今日发言排行</code> <code v-pre>/今日发言排行榜</code></td>
<td>查看今日发言排行榜</td>
</tr>
<tr>
<td><code v-pre>/昨日发言排行</code> <code v-pre>/昨日发言排行榜</code></td>
<td>查看昨日发言排行榜</td>
</tr>
<tr>
<td><code v-pre>/排行</code> <code v-pre>/谁屁话最多</code></td>
<td>查看历史发言最多</td>
</tr>
<tr>
<td><code v-pre>/发言数</code> <code v-pre>/发言量</code></td>
<td>查看自己历史发言数</td>
</tr>
<tr>
<td><code v-pre>/今日发言数</code></td>
<td>查看自己今天发言数</td>
</tr>
</tbody>
</table>
<p>权限: <strong>群员</strong>及以上</p>
<p>插件来源:<a href="https://github.com/yzyyz1387/nonebot_plugin_admin" target="_blank" rel="noopener noreferrer">nonebot_plugin_admin<ExternalLinkIcon/></a>修改而来</p>
<h3 id="ai聊天" tabindex="-1"><a class="header-anchor" href="#ai聊天" aria-hidden="true">#</a> AI聊天</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该功能支持私聊和群聊,聊天内容仅支持文本</p>
</div>
<p>命令:</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>范围</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>@机器人 {聊天内容}</code></td>
<td>群聊</td>
</tr>
<tr>
<td><code v-pre>{聊天内容}</code></td>
<td>私聊</td>
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
<td>聊天内容</td>
<td>自行输入</td>
<td>是</td>
</tr>
</tbody>
</table>
<p>权限: <strong>群员</strong>及以上</p>
<h3 id="折磨群友" tabindex="-1"><a class="header-anchor" href="#折磨群友" aria-hidden="true">#</a> 折磨群友</h3>
<p>功能: 在指定时间随机戳一戳群友<br>
命令:</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>功能</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/折磨群友 开|关闭</code></td>
<td>功能开关</td>
<td>若未配置就启动,默认配置为:<br> /间隔1小时戳一次</td>
</tr>
<tr>
<td><code v-pre>/折磨群友 {模式} {时间}</code></td>
<td>功能配置</td>
<td></td>
</tr>
</tbody>
</table>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>可选值</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>模式</td>
<td>间隔/定时</td>
<td>是</td>
<td>间隔:每n个时间单位戳一次,定时:在指定时间戳一次</td>
</tr>
<tr>
<td>时间</td>
<td>{小时}:{分钟}:{秒数}</td>
<td>是</td>
<td>必须为整数和正数</td>
</tr>
</tbody>
</table>
<p>权限: <strong>群员</strong>及以上</p>
<h3 id="原神祈愿" tabindex="-1"><a class="header-anchor" href="#原神祈愿" aria-hidden="true">#</a> 原神祈愿</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该功能需要配置 <RouterLink to="/guide/setup.html#%E5%AE%89%E8%A3%85%E5%8E%9F%E7%A5%9E%E7%A5%88%E6%84%BFapi-%E5%8F%AF%E9%80%89">原神祈愿API</RouterLink></p>
</div>
<p>功能: 根据官方爆率模拟祈愿<br>
命令:</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>功能</th>
<th>权限</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/角色祈愿 单|十抽 {蛋池编号}</code></td>
<td>角色池(UP池)祈愿</td>
<td><strong>成员</strong>及以上</td>
<td>默认每抽消耗1积分</td>
</tr>
<tr>
<td><code v-pre>/常驻祈愿 单|十抽</code></td>
<td>常驻池祈愿</td>
<td><strong>成员</strong>及以上</td>
<td>默认每抽消耗1积分</td>
</tr>
<tr>
<td><code v-pre>/全角色祈愿 单|十抽</code></td>
<td>全角色祈愿</td>
<td><strong>成员</strong>及以上</td>
<td>默认每抽消耗1积分</td>
</tr>
<tr>
<td><code v-pre>/武器祈愿 单|十抽</code></td>
<td>武器池祈愿</td>
<td><strong>成员</strong>及以上</td>
<td>默认每抽消耗1积分</td>
</tr>
<tr>
<td><code v-pre>/全武器祈愿 单|十抽</code></td>
<td>全武器祈愿</td>
<td><strong>成员</strong>及以上</td>
<td>默认每抽消耗1积分</td>
</tr>
<tr>
<td><code v-pre>/武器定轨 {武器名}</code></td>
<td>武器定轨</td>
<td><strong>成员</strong>及以上</td>
<td>需要完整的武器名且需在武器池UP中</td>
</tr>
<tr>
<td><code v-pre>/查询定轨</code></td>
<td>查询定轨</td>
<td><strong>成员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/祈愿蛋池列表</code></td>
<td>获取当前群聊已配置得到角色池(UP池)信息</td>
<td><strong>成员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/祈愿蛋池详情 {蛋池编号}</code></td>
<td>获取蛋池详细信息</td>
<td><strong>成员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/我的祈愿</code></td>
<td>查看自己的出货情况</td>
<td><strong>成员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/我的祈愿记录</code></td>
<td>查看自己前20条4,5星出货记录</td>
<td><strong>成员</strong>及以上</td>
<td>按时间排序</td>
</tr>
<tr>
<td><code v-pre>/祈愿排行榜</code></td>
<td>查看4,5星出货排行</td>
<td><strong>成员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/祈愿费用</code></td>
<td>查看祈愿单抽费用</td>
<td><strong>成员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/设置祈愿费用 {积分数}</code></td>
<td>设置祈愿单抽费用</td>
<td><strong>超级用户</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/自定义祈愿角色池 {蛋池编号} {角色列表}</code></td>
<td>自定义角色池</td>
<td><strong>超级用户</strong>及以上</td>
<td>蛋池不存在时自动创建,角色需要1个5星和3个4星,用空格隔开</td>
</tr>
<tr>
<td><code v-pre>/自定义原神武器池 {武器列表}</code></td>
<td>查看祈愿单抽费用</td>
<td><strong>超级用户</strong>及以上</td>
<td>蛋池不存在时自动创建,武器需要2个5星和5个4星,用空格隔开</td>
</tr>
<tr>
<td><code v-pre>/清空原神角色池</code></td>
<td>清空已配置的角色池</td>
<td><strong>超级用户</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/清空原神武器池</code></td>
<td>清空已配置的武器池</td>
<td><strong>超级用户</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/设置祈愿服装概率 {概率}</code></td>
<td>设定角色皮肤出现概率</td>
<td><strong>超级用户</strong>及以上</td>
<td></td>
</tr>
</tbody>
</table>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>可选值</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>蛋池编号</td>
<td>自行输入</td>
<td>是</td>
<td>可以通过 蛋池列表 获取</td>
</tr>
<tr>
<td>武器名</td>
<td>自行输入</td>
<td>是</td>
<td>必须是完整的武器名</td>
</tr>
<tr>
<td>积分数</td>
<td>自行输入</td>
<td>是</td>
<td>可以为0,但不能为负数</td>
</tr>
<tr>
<td>角色列表</td>
<td>自行输入</td>
<td>是</td>
<td>需要1个5星和3个4星,用空格隔开</td>
</tr>
<tr>
<td>武器列表</td>
<td>自行输入</td>
<td>是</td>
<td>需要2个5星和5个4星,用空格隔开</td>
</tr>
<tr>
<td>概率</td>
<td>0~100</td>
<td>是</td>
<td>只支持整数</td>
</tr>
</tbody>
</table>
<p>接口来源: <a href="https://github.com/GardenHamster/GenshinPray" target="_blank" rel="noopener noreferrer">GenshinPray<ExternalLinkIcon/></a></p>
<h3 id="原神角色展柜查询" tabindex="-1"><a class="header-anchor" href="#原神角色展柜查询" aria-hidden="true">#</a> 原神角色展柜查询</h3>
<p>功能: 查询原神角色展示信息,并评分<br>
命令:</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>功能</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/原神面板绑定 {uid}</code></td>
<td>将当前QQ与指定UID绑定</td>
<td>绑定的账号需要开启角色展示详情</td>
</tr>
<tr>
<td><code v-pre>/原神面板</code></td>
<td>查询当前绑定的账号中可用的角色</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/原神面板{uid}</code></td>
<td>查询当前指定的账号中可用的角色</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/原神面板 {角色}</code></td>
<td>查询当前绑定的账号中指定角色的信息</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/原神面板{@xx}</code></td>
<td>查询某人的原神角色展柜信息</td>
<td></td>
</tr>
</tbody>
</table>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>可选值</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>uid</td>
<td>自行输入</td>
<td>是</td>
<td>在游戏左下角可用看到</td>
</tr>
<tr>
<td>角色</td>
<td>自行输入</td>
<td>是</td>
<td>可用通过 <code v-pre>/原神面板</code> 获取</td>
</tr>
<tr>
<td>@xx</td>
<td>@某人</td>
<td>是</td>
<td></td>
</tr>
</tbody>
</table>
<p>权限: <strong>群员</strong>及以上</p>
<h3 id="随机群友老婆" tabindex="-1"><a class="header-anchor" href="#随机群友老婆" aria-hidden="true">#</a> 随机群友老婆</h3>
<p>功能: 随机抽取群友做老婆<br>
命令:</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>功能</th>
<th>权限</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/抽老婆</code></td>
<td>随机抽取群友做老婆</td>
<td><strong>群员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/我的老婆</code></td>
<td>查看我的老婆</td>
<td><strong>群员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/抽老婆配置</code></td>
<td>查看当前群中该插件配置</td>
<td><strong>群员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/抽老婆设置 {设置项} {设置值}</code></td>
<td>查询当前绑定的账号中指定角色的信息</td>
<td><strong>超级用户</strong>及以上</td>
<td>可交互</td>
</tr>
</tbody>
</table>
<p>设置项及对应设置值:</p>
<table>
<thead>
<tr>
<th>设置项</th>
<th>设置值</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>渣男</td>
<td>开|关</td>
<td>可以换老婆</td>
</tr>
<tr>
<td>NTR</td>
<td>开|关</td>
<td>可以抽到同一个人</td>
</tr>
<tr>
<td>无视性别</td>
<td>开|关</td>
<td>可以南/钕通</td>
</tr>
<tr>
<td>机器人</td>
<td>开|关</td>
<td>可以抽到机器人</td>
</tr>
<tr>
<td>自己</td>
<td>开|关</td>
<td>可以抽到自己</td>
</tr>
<tr>
<td>潜水成员不参与</td>
<td>开|关</td>
<td>不会抽到潜水的人</td>
</tr>
<tr>
<td>潜水时间阈值</td>
<td>整数</td>
<td>超过时间阈值视为潜水,单位:天</td>
</tr>
</tbody>
</table>
<h3 id="头像表情包制作" tabindex="-1"><a class="header-anchor" href="#头像表情包制作" aria-hidden="true">#</a> 头像表情包制作</h3>
<p>功能: 与头像或图片互动生成表情包,如抱抱,贴贴,锤...<br>
命令:</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>功能</th>
<th>权限</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/头像表情包</code></td>
<td>查看支持的指令</td>
<td><strong>群员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/{表情名} {@xx}|{qq号}|自己|{图片}</code></td>
<td>生成表情包</td>
<td><strong>群员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/禁用头像表情 {表情名}</code></td>
<td>关闭指定表情包</td>
<td><strong>超级用户</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/启用头像表情 {表情名}</code></td>
<td>开启被关闭的表情包</td>
<td><strong>超级用户</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/全局禁用头像表情 {表情名}</code></td>
<td>关闭指定表情包,所有群生效</td>
<td><strong>超级用户</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/全局启用头像表情 {表情名}</code></td>
<td>开启被关闭的表情包,所有群生效</td>
<td><strong>超级用户</strong>及以上</td>
<td></td>
</tr>
</tbody>
</table>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>可选值</th>
<th>必须</th>
</tr>
</thead>
<tbody>
<tr>
<td>表情名</td>
<td>通过<code v-pre>/头像表情包</code>获取</td>
<td>是</td>
</tr>
<tr>
<td>qq号</td>
<td>自行输入</td>
<td>否</td>
</tr>
<tr>
<td>@xx</td>
<td>@某人</td>
<td>否</td>
</tr>
<tr>
<td>图片</td>
<td>自行发送</td>
<td>否</td>
</tr>
</tbody>
</table>
<img src="/image/feature/petpet_help.jpg" height='450px'>
<h2 id="生活功能" tabindex="-1"><a class="header-anchor" href="#生活功能" aria-hidden="true">#</a> 生活功能</h2>
<h3 id="翻译" tabindex="-1"><a class="header-anchor" href="#翻译" aria-hidden="true">#</a> 翻译</h3>
<h4 id="腾讯版本" tabindex="-1"><a class="header-anchor" href="#腾讯版本" aria-hidden="true">#</a> 腾讯版本</h4>
<p>命令: <code v-pre>/腾讯翻译</code></p>
<p>功能: 翻译指定内容</p>
<p>权限: <strong>群员</strong>及以上</p>
<p>插件来源: <a href="https://github.com/Lancercmd/nonebot_plugin_translator" target="_blank" rel="noopener noreferrer">nonebot_plugin_translator<ExternalLinkIcon/></a>修改而来</p>
<h4 id="百度版本" tabindex="-1"><a class="header-anchor" href="#百度版本" aria-hidden="true">#</a> 百度版本</h4>
<p>功能: 翻译指定内容</p>
<p>命令: <code v-pre>x译x {内容}</code></p>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选项</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>x</td>
<td>中, 英, 粤, 文, 日, 韩, 法, 西, 泰, 阿, 俄, 葡, 德, 意, 希, 荷, 波, 保, 爱, 丹, 芬, 捷, 罗, 斯, 瑞, 匈, 繁, 越</td>
<td>是</td>
<td>第一个x可以为x,表示自动识别,第二个不可为x</td>
</tr>
<tr>
<td>内容</td>
<td>自行输入</td>
<td>是</td>
<td>不可超过2000字</td>
</tr>
</tbody>
</table>
<p>权限: <strong>群员</strong>及以上</p>
<p>插件来源: <a href="https://github.com/NumberSir/nonebot_plugin_baidutranslate" target="_blank" rel="noopener noreferrer">nonebot_plugin_baidutranslate<ExternalLinkIcon/></a>修改而来</p>
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
<p>权限: <strong>群员</strong>及以上</p>
<p>示例: <code v-pre>上海疫情</code> <code v-pre>上海疫情政策</code></p>
<p>插件来源: <a href="https://github.com/Zeta-qixi/nonebot-plugin-covid19-news" target="_blank" rel="noopener noreferrer">nonebot-plugin-covid19-news<ExternalLinkIcon/></a>修改而来</p>
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
<p>权限: <strong>群员</strong>及以上</p>
<p>示例: <code v-pre>北京天气</code></p>
<p>插件来源: <a href="https://github.com/kexue-z/nonebot-plugin-heweather" target="_blank" rel="noopener noreferrer">nonebot-plugin-heweather<ExternalLinkIcon/></a>修改而来</p>
<h3 id="违禁词查询" tabindex="-1"><a class="header-anchor" href="#违禁词查询" aria-hidden="true">#</a> 违禁词查询</h3>
<p>命令: <code v-pre>/违禁词 列表</code></p>
<p>权限: <strong>群员</strong>及以上</p>
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
<td><strong>群员</strong>及以上</td>
</tr>
<tr>
<td><code v-pre>喜加一订阅</code></td>
<td>订阅喜加一资讯,定时推送</td>
<td><strong>群员</strong>及以上</td>
</tr>
<tr>
<td><code v-pre>喜加一订阅取消</code></td>
<td>取消订阅喜加一资讯</td>
<td><strong>群员</strong>及以上</td>
</tr>
</tbody>
</table>
<p>插件来源: <a href="https://github.com/monsterxcn/nonebot_plugin_epicfree" target="_blank" rel="noopener noreferrer">nonebot_plugin_epicfree<ExternalLinkIcon/></a>修改而来</p>
<h3 id="今天吃什么" tabindex="-1"><a class="header-anchor" href="#今天吃什么" aria-hidden="true">#</a> 今天吃什么</h3>
<p>功能: 让真宵来帮你决定今天吃什么</p>
<p>命令:</p>
<table>
<thead>
<tr>
<th>功能</th>
<th>命令</th>
<th>权限</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>吃什么</td>
<td><code v-pre>/{时段}吃什么</code></td>
<td><strong>群员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td>喝什么</td>
<td><code v-pre>/{时段}喝什么</code></td>
<td><strong>群员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td>查看群特色菜单</td>
<td><code v-pre>/吃什么菜单</code></td>
<td><strong>群员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td>添加菜品至群特色菜单</td>
<td><code v-pre>/菜品添加 {菜名}</code></td>
<td><strong>超级用户</strong>及以上</td>
<td>只会在本群生效</td>
</tr>
<tr>
<td>从菜单移除菜品</td>
<td><code v-pre>/移除菜品 {菜名}</code></td>
<td><strong>超级用户</strong>及以上</td>
<td>可以同时移除特色菜单和基础菜单中的菜品</td>
</tr>
<tr>
<td>添加菜品至基础菜单</td>
<td><code v-pre>/加菜 {菜名}</code></td>
<td><strong>超级用户</strong>及以上</td>
<td>全局生效</td>
</tr>
<tr>
<td>查看基础菜单</td>
<td><code v-pre>/吃什么基础菜单</code></td>
<td><strong>超级用户</strong>及以上</td>
<td></td>
</tr>
<tr>
<td>开启/关闭按时吃饭小助手</td>
<td><code v-pre>/开|关闭饭点小助手</code></td>
<td><strong>超级用户</strong>及以上</td>
<td>在饭点提醒吃饭</td>
</tr>
<tr>
<td>添加问候</td>
<td><code v-pre>/添加饭点问候 {时段} {问候语}</code></td>
<td><strong>超级用户</strong>及以上</td>
<td>饭点小助手的问候语</td>
</tr>
<tr>
<td>删除问候</td>
<td><code v-pre>/删除饭点问候 {时段} {问候语}</code></td>
<td><strong>超级用户</strong>及以上</td>
<td></td>
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
<td>时段</td>
<td>早上/中午/晚上/夜宵/早餐...</td>
<td>是</td>
</tr>
<tr>
<td>菜名</td>
<td>自行输入</td>
<td>是</td>
</tr>
<tr>
<td>问候语</td>
<td>自行输入</td>
<td>是</td>
</tr>
</tbody>
</table>
<p>插件来源:<a href="https://github.com/MinatoAquaCrews/nonebot_plugin_what2eat" target="_blank" rel="noopener noreferrer">nonebot_plugin_what2eat<ExternalLinkIcon/></a>修改而来</p>
<h3 id="早晚安" tabindex="-1"><a class="header-anchor" href="#早晚安" aria-hidden="true">#</a> 早晚安</h3>
<p>功能: 和真宵说早晚安，记录睡眠时间</p>
<p>命令:</p>
<table>
<thead>
<tr>
<th>功能</th>
<th>命令</th>
<th>权限</th>
</tr>
</thead>
<tbody>
<tr>
<td>早安</td>
<td><code v-pre>/早安</code></td>
<td><strong>群员</strong>及以上</td>
</tr>
<tr>
<td>晚安</td>
<td><code v-pre>/晚安</code></td>
<td><strong>群员</strong>及以上</td>
</tr>
<tr>
<td>查看自己的作息</td>
<td><code v-pre>/我的作息</code></td>
<td><strong>群员</strong>及以上</td>
</tr>
<tr>
<td>查看群友的作息</td>
<td><code v-pre>/群友作息</code></td>
<td><strong>群员</strong>及以上</td>
</tr>
<tr>
<td>查看配置</td>
<td><code v-pre>/早晚安设置</code></td>
<td><strong>群员</strong>及以上</td>
</tr>
<tr>
<td>开启某个配置</td>
<td><code v-pre>/早安开启 {配置}</code></td>
<td><strong>超级用户</strong>及以上</td>
</tr>
<tr>
<td>关闭某个配置</td>
<td><code v-pre>/早安关闭 {配置}</code></td>
<td><strong>超级用户</strong>及以上</td>
</tr>
<tr>
<td>设置配置数值</td>
<td><code v-pre>/早安设置 {配置} {数值}</code></td>
<td><strong>超级用户</strong>及以上</td>
</tr>
<tr>
<td>开启某个配置</td>
<td><code v-pre>/晚安开启 {配置}</code></td>
<td><strong>超级用户</strong>及以上</td>
</tr>
<tr>
<td>关闭某个配置</td>
<td><code v-pre>/晚安关闭 {配置}</code></td>
<td><strong>超级用户</strong>及以上</td>
</tr>
<tr>
<td>设置配置数值</td>
<td><code v-pre>/晚安设置 {配置} {数值}</code></td>
<td><strong>超级用户</strong>及以上</td>
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
<td>配置</td>
<td>通过查看配置获取</td>
<td>是</td>
</tr>
<tr>
<td>数值</td>
<td>自行输入</td>
<td>是</td>
</tr>
</tbody>
</table>
<p>插件来源:<a href="https://github.com/MinatoAquaCrews/nonebot_plugin_morning" target="_blank" rel="noopener noreferrer">nonebot_plugin_morning<ExternalLinkIcon/></a>修改而来</p>
<h2 id="管理功能" tabindex="-1"><a class="header-anchor" href="#管理功能" aria-hidden="true">#</a> 管理功能</h2>
<h3 id="群聊管理" tabindex="-1"><a class="header-anchor" href="#群聊管理" aria-hidden="true">#</a> 群聊管理</h3>
<h4 id="机器人更新" tabindex="-1"><a class="header-anchor" href="#机器人更新" aria-hidden="true">#</a> 机器人更新</h4>
<p>命令: <code v-pre>/检查更新</code> <code v-pre>/更新</code> <code v-pre>/更新日志</code> <code v-pre>/忽略本次更新</code></p>
<p>权限: <strong>超级用户</strong>及以上</p>
<h4 id="重启" tabindex="-1"><a class="header-anchor" href="#重启" aria-hidden="true">#</a> 重启</h4>
<p>命令: <code v-pre>/重启</code> <code v-pre>/reboot</code></p>
<p>权限: <strong>根用户</strong></p>
<h4 id="启用-停用机器人" tabindex="-1"><a class="header-anchor" href="#启用-停用机器人" aria-hidden="true">#</a> 启用/停用机器人</h4>
<p>命令: <code v-pre>/启用机器人</code> <code v-pre>/停用机器人</code></p>
<p>权限: <strong>根用户</strong></p>
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
<p>权限: <strong>超级用户</strong>及以上</p>
<p>插件来源: <a href="https://github.com/Zeta-qixi/nonebot-plugin-covid19-news" target="_blank" rel="noopener noreferrer">nonebot-plugin-covid19-news<ExternalLinkIcon/></a>修改而来</p>
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
<td><code v-pre>/禁 {@xx} {@xx} ... {时间}</code></td>
</tr>
<tr>
<td>解禁</td>
<td><code v-pre>/解 {@xx} {@xx} ...</code></td>
</tr>
<tr>
<td>踢出</td>
<td><code v-pre>/踢 {@xx} {@xx} ...</code></td>
</tr>
<tr>
<td>拉黑</td>
<td><code v-pre>/黑 {@xx} {@xx} ...</code></td>
</tr>
<tr>
<td>全员禁言</td>
<td><code v-pre>/禁言全员 {@xx} {@xx} ...</code></td>
</tr>
<tr>
<td>解除全员禁言</td>
<td><code v-pre>/解禁全员 {@xx} {@xx} ...</code></td>
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
<p>权限: <strong>超级用户</strong>及以上</p>
<p>示例: <code v-pre>/禁@群词云 60</code></p>
<p>插件来源: <a href="https://github.com/yzyyz1387/nonebot_plugin_admin" target="_blank" rel="noopener noreferrer">nonebot_plugin_admin<ExternalLinkIcon/></a>修改而来</p>
<h5 id="测试功能" tabindex="-1"><a class="header-anchor" href="#测试功能" aria-hidden="true">#</a> 测试功能</h5>
<div class="custom-container danger"><p class="custom-container-title">警告</p>
<p>此功能为测试功能,不保证能用性<br>
以下测试功能需机器人为群主<br>
并且只有<strong>根用户</strong>(即配置文件写死的<strong>SUPERUSER</strong>)有权使用</p>
</div>
<p>命令:<br>
添加管理员 <code v-pre>/管理员+ {@xx} {@xx} ...</code><br>
取消管理员 <code v-pre>/管理员- {@xx} {@xx} ...</code></p>
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
<td>示例: <code v-pre>/管理员+ @群成员</code></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
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
<p>权限: <strong>超级用户</strong>及以上</p>
<p>插件来源: <a href="https://github.com/yzyyz1387/nonebot_plugin_admin" target="_blank" rel="noopener noreferrer">nonebot_plugin_admin<ExternalLinkIcon/></a>修改而来</p>
<h4 id="违禁词" tabindex="-1"><a class="header-anchor" href="#违禁词" aria-hidden="true">#</a> 违禁词</h4>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>违禁词有两套系统,一套自定义系统,一套内置系统<br />
管理员不会被违禁词系统处罚,但是会有提示<br />
两者违禁词不可重复,如需将关键词处罚力度提高至自定义系统等级请使用强制添加<br />
内置系统违禁词为侮辱性词汇及其他敏感词汇,处罚永久为禁言5min<br />
自定义系统处罚为:第一次禁言10min,第二次禁言1day,第n次踢出并拉黑(n在配置文件中设置)</p>
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
<p>权限: <strong>超级用户</strong>及以上</p>
<p>插件来源: <a href="https://github.com/yzyyz1387/nonebot_plugin_admin" target="_blank" rel="noopener noreferrer">nonebot_plugin_admin<ExternalLinkIcon/></a>修改而来</p>
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
<p>权限: <strong>超级用户</strong>及以上</p>
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
<p>权限: <strong>超级用户</strong>及以上</p>
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
<td>设置入群欢迎</td>
<td><code v-pre>/入群欢迎 {内容}</code></td>
</tr>
<tr>
<td>设置回群欢迎</td>
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
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>内容</td>
<td>自行输入</td>
<td>是</td>
<td>支持文字和图片</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>/入群欢迎 欢迎新朋友,记得修改群昵称</code></p>
<p>权限: <strong>超级用户</strong>及以上</p>
<h4 id="插件调用统计" tabindex="-1"><a class="header-anchor" href="#插件调用统计" aria-hidden="true">#</a> 插件调用统计</h4>
<p>命令: <code v-pre>/插件统计</code></p>
<p>功能: 查看各插件调用次数</p>
<p>权限: <strong>超级用户</strong>及以上</p>
<h4 id="记过" tabindex="-1"><a class="header-anchor" href="#记过" aria-hidden="true">#</a> 记过</h4>
<p>命令:</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>功能</th>
<th>权限</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/记过 {@xxx} {@xxx} ... {原因}</code></td>
<td>记过某成员</td>
<td><strong>超级用户及以上</strong></td>
<td>可以同时记录多人</td>
</tr>
<tr>
<td><code v-pre>/查找记过记录 {@xxx}</code></td>
<td>查看某成员记过记录</td>
<td><strong>超级用户及以上</strong></td>
<td>只能查找一人</td>
</tr>
<tr>
<td><code v-pre>/我的记过记录</code></td>
<td>查看我的记过记录</td>
<td><strong>群员及以上</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>/记过配置</code></td>
<td>查看本群记过的配置</td>
<td><strong>群员及以上</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>/修改记过配置 {修改项} {参数}</code></td>
<td>修改本群记过配置</td>
<td><strong>超级用户及以上</strong></td>
<td></td>
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
<td>@xx</td>
<td>@群成员</td>
<td>是</td>
</tr>
<tr>
<td>原因</td>
<td>自行输入</td>
<td>是</td>
</tr>
<tr>
<td>修改项</td>
<td>通过查看配置获取</td>
<td>是</td>
</tr>
<tr>
<td>参数</td>
<td>自行输入</td>
<td>是</td>
</tr>
</tbody>
</table>
<h4 id="自定义定时任务" tabindex="-1"><a class="header-anchor" href="#自定义定时任务" aria-hidden="true">#</a> 自定义定时任务</h4>
<p>命令:</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>功能</th>
<th>权限</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/新增定时任务 {标题} {模式} {时间} {内容}</code></td>
<td>新增一个定时任务</td>
<td><strong>超级用户及以上</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>/修改定时任务 {标题} {模式} {时间} {内容}</code></td>
<td>修改一个定时任务</td>
<td><strong>超级用户及以上</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>/开启|关闭定时任务 {标题}</code></td>
<td>开启或关闭一个定时任务</td>
<td><strong>超级用户及以上</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>/删除定时任务 {标题}</code></td>
<td>删除一个定时任务</td>
<td><strong>超级用户及以上</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>/定时任务列表</code></td>
<td>查看定时任务列表</td>
<td><strong>超级用户及以上</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>/清理过期定时任务</code></td>
<td>清理过期定时任务</td>
<td><strong>超级用户及以上</strong></td>
<td>只对日期模式的任务有效,每天会自动清理</td>
</tr>
</tbody>
</table>
<p>参数:</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>可选项</th>
<th>必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>标题</td>
<td>自行输入</td>
<td>是</td>
<td></td>
</tr>
<tr>
<td>模式</td>
<td>定时、间隔、日期</td>
<td>是</td>
<td>定时:每日的某时刻 间隔:每n个时刻 日期:具体一个时刻</td>
</tr>
<tr>
<td>时间</td>
<td>日期格式:<code v-pre>年-月-日 时:分:秒</code> 其他格式:<code v-pre>时:分:秒</code></td>
<td>是</td>
<td></td>
</tr>
<tr>
<td>内容</td>
<td>自行输入</td>
<td>否</td>
<td>建议先不写内容,后面会有交互输入,支持 <code v-pre>@xx</code> <code v-pre>图片</code> <code v-pre>文字</code> <code v-pre>表情</code></td>
</tr>
</tbody>
</table>
<h4 id="退-踢出群提示" tabindex="-1"><a class="header-anchor" href="#退-踢出群提示" aria-hidden="true">#</a> 退/踢出群提示</h4>
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
<td>设置离群提示</td>
<td><code v-pre>/离群提示 {内容}</code></td>
</tr>
<tr>
<td>设置踢出提示</td>
<td><code v-pre>/踢出提示 {内容}</code></td>
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
<td>支持文字,转义字符和图片</td>
</tr>
</tbody>
</table>
<p>转义字符:</p>
<table>
<thead>
<tr>
<th>转义字符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>{leaved}</td>
<td>退群的人</td>
</tr>
<tr>
<td>{leaved_id}</td>
<td>退群的人的QQ号</td>
</tr>
<tr>
<td>{kicked}</td>
<td>被踢的人</td>
</tr>
<tr>
<td>{kicker}</td>
<td>踢出的操作者</td>
</tr>
<tr>
<td>{kicked_id}</td>
<td>被踢的人的QQ号</td>
</tr>
<tr>
<td>{kicker_id}</td>
<td>踢出的操作者的QQ号</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>/踢出提示 {kicked} 被 {kicker} 踢出了群聊</code></p>
<p>权限: <strong>超级用户</strong>及以上</p>
<h4 id="宵禁" tabindex="-1"><a class="header-anchor" href="#宵禁" aria-hidden="true">#</a> 宵禁</h4>
<p>功能: 在指定时间里禁言全员<br>
命令:</p>
<table>
<thead>
<tr>
<th>功能</th>
<th>命令</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>设置宵禁开始时间</td>
<td><code v-pre>/宵禁开始时间 {时间}</code></td>
<td></td>
</tr>
<tr>
<td>设置宵禁开始时间</td>
<td><code v-pre>/宵禁结束时间 {时间}</code></td>
<td></td>
</tr>
<tr>
<td>开启|关闭宵禁</td>
<td><code v-pre>/开启|关闭宵禁</code></td>
<td>指开启|关闭定时禁言,不是开启|关闭禁言</td>
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
<td>时间</td>
<td>小时:分钟</td>
<td>是</td>
<td>24小时制</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>/宵禁开始时间 23:30</code></p>
<p>权限: <strong>超级用户</strong>及以上</p>
<h3 id="私聊管理" tabindex="-1"><a class="header-anchor" href="#私聊管理" aria-hidden="true">#</a> 私聊管理</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>所有私聊管理功能权限为 <strong>根用户</strong></p>
</div>
<h4 id="执行sql" tabindex="-1"><a class="header-anchor" href="#执行sql" aria-hidden="true">#</a> 执行SQL</h4>
<p>命令: <code v-pre>/sql {sql语句}</code></p>
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
<td>SQL语句</td>
<td>自行输入</td>
<td>是</td>
</tr>
</tbody>
</table>
<p>功能: 执行sql语句,并返回结果</p>
<p>权限: <strong>根用户</strong></p>
<h4 id="机器人好友请求管理" tabindex="-1"><a class="header-anchor" href="#机器人好友请求管理" aria-hidden="true">#</a> 机器人好友请求管理</h4>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>在收到陌生人好友请求时,会将请求推送给所有根用户</p>
</div>
<p>命令:</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>功能</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/好友请求查询</code></td>
<td>获取当前所有好友请求</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/好友请求详情 {QQ}</code></td>
<td>获取指定好友请求详情,如时间,验证信息等</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/同意|拒绝请求 {QQ} {备注}</code></td>
<td>同意或拒绝指定请求</td>
<td>若请求已过期则操作无效</td>
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
<td>QQ</td>
<td>请求的QQ号</td>
<td>是</td>
<td></td>
</tr>
<tr>
<td>备注</td>
<td>自行输入</td>
<td>否</td>
<td>输入 <code v-pre>空</code> 则表示不备注</td>
</tr>
</tbody>
</table>
<p>功能: 处理机器人好友请求</p>
<p>权限: <strong>根用户</strong></p>
<h2 id="积分系统" tabindex="-1"><a class="header-anchor" href="#积分系统" aria-hidden="true">#</a> 积分系统</h2>
<h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3>
<table>
<thead>
<tr>
<th>积分</th>
<th>功能</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/我的积分</code></td>
<td>查看积分</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/积分排行榜</code></td>
<td>查看积分排行</td>
<td>前十名</td>
</tr>
<tr>
<td><code v-pre>/发红包 {积分数} {份数}</code></td>
<td>发送积分红包</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/抢红包</code></td>
<td>领取积分红包</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="积分获取分式" tabindex="-1"><a class="header-anchor" href="#积分获取分式" aria-hidden="true">#</a> 积分获取分式</h3>
<h4 id="方式1-签到" tabindex="-1"><a class="header-anchor" href="#方式1-签到" aria-hidden="true">#</a> 方式1: 签到</h4>
<p>命令: <code v-pre>/签到</code><br>
权限: <strong>成员</strong>及以上</p>
<h4 id="方式2-小游戏" tabindex="-1"><a class="header-anchor" href="#方式2-小游戏" aria-hidden="true">#</a> 方式2: 小游戏</h4>
<p>详情请看<a href="#%E6%B8%B8%E6%88%8F%E5%8A%9F%E8%83%BD">游戏功能</a></p>
<h4 id="方式3-积分红包" tabindex="-1"><a class="header-anchor" href="#方式3-积分红包" aria-hidden="true">#</a> 方式3: 积分红包</h4>
<h2 id="权限系统" tabindex="-1"><a class="header-anchor" href="#权限系统" aria-hidden="true">#</a> 权限系统</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>权限说明: 根用户 &gt; 群主 &gt; 群管理 &gt; 超级用户 &gt; 成员 &gt; 黑名单</p>
<p>权限说明(en): Van &gt; owner &gt; admin &gt; superuser &gt; member &gt; baned</p>
</div>
<h3 id="查看当前权限" tabindex="-1"><a class="header-anchor" href="#查看当前权限" aria-hidden="true">#</a> 查看当前权限</h3>
<p>命令: <code v-pre>/我的权限</code></p>
<p>权限: <strong>成员</strong>及以上</p>
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
<td>baned/黑名单/member/成员/<br />superuser/<strong>超级用户</strong></td>
<td>是</td>
<td><strong>群主,根用户和管理员</strong>权限不可设置<br />设置管理员请使用QQ自带添加管理员<br />设置<strong>根用户</strong>请在<strong>配置文件</strong>中修改</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>/权限设置 @群成员 黑名单</code></p>
<p>权限: <strong>管理员</strong>及以上</p>
<h2 id="问答系统" tabindex="-1"><a class="header-anchor" href="#问答系统" aria-hidden="true">#</a> 问答系统</h2>
<h3 id="查看问题列表" tabindex="-1"><a class="header-anchor" href="#查看问题列表" aria-hidden="true">#</a> 查看问题列表</h3>
<p>命令: <code v-pre>/问答列表</code></p>
<p>权限: <strong>成员</strong>及以上</p>
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
<td>支持图片、文字和QQ表情</td>
</tr>
</tbody>
</table>
<p>示例: <code v-pre>精准问主页答shinelight.xyz</code></p>
<p>权限: <strong>超级用户</strong>及以上</p>
<h2 id="游戏功能" tabindex="-1"><a class="header-anchor" href="#游戏功能" aria-hidden="true">#</a> 游戏功能</h2>
<h3 id="获取游戏菜单" tabindex="-1"><a class="header-anchor" href="#获取游戏菜单" aria-hidden="true">#</a> 获取游戏菜单</h3>
<p>命令: <code v-pre>/游戏菜单</code></p>
<p>权限: <strong>群员</strong>及以上</p>
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
<p>权限: <strong>成员</strong>及以上</p>
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
<p>示例：<code v-pre>/装弹 1 10</code></p>
<p>插件来源: <a href="https://github.com/HibiKier/nonebot_plugin_russian" target="_blank" rel="noopener noreferrer">nonebot_plugin_russian<ExternalLinkIcon/></a>修改而来</p>
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
<p>插件来源: <a href="https://github.com/yaowan233/nonebot-plugin-blackjack" target="_blank" rel="noopener noreferrer">nonebot-plugin-blackjack<ExternalLinkIcon/></a>修改而来</p>
<h4 id="猜群友" tabindex="-1"><a class="header-anchor" href="#猜群友" aria-hidden="true">#</a> 猜群友</h4>
<p>功能: 根据线索猜群友<br>
命令:</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>功能</th>
<th>权限</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/猜群友</code></td>
<td>开始游戏</td>
<td><strong>群员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/猜 {@xx}</code></td>
<td>猜某人</td>
<td><strong>群员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/结束猜群友</code></td>
<td>结束猜群友</td>
<td><strong>群员</strong>及以上</td>
<td>不会返还积分</td>
</tr>
<tr>
<td><code v-pre>/猜群友配置</code></td>
<td>查看猜群友配置</td>
<td><strong>群员</strong>及以上</td>
<td></td>
</tr>
<tr>
<td><code v-pre>/猜群友设置 {配置项} {配置值}</code></td>
<td>查询当前绑定的账号中指定角色的信息</td>
<td><strong>超级用户</strong>及以上</td>
<td>可交互</td>
</tr>
</tbody>
</table>
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
<td>@XXX</td>
<td>自行输入</td>
<td>是</td>
<td></td>
</tr>
<tr>
<td>配置项</td>
<td>自行输入</td>
<td>是</td>
<td>详见下表</td>
</tr>
<tr>
<td>配置值</td>
<td>自行输入</td>
<td>是</td>
<td>详见下表</td>
</tr>
</tbody>
</table>
<p>设置项及对应设置值:</p>
<table>
<thead>
<tr>
<th>设置项</th>
<th>设置值</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>消耗积分</td>
<td>整数</td>
<td>开启一局游戏需要的积分</td>
</tr>
<tr>
<td>奖励积分</td>
<td>整数</td>
<td>获胜奖励的积分</td>
</tr>
<tr>
<td>过期时间</td>
<td>整数</td>
<td>游戏超时时间,超时自动结束,单位:秒</td>
</tr>
<tr>
<td>抽到机器人</td>
<td>开|关</td>
<td>可以抽到机器人</td>
</tr>
<tr>
<td>抽到自己</td>
<td>开|关</td>
<td>可以抽到自己</td>
</tr>
<tr>
<td>潜水成员不参与</td>
<td>开|关</td>
<td>不会抽到潜水的人</td>
</tr>
<tr>
<td>潜水时间阈值</td>
<td>整数</td>
<td>超过时间阈值视为潜水,单位:天</td>
</tr>
<tr>
<td>头像切割大小百分比</td>
<td>分数(&lt;=1)</td>
<td>头像线索的切割大小百分比</td>
</tr>
</tbody>
</table>
<h2 id="被动功能" tabindex="-1"><a class="header-anchor" href="#被动功能" aria-hidden="true">#</a> 被动功能</h2>
<h3 id="恶意触发命令检测" tabindex="-1"><a class="header-anchor" href="#恶意触发命令检测" aria-hidden="true">#</a> 恶意触发命令检测</h3>
<p>成员不能在 <strong>10s内 触发命令 5次</strong>,否则会被禁言 5分钟</p>
<h3 id="违禁图片检测" tabindex="-1"><a class="header-anchor" href="#违禁图片检测" aria-hidden="true">#</a> 违禁图片检测</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该功能需配置腾讯云\百度云内容安全中的图片安全API密钥</p>
<p>腾讯云检测的类型为: 色情,性感,违法,广告,暴恐,政治,谩骂<br>
百度云检测类型可在百度云控制台自行设置</p>
<p>由于容易误封,所以默认为高度确认违规的情况下触发</p>
</div>
<p>检测到违规图片会撤回并禁言</p>
<h3 id="闪照捕获" tabindex="-1"><a class="header-anchor" href="#闪照捕获" aria-hidden="true">#</a> 闪照捕获</h3>
<div class="custom-container danger"><p class="custom-container-title">警告</p>
<p>该功能请谨慎开启</p>
</div>
<p>将群内闪照转化为正常图片,通过私聊发送到<strong>根用户</strong><br>
<strong>根用户</strong>只能在配置文件中设置</p>
<h3 id="拉群自接受" tabindex="-1"><a class="header-anchor" href="#拉群自接受" aria-hidden="true">#</a> 拉群自接受</h3>
<p>自动同意<strong>超级用户</strong>及以上邀请的成员</p>
<h3 id="好友自接受" tabindex="-1"><a class="header-anchor" href="#好友自接受" aria-hidden="true">#</a> 好友自接受</h3>
<p>自动同意<strong>根用户</strong>的好友请求,在收到陌生人好友请求时,会将请求推送给所有根用户,由根用户决定是否添加</p>
<h3 id="复读机" tabindex="-1"><a class="header-anchor" href="#复读机" aria-hidden="true">#</a> 复读机</h3>
<p>当群内消息 +1 时,机器人会跟着 +1,支持文字、图片和表情<br>
可在 <code v-pre>config/repeater/config_general.json</code> 中修改触发阈值</p>
<h3 id="定时撤回" tabindex="-1"><a class="header-anchor" href="#定时撤回" aria-hidden="true">#</a> 定时撤回</h3>
<p>部分过长信息会在 30~60秒 内自动撤回</p>
<h3 id="防白嫖" tabindex="-1"><a class="header-anchor" href="#防白嫖" aria-hidden="true">#</a> 防白嫖</h3>
<p>在入群后 指定时间 内退群将直接纳入黑名单,防止白嫖完就走,指定时间可在配置中自定义</p>
</div></template>
