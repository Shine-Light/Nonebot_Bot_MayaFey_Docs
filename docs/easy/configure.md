# 配置
## API账号注册
### 腾讯API
#### 翻译API
::: tip 提示
该接口每月有500w字符的免费额度,若超出则需另付费,具体定价参考[官方文档](https://cloud.tencent.com/document/product/551/35017)
:::
1. 进入[腾讯云官网](https://cloud.tencent.com)  
2. 搜索 TMT机器翻译 ,进入机器翻译控制台,选择开通  
::: details 具体流程图
<img src='/image/easy/configure/TMT1.png'>
<img src='/image/easy/configure/TMT2.png'>
:::

### 和风天气API
#### 注册
1. 进入[官网](https://id.qweather.com/#/login?redirect=https://console.qweather.com),注册一个账号

2. 选择应用管理,选择新建应用,选择免费开发版,输入名称,选择Web Api,输入名称,创建成功  
::: details 具体流程图
<img src='/image/easy/configure/he1.png'>
<img src='/image/easy/configure/he2.png'>
:::

## 机器人配置
::: tip 提示
只需填写全是`x`的部分,全是`a`的为可选项,没有提及的就是不必填的默认即可
:::
### SUPERUSERS
说明: 根用户,拥有机器人的所有权限,每个超级用户用 `""` 包起来,用 `,` 隔开(英文半角逗号,不是中文的逗号),没有特殊情况的话填自己的QQ号就好  
示例: ```SUPERUSERS = ["12345678", "114514", "12138"]```

### bot_id
说明: 填入机器人QQ号  
示例: `bot_id = "xxxxxxxx"`  

### mysql_password
说明: 数据库密码,填入之前设置的密码  
示例: `mysql_password = "xxxxxxxx"`  

### mysql_user
说明: 使用 `root``  
示例: `mysql_user = "root"`  

## API设置
### 腾讯机器翻译
::: warning 注意
以下设置的密钥请保存好,不要泄露给任何人
:::
#### tencentcloud_common_secretid
说明: 访问密钥id,在[腾讯云控制台](https://console.cloud.tencent.com/cam/capi)里获取  
示例: `tencentcloud_common_secretid="xxxxxxxx"`  

#### tencentcloud_common_secretkey
说明: 访问密钥,在[腾讯云控制台](https://console.cloud.tencent.com/cam/capi)里获取  
示例: `tencentcloud_common_secretkey="xxxxxxxx"`  
<img src='/image/easy/configure/ten.png'>

### 和风天气
#### QWEATHER_APIKEY
说明: APIKEY,在[控制台](https://console.qweather.com/#/apps)中获取  
示例: `QWEATHER_APIKEY=xxxxxxxx`  

<img src='/image/easy/configure/he3.png'>

#### QWEATHER_APITYPE
说明: 版本,免费版、个人开发版、商业版,区别请看[官方文档](https://dev.qweather.com/help/account/)  
0:免费版,1:个人开发版,2:商业版,没有特殊情况填 `0` 即可  
示例: `QWEATHER_APITYPE=0`  

### 允许违禁次数
#### BAN_COUNT_ALLOW
说明: 最大允许违禁次数,违禁达到次数时将踢出并拉黑  
示例: `BAN_COUNT_ALLOW=3`  

#### Epic喜加一
##### epic_scheduler
说明: 订阅推送时间,"星期 小时 分钟 秒"  
示例: 星期五 20:00:00 推送  
`epic_scheduler="4 20 0 0"`

## 保存配置
1. 回到 Xshell ,打开 `传输窗口`
2. 将桌面的 `.env.prod` 拖进 `传输窗口`,选择是
