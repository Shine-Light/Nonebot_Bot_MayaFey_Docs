<template><div><h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1>
<h2 id="如何修改插件权限" tabindex="-1"><a class="header-anchor" href="#如何修改插件权限" aria-hidden="true">#</a> 如何修改插件权限</h2>
<p>在千寻机器人中有两种权限模式,正常模式和特殊模式<br>
正常模式中一个插件一种权限,特殊模式中一个插件多个权限<br>
如:疫情插件中,有成员使用的疫情查询,有超级用户使用的订阅疫情<br>
普通插件修改权限:</p>
<ol>
<li>在 <code v-pre>config/permission/common</code>  文件夹下找到对应群的配置文件</li>
<li>找到对应插件名,修改权限</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>插件名称翻译: 在 <code v-pre>config/translate.json</code> 中<br>
权限等级: Van &gt; owner &gt; admin &gt; superuser &gt; member &gt; baned</p>
</div>
<p>特殊插件修改权限:</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>某些插件可能同时存在于两个模式中,那么说明这个插件大部分指令的权限是一样的,只有小部分不同,根据情况修改即可</p>
</div>
<ol>
<li>
<p>在 <code v-pre>content/plugins</code> 文件夹下找到要修改的插件文件夹, 用记事本,vscode等软件打开 <code v-pre>__init__.py</code> 文件,找到要修改的指令触发器
<img src="/image/problem/permission_1.png"></p>
</li>
<li>
<p>在 <code v-pre>config/permission/special</code> 文件夹下找到对应群的配置文件</p>
</li>
<li>
<p>找到对应指令触发器,修改权限</p>
</li>
</ol>
<h2 id="如何安装插件" tabindex="-1"><a class="header-anchor" href="#如何安装插件" aria-hidden="true">#</a> 如何安装插件</h2>
<p>群聊插件:</p>
<ol>
<li>将插件放入 <code v-pre>content/plugins</code> 文件夹</li>
<li>在 <code v-pre>config/permission/common</code> 每个群的配置文件中设置权限</li>
<li>在群中执行一次初始化</li>
</ol>
<p>私聊插件:<br>
将插件放入 <code v-pre>content/plugin_private</code> 中即可</p>
<h2 id="如何修改菜单" tabindex="-1"><a class="header-anchor" href="#如何修改菜单" aria-hidden="true">#</a> 如何修改菜单</h2>
<ol>
<li>使用记事本,vscode等软件打开 <code v-pre>content/plugins/menu/__init__.py</code></li>
<li>在里面找到对应的菜单说明,修改并保存</li>
<li>重启机器人</li>
</ol>
<h2 id="图片都是框框怎么办" tabindex="-1"><a class="header-anchor" href="#图片都是框框怎么办" aria-hidden="true">#</a> 图片都是框框怎么办</h2>
<p>这种情况多发生在Linux系统上,百度Linux安装中文字体</p>
<h2 id="找不到想要的问题" tabindex="-1"><a class="header-anchor" href="#找不到想要的问题" aria-hidden="true">#</a> 找不到想要的问题?</h2>
<p>在Github提Issue,或者加入吹水群()</p>
</div></template>
