<template><div><h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1>
<h2 id="如何更新机器人" tabindex="-1"><a class="header-anchor" href="#如何更新机器人" aria-hidden="true">#</a> 如何更新机器人</h2>
<div class="custom-container warning"><p class="custom-container-title">提示</p>
<p>真宵的自动更新是基于前一个版本的基础更新的,所以如果中间间隔了一个版本,那么将无法自动更新,如果强制更新的话会导致出现错误<br>
如果中间间隔了一个版本,需在Github下载完整代码进行覆盖</p>
</div>
<ol>
<li>在更新前先备份</li>
<li>在群里发送 <code v-pre>/更新</code>,等待更新完成进行一次初始化即可</li>
</ol>
<h2 id="如何添加-修改权限等级" tabindex="-1"><a class="header-anchor" href="#如何添加-修改权限等级" aria-hidden="true">#</a> 如何添加/修改权限等级</h2>
<ol>
<li>打开 <code v-pre>config/permission/permissions.json</code></li>
<li>新增或修改权限并保存</li>
</ol>
<h2 id="如何修改插件权限" tabindex="-1"><a class="header-anchor" href="#如何修改插件权限" aria-hidden="true">#</a> 如何修改插件权限</h2>
<p>在真宵机器人中有两种权限模式,正常模式和特殊模式<br>
正常模式中一个插件一种权限,特殊模式中一个插件多个权限<br>
如:违禁词插件中,有成员使用的违禁词查询,有超级用户使用的管理违禁词</p>
<h4 id="普通插件修改权限" tabindex="-1"><a class="header-anchor" href="#普通插件修改权限" aria-hidden="true">#</a> 普通插件修改权限</h4>
<ol>
<li>在 <code v-pre>config/permission/common</code>  文件夹下找到对应群的配置文件</li>
<li>找到对应插件名,修改权限</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>插件名称翻译: 在 <code v-pre>config/translate.json</code> 中<br>
权限等级: Van &gt; owner &gt; admin &gt; superuser &gt; member &gt; baned</p>
</div>
<h4 id="特殊插件修改权限" tabindex="-1"><a class="header-anchor" href="#特殊插件修改权限" aria-hidden="true">#</a> 特殊插件修改权限</h4>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>某些插件可能同时存在于两个模式中,那么说明这个插件大部分指令的权限是一样的,只有小部分不同,根据情况修改即可</p>
</div>
<p>此方法适用于有 <code v-pre>if permission.tools.special_per</code> 语句的插件</p>
<ol>
<li>
<p>在 <code v-pre>content/plugins</code> 文件夹下找到要修改的插件文件夹, 用记事本,vscode等软件打开 <code v-pre>__init__.py</code> 文件,找到要修改的指令触发器
<img src="/image/problem/permission_1.png">
<img src="/image/problem/permission_2.png"></p>
</li>
<li>
<p>在 <code v-pre>config/permission/special</code> 文件夹下找到对应群的配置文件</p>
</li>
<li>
<p>找到对应指令触发器,修改权限</p>
</li>
</ol>
<h4 id="修改默认权限" tabindex="-1"><a class="header-anchor" href="#修改默认权限" aria-hidden="true">#</a> 修改默认权限</h4>
<p>如果有很多个群都是同一个权限设置,懒得一个一个去设置,可以使用该方法</p>
<ol>
<li>删除 <code v-pre>config/permission/群号</code> 文件夹</li>
<li>在 <code v-pre>content/plugins</code> 文件夹下找到要修改的插件文件夹, 用记事本,vscode等软件打开 <code v-pre>__init__.py</code> 文件,找到 <code v-pre>__plugin_meta__</code></li>
<li>将 <code v-pre>permission_common</code> 或者 <code v-pre>permission_special</code> 更改为自己想要的权限</li>
<li>在群中初始化
<img src="/image/problem/permission_3.png"></li>
</ol>
<h2 id="如何安装插件" tabindex="-1"><a class="header-anchor" href="#如何安装插件" aria-hidden="true">#</a> 如何安装插件</h2>
<p>群聊插件:</p>
<ol>
<li>将插件放入 <code v-pre>content/plugins</code> 文件夹</li>
<li>在 <code v-pre>config/permission/common</code> 每个群的配置文件中设置权限(可选,不更改默认为 member)</li>
<li>在 <code v-pre>config/translate.json</code> 配置插件名(可选,默认为插件文件夹名)</li>
<li>在群中执行一次初始化</li>
</ol>
<p>私聊插件:<br>
将插件放入 <code v-pre>content/plugin_private</code> 中即可</p>
<h2 id="如何修改插件配置" tabindex="-1"><a class="header-anchor" href="#如何修改插件配置" aria-hidden="true">#</a> 如何修改插件配置</h2>
<p>大部分插件的配置存储在 <code v-pre>config/插件名</code> 文件夹下,不同插件配置结构可能不同,可以根据具体插件具体修改</p>
<h2 id="如何修改菜单" tabindex="-1"><a class="header-anchor" href="#如何修改菜单" aria-hidden="true">#</a> 如何修改菜单</h2>
<ol>
<li>使用记事本,vscode等软件打开 <code v-pre>content/plugins/menu/__init__.py</code></li>
<li>在里面找到对应的菜单说明,修改并保存</li>
<li>重启机器人</li>
</ol>
<h2 id="如何修改积分" tabindex="-1"><a class="header-anchor" href="#如何修改积分" aria-hidden="true">#</a> 如何修改积分</h2>
<ol>
<li>向机器人私聊发送 <code v-pre>/sql</code></li>
<li>发送以下代码</li>
</ol>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">UPDATE</span> credit <span class="token keyword">SET</span> credit<span class="token operator">=</span>积分数 <span class="token keyword">WHERE</span> gid<span class="token operator">=</span><span class="token string">'群号'</span> <span class="token operator">AND</span> uid<span class="token operator">=</span><span class="token string">'QQ号'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="匿名用户发言一直无权限" tabindex="-1"><a class="header-anchor" href="#匿名用户发言一直无权限" aria-hidden="true">#</a> 匿名用户发言一直无权限</h2>
<p>真宵机器人没有适配匿名发言,最好关闭匿名发言再使用</p>
<h2 id="图片都是框框怎么办" tabindex="-1"><a class="header-anchor" href="#图片都是框框怎么办" aria-hidden="true">#</a> 图片都是框框怎么办</h2>
<p>这种情况多发生在Linux系统上,百度Linux安装中文字体</p>
<h2 id="github速度慢" tabindex="-1"><a class="header-anchor" href="#github速度慢" aria-hidden="true">#</a> Github速度慢</h2>
<p>有代理的可以挂代理,没有代理可以百度 Github 加速</p>
<h2 id="找不到想要的问题" tabindex="-1"><a class="header-anchor" href="#找不到想要的问题" aria-hidden="true">#</a> 找不到想要的问题?</h2>
<p>在Github提Issue,或者加入<a href="https://jq.qq.com/?_wv=1027&amp;k=ElDdjklL" target="_blank" rel="noopener noreferrer">吹水群(622945924)<ExternalLinkIcon/></a></p>
</div></template>
