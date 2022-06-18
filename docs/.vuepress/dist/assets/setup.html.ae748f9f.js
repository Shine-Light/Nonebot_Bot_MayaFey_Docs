import{_ as o,o as e,c,d}from"./app.925f5072.js";var i="/image/easy/setup/gocq5.png",t="/image/easy/setup/gocq1.png",l="/image/easy/setup/gocq2.png",a="/image/easy/setup/gocq3.png",p="/image/easy/setup/gocq4.png";const s={},r=d('<h1 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h1><h2 id="go-cqhttp" tabindex="-1"><a class="header-anchor" href="#go-cqhttp" aria-hidden="true">#</a> go-cqhttp</h2><ol><li>\u8F93\u5165 <code>mkdir -p /nonebot/go-cqhttp</code></li><li>\u8F93\u5165 <code>cd /nonebot/go-cqhttp</code></li><li>\u8F93\u5165 <code>wget https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc1/go-cqhttp_linux_386.tar.gz</code>,\u56DE\u8F66,\u7B49\u5F85\u4E0B\u8F7D\u5B8C\u6210</li></ol><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>github\u8FDE\u4E0D\u4E0A\u6216\u8005\u4E0B\u8F7D\u592A\u6162? \u770B<a href="#github%E8%BF%9E%E6%8E%A5">\u5E38\u89C1\u95EE\u9898</a></p></div><ol start="4"><li><p>\u8F93\u5165 <code>tar -zxvf go-cqhttp_linux_386.tar.gz</code>,\u56DE\u8F66</p></li><li><p>\u8F93\u5165 <code>./go-cqhttp</code>,\u56DE\u8F66</p></li><li><p>\u8F93\u5165 <code>3</code>,\u56DE\u8F66</p></li><li><p>\u540C\u65F6\u6309\u4E0B\u952E\u76D8\u7684 <code>Ctrl</code> \u548C <code>C</code> \u952E</p></li><li><p>\u9009\u62E9\u9876\u90E8\u7684 <code>\u7A97\u53E3</code>,\u9009\u62E9 <code>\u4F20\u8F93\u65B0\u5EFA\u6587\u4EF6</code></p></li><li><p>\u5728\u5F39\u51FA\u7684\u7A97\u53E3(\u540E\u9762\u7EDF\u79F0\u4E3A<code>\u4F20\u8F93\u7A97\u53E3</code>)\u91CC,\u6309\u4F4F <code>config.yml</code> \u5E76\u62D6\u81F3\u684C\u9762</p></li><li><p>\u5728\u684C\u9762\u53F3\u952E <code>config.yml</code> \u9009\u62E9\u6253\u5F00\u65B9\u5F0F,\u9009\u62E9\u5176\u4ED6\u5E94\u7528,\u9009\u62E9VScode\u52FE\u9009 <code>\u59CB\u7EC8\u7528\u8BE5\u5E94\u7528\u6253\u5F00</code>,\u70B9\u51FB\u786E\u5B9A</p></li><li><p>\u5728 <code>uin:</code> \u540E\u9762\u586B\u5199\u673A\u5668\u4EBA\u8D26\u53F7\u7684QQ\u53F7,\u5728 <code>password:</code> \u7684 <code>&quot;&quot;</code> \u91CC\u9762\u586B\u5199\u673A\u5668\u4EBA\u8D26\u53F7\u7684\u5BC6\u7801</p></li><li><p>\u5212\u5230\u6700\u4E0B\u9762,\u5C06 <code>universal:</code> \u7684\u540E\u9762\u4FEE\u6539\u4E3A <code>ws://127.0.0.1:25888/onebot/v11/ws</code></p></li><li><p>\u540C\u65F6\u6309\u4E0B\u952E\u76D8\u4E0A\u7684 <code>Ctrl</code> \u548C <code>S</code> \u952E</p></li><li><p>\u8FD4\u56DE\u684C\u9762,\u628A <code>config.yml</code> \u62D6\u5230 <code>\u4F20\u8F93\u7A97\u53E3</code> \u91CC,\u70B9\u51FB\u786E\u5B9A,\u5173\u95ED <code>\u4F20\u8F93\u7A97\u53E3</code></p></li><li><p>\u8F93\u5165 <code>screen -R gocq</code> \u56DE\u8F66,\u8F93\u5165 <code>./go-cqhttp</code> \u56DE\u8F66</p></li><li><p>\u82E5\u51FA\u73B0\u4E0B\u56FE\u7684\u60C5\u51B5\u5219\u8BF4\u660E\u5B89\u88C5\u6210\u529F <img src="'+i+'"></p></li><li><p>\u540C\u65F6\u6309\u4E0B\u952E\u76D8\u7684 <code>Ctrl</code> , <code>C</code> \u9000\u51FA\u7A0B\u5E8F</p></li><li><p>\u540C\u65F6\u6309\u4E0B\u952E\u76D8\u7684 <code>Ctrl</code> , <code>A</code> \u548C <code>D</code>\u952E \u8FD4\u56DE\u4E3B\u7A97\u53E3</p></li></ol><details class="custom-container details"><summary>\u5177\u4F53\u6D41\u7A0B\u56FE</summary><ol start="10"><li><p>\u5728\u684C\u9762\u53F3\u952E <code>config.yml</code> \u9009\u62E9\u6253\u5F00\u65B9\u5F0F,\u9009\u62E9\u5176\u4ED6\u5E94\u7528,\u9009\u62E9VScode\u52FE\u9009 <code>\u59CB\u7EC8\u7528\u8BE5\u5E94\u7528\u6253\u5F00</code>,\u70B9\u51FB\u786E\u5B9A <img src="'+t+'"><img src="'+l+'"></p></li><li><p>\u5728 <code>uin:</code> \u540E\u9762\u586B\u5199\u673A\u5668\u4EBA\u8D26\u53F7\u7684QQ\u53F7,\u5728 <code>password:</code> \u7684 <code>&quot;&quot;</code> \u91CC\u9762\u586B\u5199\u673A\u5668\u4EBA\u8D26\u53F7\u7684\u5BC6\u7801 <img src="'+a+'"></p></li><li><p>\u5212\u5230\u6700\u4E0B\u9762,\u5C06 <code>universal:</code> \u7684\u540E\u9762\u4FEE\u6539\u4E3A <code>ws://127.0.0.1:25888/onebot/v11/ws</code><img src="'+p+'"></p></li></ol></details><h2 id="\u5B89\u88C5\u673A\u5668\u4EBA" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u673A\u5668\u4EBA" aria-hidden="true">#</a> \u5B89\u88C5\u673A\u5668\u4EBA</h2><ol><li>\u8F93\u5165 <code>apt -y install git</code> \u56DE\u8F66,\u7B49\u5F85\u5B89\u88C5\u5B8C\u6210</li><li>\u8F93\u5165 <code>cd /nonebot</code> \u56DE\u8F66</li><li>\u8F93\u5165 <code>git clone https://github.com/Shine-Light/Nonebot_Bot_MayaFey.git</code> \u56DE\u8F66</li><li>\u8F93\u5165 <code>mv Nonebot_Bot_MayaFey bot</code> \u56DE\u8F66</li><li>\u8F93\u5165 <code>cd bot</code> \u56DE\u8F66,\u8F93\u5165 <code>poetry install</code>,\u7B49\u5F85\u5B89\u88C5(\u53EF\u80FD\u9700\u89815~20\u5206\u949F)</li><li>\u6253\u5F00 <code>\u4F20\u8F93\u7A97\u53E3</code> ,\u5C06 <code>.env.prod</code> \u62D6\u5230\u684C\u9762,\u5173\u95ED\u4F20\u8F93\u7A97\u53E3</li></ol>',8),n=[r];function g(h,m){return e(),c("div",null,n)}var _=o(s,[["render",g],["__file","setup.html.vue"]]);export{_ as default};
