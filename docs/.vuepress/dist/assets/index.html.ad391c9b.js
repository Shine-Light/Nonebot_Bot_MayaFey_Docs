import{_ as n,o,c as r,a as e,b as t,e as c,d as i,r as d}from"./app.de5dbbd6.js";var s="/image/problem/permission_1.png";const l={},h=c('<h1 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h1><h2 id="\u5982\u4F55\u66F4\u65B0\u673A\u5668\u4EBA" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u66F4\u65B0\u673A\u5668\u4EBA" aria-hidden="true">#</a> \u5982\u4F55\u66F4\u65B0\u673A\u5668\u4EBA</h2><div class="custom-container warning"><p class="custom-container-title">\u63D0\u793A</p><p>\u771F\u5BB5\u7684\u81EA\u52A8\u66F4\u65B0\u662F\u57FA\u4E8E\u524D\u4E00\u4E2A\u7248\u672C\u7684\u57FA\u7840\u66F4\u65B0\u7684,\u6240\u4EE5\u5982\u679C\u4E2D\u95F4\u95F4\u9694\u4E86\u4E00\u4E2A\u7248\u672C,\u90A3\u4E48\u5C06\u65E0\u6CD5\u81EA\u52A8\u66F4\u65B0,\u5982\u679C\u5F3A\u5236\u66F4\u65B0\u7684\u8BDD\u4F1A\u5BFC\u81F4\u51FA\u73B0\u9519\u8BEF<br> \u5982\u679C\u4E2D\u95F4\u95F4\u9694\u4E86\u4E00\u4E2A\u7248\u672C,\u9700\u5728Github\u4E0B\u8F7D\u5B8C\u6574\u4EE3\u7801\u8FDB\u884C\u8986\u76D6</p></div><ol><li>\u5728\u66F4\u65B0\u524D\u5148\u5907\u4EFD</li><li>\u5728\u7FA4\u91CC\u53D1\u9001 <code>/\u66F4\u65B0</code>,\u7B49\u5F85\u66F4\u65B0\u5B8C\u6210\u8FDB\u884C\u4E00\u6B21\u521D\u59CB\u5316\u5373\u53EF</li></ol><h2 id="\u5982\u4F55\u4FEE\u6539\u63D2\u4EF6\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4FEE\u6539\u63D2\u4EF6\u6743\u9650" aria-hidden="true">#</a> \u5982\u4F55\u4FEE\u6539\u63D2\u4EF6\u6743\u9650</h2><p>\u5728\u771F\u5BB5\u673A\u5668\u4EBA\u4E2D\u6709\u4E24\u79CD\u6743\u9650\u6A21\u5F0F,\u6B63\u5E38\u6A21\u5F0F\u548C\u7279\u6B8A\u6A21\u5F0F<br> \u6B63\u5E38\u6A21\u5F0F\u4E2D\u4E00\u4E2A\u63D2\u4EF6\u4E00\u79CD\u6743\u9650,\u7279\u6B8A\u6A21\u5F0F\u4E2D\u4E00\u4E2A\u63D2\u4EF6\u591A\u4E2A\u6743\u9650<br> \u5982:\u75AB\u60C5\u63D2\u4EF6\u4E2D,\u6709\u6210\u5458\u4F7F\u7528\u7684\u75AB\u60C5\u67E5\u8BE2,\u6709\u8D85\u7EA7\u7528\u6237\u4F7F\u7528\u7684\u8BA2\u9605\u75AB\u60C5<br> \u666E\u901A\u63D2\u4EF6\u4FEE\u6539\u6743\u9650:</p><ol><li>\u5728 <code>config/permission/common</code> \u6587\u4EF6\u5939\u4E0B\u627E\u5230\u5BF9\u5E94\u7FA4\u7684\u914D\u7F6E\u6587\u4EF6</li><li>\u627E\u5230\u5BF9\u5E94\u63D2\u4EF6\u540D,\u4FEE\u6539\u6743\u9650</li></ol><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u63D2\u4EF6\u540D\u79F0\u7FFB\u8BD1: \u5728 <code>config/translate.json</code> \u4E2D<br> \u6743\u9650\u7B49\u7EA7: Van &gt; owner &gt; admin &gt; superuser &gt; member &gt; baned</p></div><p>\u7279\u6B8A\u63D2\u4EF6\u4FEE\u6539\u6743\u9650:</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u67D0\u4E9B\u63D2\u4EF6\u53EF\u80FD\u540C\u65F6\u5B58\u5728\u4E8E\u4E24\u4E2A\u6A21\u5F0F\u4E2D,\u90A3\u4E48\u8BF4\u660E\u8FD9\u4E2A\u63D2\u4EF6\u5927\u90E8\u5206\u6307\u4EE4\u7684\u6743\u9650\u662F\u4E00\u6837\u7684,\u53EA\u6709\u5C0F\u90E8\u5206\u4E0D\u540C,\u6839\u636E\u60C5\u51B5\u4FEE\u6539\u5373\u53EF</p></div><ol><li><p>\u5728 <code>content/plugins</code> \u6587\u4EF6\u5939\u4E0B\u627E\u5230\u8981\u4FEE\u6539\u7684\u63D2\u4EF6\u6587\u4EF6\u5939, \u7528\u8BB0\u4E8B\u672C,vscode\u7B49\u8F6F\u4EF6\u6253\u5F00 <code>__init__.py</code> \u6587\u4EF6,\u627E\u5230\u8981\u4FEE\u6539\u7684\u6307\u4EE4\u89E6\u53D1\u5668 <img src="'+s+'"></p></li><li><p>\u5728 <code>config/permission/special</code> \u6587\u4EF6\u5939\u4E0B\u627E\u5230\u5BF9\u5E94\u7FA4\u7684\u914D\u7F6E\u6587\u4EF6</p></li><li><p>\u627E\u5230\u5BF9\u5E94\u6307\u4EE4\u89E6\u53D1\u5668,\u4FEE\u6539\u6743\u9650</p></li></ol><h2 id="\u5982\u4F55\u5B89\u88C5\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5B89\u88C5\u63D2\u4EF6" aria-hidden="true">#</a> \u5982\u4F55\u5B89\u88C5\u63D2\u4EF6</h2><p>\u7FA4\u804A\u63D2\u4EF6:</p><ol><li>\u5C06\u63D2\u4EF6\u653E\u5165 <code>content/plugins</code> \u6587\u4EF6\u5939</li><li>\u5728 <code>config/permission/common</code> \u6BCF\u4E2A\u7FA4\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u6743\u9650</li><li>\u5728\u7FA4\u4E2D\u6267\u884C\u4E00\u6B21\u521D\u59CB\u5316</li></ol><p>\u79C1\u804A\u63D2\u4EF6:<br> \u5C06\u63D2\u4EF6\u653E\u5165 <code>content/plugin_private</code> \u4E2D\u5373\u53EF</p><h2 id="\u5982\u4F55\u4FEE\u6539\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4FEE\u6539\u83DC\u5355" aria-hidden="true">#</a> \u5982\u4F55\u4FEE\u6539\u83DC\u5355</h2><ol><li>\u4F7F\u7528\u8BB0\u4E8B\u672C,vscode\u7B49\u8F6F\u4EF6\u6253\u5F00 <code>content/plugins/menu/__init__.py</code></li><li>\u5728\u91CC\u9762\u627E\u5230\u5BF9\u5E94\u7684\u83DC\u5355\u8BF4\u660E,\u4FEE\u6539\u5E76\u4FDD\u5B58</li><li>\u91CD\u542F\u673A\u5668\u4EBA</li></ol><h2 id="\u56FE\u7247\u90FD\u662F\u6846\u6846\u600E\u4E48\u529E" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u90FD\u662F\u6846\u6846\u600E\u4E48\u529E" aria-hidden="true">#</a> \u56FE\u7247\u90FD\u662F\u6846\u6846\u600E\u4E48\u529E</h2><p>\u8FD9\u79CD\u60C5\u51B5\u591A\u53D1\u751F\u5728Linux\u7CFB\u7EDF\u4E0A,\u767E\u5EA6Linux\u5B89\u88C5\u4E2D\u6587\u5B57\u4F53</p><h2 id="github\u901F\u5EA6\u6162" tabindex="-1"><a class="header-anchor" href="#github\u901F\u5EA6\u6162" aria-hidden="true">#</a> Github\u901F\u5EA6\u6162</h2><p>\u6709\u4EE3\u7406\u7684\u53EF\u4EE5\u6302\u4EE3\u7406,\u6CA1\u6709\u4EE3\u7406\u53EF\u4EE5\u767E\u5EA6 Github \u52A0\u901F</p><h2 id="\u627E\u4E0D\u5230\u60F3\u8981\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u627E\u4E0D\u5230\u60F3\u8981\u7684\u95EE\u9898" aria-hidden="true">#</a> \u627E\u4E0D\u5230\u60F3\u8981\u7684\u95EE\u9898?</h2>',22),p=i("\u5728Github\u63D0Issue,\u6216\u8005\u52A0\u5165"),u={href:"https://jq.qq.com/?_wv=1027&k=ElDdjklL",target:"_blank",rel:"noopener noreferrer"},_=i("\u5439\u6C34\u7FA4(622945924)");function m(b,f){const a=d("ExternalLinkIcon");return o(),r("div",null,[h,e("p",null,[p,e("a",u,[_,t(a)])])])}var x=n(l,[["render",m],["__file","index.html.vue"]]);export{x as default};
