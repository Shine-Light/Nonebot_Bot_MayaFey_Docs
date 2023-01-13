# 插件标准
真宵机器人使用 nonebot 自带的 PluginMetadata 传递插件信息
## name
- 类型: `str`
- 说明: 插件名,默认为插件文件夹名
## description
- 类型: `str`
- 说明: 插件简介,默认为空
## usage
- 类型: `str`
- 说明: 插件使用方法,默认为空
## extra
- 类型: `dict`
- 说明: 附加属性,默认值见下
### generate_type
- 类型: `str`
- 说明: 配置生成类型
- 可选项:
  -   `group`: 配置分群
  -   `single`: 配置不分群
  -   `general`: 只生成通用配置
  -   `none`: 不生成配置,默认为此项
### permission_common
- 类型: `str`
- 说明: 插件正常模式权限,默认 member,有关权限说明请前往[权限系统](../feature/#权限系统)
### unset
- 类型: `bool`
- 说明: 插件是否为不可控制插件,即无法通过插件控制开关,默认为 `False`
### total_unable
- 类型: `bool`
- 说明: 插件是否为不统计插件,即不被统计使用次数,默认为`False`
### version
- 类型: `str`
- 说明: 插件版本,默认为空
### author
- 类型: `str`
- 说明: 插件作者,默认为空
### translate
- 类型: `str`
- 说明: 插件中文名,默认为插件名
### permission_special
- 类型: `dict`
- 说明: 插件特殊权限,`matcher名称`作为键,`权限`作为值,`matcher名称`并不是硬性要求,可以根据特殊权限控制的写法自定,关于特殊权限详见[多权限](./permissions.md)
- 示例: 
```python
"permission_special": {
    "matcher名称": "权限",
    ...
} 
```
### configs
- 类型: `dict`
- 说明: 插件的配置信息,使用json存储配置文件,有两种写法,两种写法可以混用
  - `"配置项": "配置值"`
  - `"配置文件路径": {
    "配置项": "配置值",
    ...
  }`
- 补充: 
  - 配置文件路径不需要绝对路径,配置文件根路径是在 `config/插件名` 下的,只需相对配置文件根路径即可
  - `group`类型的插件在配置文件路径中可以使用 `{{gid}}` 代替群号,当然也可以在调用时自己拼接
### configs_general
- 类型: `类型`
- 说明: 插件的调用配置信息,键为配置项,值为配置值
```python
"configs_general": {
    "key1": "value1"
}
```


## 配置示例
```python
from nonebot.plugin import PluginMetadata

__plugin_meta__ = PluginMetadata(
    name="example",
    description="This is a example",
    usage="/example",
    extra={
        "generate_type": "group",
        "permission_common": "member",
        "unset": False,
        "total_unable": True,
        "version": "0.0.1",
        "author": "Shine_Light",
        "translate": "示例",
        "permission_special": {
            "matcher_1": "admin",
            "matcher_2": "Van"
        },
        "configs": {
            "/{{gid}}/template/config.json": {
              "key1": "value1"
            },
            "key2": "value2"
        },
        "configs_general": {
          "key_G": "value_G"
        }
    }
)
```