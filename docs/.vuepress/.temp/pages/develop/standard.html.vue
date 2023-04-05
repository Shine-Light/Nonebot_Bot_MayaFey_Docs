<template><div><h1 id="插件标准" tabindex="-1"><a class="header-anchor" href="#插件标准" aria-hidden="true">#</a> 插件标准</h1>
<p>真宵机器人使用 nonebot 自带的 PluginMetadata 传递插件信息</p>
<h2 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h2>
<ul>
<li>类型: <code v-pre>str</code></li>
<li>说明: 插件名,默认为插件文件夹名</li>
</ul>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h2>
<ul>
<li>类型: <code v-pre>str</code></li>
<li>说明: 插件简介,默认为空</li>
</ul>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> usage</h2>
<ul>
<li>类型: <code v-pre>str</code></li>
<li>说明: 插件使用方法,默认为空</li>
</ul>
<h2 id="extra" tabindex="-1"><a class="header-anchor" href="#extra" aria-hidden="true">#</a> extra</h2>
<ul>
<li>类型: <code v-pre>dict</code></li>
<li>说明: 附加属性,默认值见下</li>
</ul>
<h3 id="generate-type" tabindex="-1"><a class="header-anchor" href="#generate-type" aria-hidden="true">#</a> generate_type</h3>
<ul>
<li>类型: <code v-pre>str</code></li>
<li>说明: 配置生成类型</li>
<li>可选项:
<ul>
<li><code v-pre>group</code>: 配置分群</li>
<li><code v-pre>single</code>: 配置不分群</li>
<li><code v-pre>general</code>: 只生成通用配置</li>
<li><code v-pre>none</code>: 不生成配置,默认为此项</li>
</ul>
</li>
</ul>
<h3 id="permission-common" tabindex="-1"><a class="header-anchor" href="#permission-common" aria-hidden="true">#</a> permission_common</h3>
<ul>
<li>类型: <code v-pre>str</code></li>
<li>说明: 插件正常模式权限,默认 member,有关权限说明请前往<RouterLink to="/feature/#%E6%9D%83%E9%99%90%E7%B3%BB%E7%BB%9F">权限系统</RouterLink>,私聊插件该项无效</li>
</ul>
<h3 id="unset" tabindex="-1"><a class="header-anchor" href="#unset" aria-hidden="true">#</a> unset</h3>
<ul>
<li>类型: <code v-pre>bool</code></li>
<li>说明: 插件是否为不可控制插件,即无法通过插件控制开关,默认为 <code v-pre>False</code>,私聊插件该项无效</li>
</ul>
<h3 id="total-unable" tabindex="-1"><a class="header-anchor" href="#total-unable" aria-hidden="true">#</a> total_unable</h3>
<ul>
<li>类型: <code v-pre>bool</code></li>
<li>说明: 插件是否为不统计插件,即不被统计使用次数,默认为<code v-pre>False</code>,私聊插件该项无效</li>
</ul>
<h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3>
<ul>
<li>类型: <code v-pre>str</code></li>
<li>说明: 插件版本,默认为空</li>
</ul>
<h3 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h3>
<ul>
<li>类型: <code v-pre>str</code></li>
<li>说明: 插件作者,默认为空</li>
</ul>
<h3 id="translate" tabindex="-1"><a class="header-anchor" href="#translate" aria-hidden="true">#</a> translate</h3>
<ul>
<li>类型: <code v-pre>str</code></li>
<li>说明: 插件中文名,默认为插件名</li>
</ul>
<h3 id="permission-special" tabindex="-1"><a class="header-anchor" href="#permission-special" aria-hidden="true">#</a> permission_special</h3>
<ul>
<li>类型: <code v-pre>dict</code></li>
<li>说明: 插件特殊权限,<code v-pre>插件名:matcher名称</code>作为键,<code v-pre>权限</code>作为值,<code v-pre>插件名:matcher名称</code>并不是硬性要求,这么写只是为了防止不同插件冲突,可以根据特殊权限控制的写法自定,需注册Matcher控制,详见<RouterLink to="/develop/matcherCtrl.html">Matcher级别控制</RouterLink>,私聊插件该项无效</li>
<li>示例:</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token string">"permission_special"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string">"matcher名称"</span><span class="token punctuation">:</span> <span class="token string">"权限"</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cd" tabindex="-1"><a class="header-anchor" href="#cd" aria-hidden="true">#</a> cd</h3>
<ul>
<li>类型: <code v-pre>dict</code></li>
<li>说明: cd配置项,支持Plugin级别和Matcher级别控制,Matcher级别控制需注册Matcher控制,详见<RouterLink to="/develop/matcherCtrl.html">Matcher控制</RouterLink>,有两种写法,私聊插件该项无效
<ul>
<li>完整写法<br>
完整写法允许进行Matcher级别的控制<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token string">"cd"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
  <span class="token comment"># Plugin级别</span>
  <span class="token string">"plugin"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string">"count"</span><span class="token punctuation">:</span> 次数<span class="token punctuation">,</span>
    <span class="token string">"time"</span><span class="token punctuation">:</span> 时间<span class="token punctuation">,</span>
    <span class="token string">"ban_time"</span><span class="token punctuation">:</span> 禁言时间
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment"># Matcher级别</span>
  <span class="token string">"matcher"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string">"插件名:matcher名称"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token string">"count"</span><span class="token punctuation">:</span> 次数<span class="token punctuation">,</span>
      <span class="token string">"time"</span><span class="token punctuation">:</span> 时间<span class="token punctuation">,</span>
      <span class="token string">"ban_time"</span><span class="token punctuation">:</span> 禁言时间
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>缩略写法<br>
缩略写法中的配置全部识别为Plugin级别<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># Plugin级别</span>
<span class="token punctuation">{</span>
  <span class="token string">"count"</span><span class="token punctuation">:</span> 次数<span class="token punctuation">,</span>
  <span class="token string">"time"</span><span class="token punctuation">:</span> 时间<span class="token punctuation">,</span>
  <span class="token string">"ban_time"</span><span class="token punctuation">:</span> 禁言时间
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>补充:
<ul>
<li>时间单位均为秒</li>
<li>当 <code v-pre>count</code> <code v-pre>time</code> <code v-pre>ban_time</code> 任意一项小于等于0时, 视为关闭cd</li>
<li><code v-pre>count</code> <code v-pre>time</code> <code v-pre>ban_time</code> 任意一项都可为空, 默认值分别为 <code v-pre>5</code> <code v-pre>10</code> <code v-pre>300</code></li>
</ul>
</li>
</ul>
<h3 id="configs" tabindex="-1"><a class="header-anchor" href="#configs" aria-hidden="true">#</a> configs</h3>
<ul>
<li>类型: <code v-pre>dict</code></li>
<li>说明: 插件的配置信息,使用json存储配置文件,有两种写法,两种写法可以混用
<ul>
<li><code v-pre>&quot;配置项&quot;: &quot;配置值&quot;</code></li>
<li><code v-pre>&quot;配置文件路径&quot;: { &quot;配置项&quot;: &quot;配置值&quot;, ... }</code></li>
</ul>
</li>
<li>补充:
<ul>
<li>配置文件路径不需要绝对路径,配置文件根路径是在 <code v-pre>config/插件名</code> 下的,只需相对配置文件根路径即可</li>
<li><code v-pre>group</code>类型的插件在配置文件路径中可以使用 <code v-pre>{{gid}}</code> 代替群号,当然也可以在调用时自己拼接</li>
</ul>
</li>
</ul>
<h3 id="configs-general" tabindex="-1"><a class="header-anchor" href="#configs-general" aria-hidden="true">#</a> configs_general</h3>
<ul>
<li>类型: <code v-pre>类型</code></li>
<li>说明: 插件的调用配置信息,键为配置项,值为配置值</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token string">"configs_general"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string">"key1"</span><span class="token punctuation">:</span> <span class="token string">"value1"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例" aria-hidden="true">#</a> 配置示例</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> nonebot<span class="token punctuation">.</span>plugin <span class="token keyword">import</span> PluginMetadata

__plugin_meta__ <span class="token operator">=</span> PluginMetadata<span class="token punctuation">(</span>
    name<span class="token operator">=</span><span class="token string">"example"</span><span class="token punctuation">,</span>
    description<span class="token operator">=</span><span class="token string">"This is a example"</span><span class="token punctuation">,</span>
    usage<span class="token operator">=</span><span class="token string">"/example"</span><span class="token punctuation">,</span>
    extra<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token string">"generate_type"</span><span class="token punctuation">:</span> <span class="token string">"group"</span><span class="token punctuation">,</span>
        <span class="token string">"permission_common"</span><span class="token punctuation">:</span> <span class="token string">"member"</span><span class="token punctuation">,</span>
        <span class="token string">"unset"</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span>
        <span class="token string">"total_unable"</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
        <span class="token string">"version"</span><span class="token punctuation">:</span> <span class="token string">"0.0.1"</span><span class="token punctuation">,</span>
        <span class="token string">"author"</span><span class="token punctuation">:</span> <span class="token string">"Shine_Light"</span><span class="token punctuation">,</span>
        <span class="token string">"translate"</span><span class="token punctuation">:</span> <span class="token string">"示例"</span><span class="token punctuation">,</span>
        <span class="token string">"permission_special"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">"matcher_1"</span><span class="token punctuation">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
            <span class="token string">"matcher_2"</span><span class="token punctuation">:</span> <span class="token string">"Van"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">"configs"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">"/{{gid}}/template/config.json"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
              <span class="token string">"key1"</span><span class="token punctuation">:</span> <span class="token string">"value1"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string">"key2"</span><span class="token punctuation">:</span> <span class="token string">"value2"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">"configs_general"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token string">"key_G"</span><span class="token punctuation">:</span> <span class="token string">"value_G"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
