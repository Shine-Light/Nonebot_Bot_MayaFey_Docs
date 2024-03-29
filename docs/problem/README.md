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

## 如何添加/修改权限等级
1. 打开 `config/permission/permissions.json`
2. 新增或修改权限并保存

## 如何修改插件权限
在真宵机器人中有两种权限模式,正常模式和特殊模式  
正常模式中一个插件一种权限,特殊模式中一个插件多个权限  
如:违禁词插件中,有成员使用的违禁词查询,有超级用户使用的管理违禁词  
#### 普通插件修改权限
1. 在 `config/permission/common`  文件夹下找到对应群的配置文件
2. 找到对应插件名,修改权限
::: tip 提示
插件名称翻译: 在 `config/translate.json` 中  
权限等级: Van > owner > admin > superuser > member > baned
:::
#### 特殊插件修改权限
::: warning 注意
某些插件可能同时存在于两个模式中,那么说明这个插件大部分指令的权限是一样的,只有小部分不同,根据情况修改即可
:::
此方法适用于有 `if permission.tools.special_per` 语句的插件
1. 在 `content/plugins` 文件夹下找到要修改的插件文件夹, 用记事本,vscode等软件打开 `__init__.py` 文件,找到要修改的指令触发器
<img src="/image/problem/permission_1.png">
<img src="/image/problem/permission_2.png">

2. 在 `config/permission/special` 文件夹下找到对应群的配置文件
3. 找到对应指令触发器,修改权限
#### 修改默认权限
如果有很多个群都是同一个权限设置,懒得一个一个去设置,可以使用该方法
1. 删除 `config/permission/群号` 文件夹
2. 在 `content/plugins` 文件夹下找到要修改的插件文件夹, 用记事本,vscode等软件打开 `__init__.py` 文件,找到 `__plugin_meta__`
3. 将 `permission_common` 或者 `permission_special` 更改为自己想要的权限
4. 在群中初始化
<img src="/image/problem/permission_3.png">

## 如何安装插件
群聊插件:  
1. 将插件放入 `content/plugins` 文件夹
2. 在 `config/permission/common` 每个群的配置文件中设置权限(可选,不更改默认为 member)
3. 在 `config/translate.json` 配置插件名(可选,默认为插件文件夹名)
4. 在群中执行一次初始化  

私聊插件:  
将插件放入 `content/plugin_private` 中即可

## 如何修改插件配置
大部分插件的配置存储在 `config/插件名` 文件夹下,不同插件配置结构可能不同,可以根据具体插件具体修改

## 如何修改菜单
1. 使用记事本,vscode等软件打开 `content/plugins/menu/__init__.py` 
2. 在里面找到对应的菜单说明,修改并保存
3. 重启机器人

## 如何修改积分
1. 向机器人私聊发送 `/sql`
2. 发送以下代码
```sql
UPDATE credit SET credit=积分数 WHERE gid='群号' AND uid='QQ号';
```

## 匿名用户发言一直无权限
真宵机器人没有适配匿名发言,最好关闭匿名发言再使用

## 图片都是框框怎么办
这种情况多发生在Linux系统上,百度Linux安装中文字体

## Github速度慢
有代理的可以挂代理,没有代理可以百度 Github 加速

## 找不到想要的问题?
在Github提Issue,或者加入[吹水群(622945924)](https://jq.qq.com/?_wv=1027&k=ElDdjklL)
