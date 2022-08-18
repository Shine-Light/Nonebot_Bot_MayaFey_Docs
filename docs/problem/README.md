---
sidebar: auto
---
# 常见问题
## 如何更新机器人
::: warning 提示
真宵的自动更新是基于前一个版本的基础更新的,所以如果中间间隔了一个版本,那么将无法自动更新,如果强制更新的话会导致出现错误  
如果中间间隔了一个版本,需在Github下载完整代码进行覆盖
:::
1. 在更新前先备份
2. 在群里发送 `/更新`,等待更新完成进行一次初始化即可

## 如何修改插件权限
在真宵机器人中有两种权限模式,正常模式和特殊模式  
正常模式中一个插件一种权限,特殊模式中一个插件多个权限  
如:疫情插件中,有成员使用的疫情查询,有超级用户使用的订阅疫情  
普通插件修改权限:
1. 在 `config/permission/common`  文件夹下找到对应群的配置文件
2. 找到对应插件名,修改权限
::: tip 提示
插件名称翻译: 在 `config/translate.json` 中  
权限等级: Van > owner > admin > superuser > member > baned
:::
特殊插件修改权限:
::: warning 注意
某些插件可能同时存在于两个模式中,那么说明这个插件大部分指令的权限是一样的,只有小部分不同,根据情况修改即可
:::
1. 在 `content/plugins` 文件夹下找到要修改的插件文件夹, 用记事本,vscode等软件打开 `__init__.py` 文件,找到要修改的指令触发器
<img src="/image/problem/permission_1.png">

2. 在 `config/permission/special` 文件夹下找到对应群的配置文件
3. 找到对应指令触发器,修改权限

## 如何安装插件
群聊插件:  
1. 将插件放入 `content/plugins` 文件夹
2. 在 `config/permission/common` 每个群的配置文件中设置权限
3. 在群中执行一次初始化  

私聊插件:  
将插件放入 `content/plugin_private` 中即可

## 如何修改菜单
1. 使用记事本,vscode等软件打开 `content/plugins/menu/__init__.py` 
2. 在里面找到对应的菜单说明,修改并保存
3. 重启机器人

## 图片都是框框怎么办
这种情况多发生在Linux系统上,百度Linux安装中文字体

## Github速度慢
有代理的可以挂代理,没有代理可以百度 Github 加速

## 找不到想要的问题?
在Github提Issue,或者加入[吹水群(622945924)](https://jq.qq.com/?_wv=1027&k=ElDdjklL)
