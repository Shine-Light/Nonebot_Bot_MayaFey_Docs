# 配置
::: tip 提示
该页面只进行部分配置说明,完整配置说明[点击这里](/guide/configure.md)
:::
## API账号注册
### 腾讯API(可选)
#### 翻译API(可选)
::: tip 提示
该接口每月有500w字符的免费额度,若超出则需另付费,具体定价参考[官方文档](https://cloud.tencent.com/document/product/551/35017)
:::
1. 进入[腾讯云官网](https://cloud.tencent.com)  
2. 搜索 TMT机器翻译 ,进入机器翻译控制台,选择开通  
::: details 具体流程图
<img src='/image/easy/configure/TMT1.png'>
<img src='/image/easy/configure/TMT2.png'>
:::

#### 违禁图片检测API(可选)
::: tip 提示
该接口首月免费1w张图片,超出额度或次月开始需自行购买,具体前往[官方文档](https://cloud.tencent.com/document/product/1125/37108)查询  
:::
1. 搜索 图片内容安全 ,进入图片内容安全控制台,选择开通  


### 和风天气API(可选)
#### 注册
1. 进入[官网](https://id.qweather.com/#/login?redirect=https://console.qweather.com),注册一个账号

2. 选择应用管理,选择新建应用,选择免费开发版,输入名称,选择Web Api,输入名称,创建成功  
::: details 具体流程图
<img src='/image/easy/configure/he1.png'>
<img src='/image/easy/configure/he2.png'>
:::


### 天行数据热搜API(可选)
::: tip 提示
该接口每日100次免费调用额度
:::

#### 注册
1. 进入[官网](https://www.tianapi.com/login.html),注册账号  
2. 进入[热搜API](https://www.tianapi.com/apiview/223),选择申请开通
3. 进入[机器人API](https://www.tianapi.com/apiview/47),选择申请开通,机器人可在控制台进行自定义
4. 开通完成

### 茉莉云(可选)
::: tip 提示
该接口每日500次免费调用额度
:::
涉及插件: 聊天机器人

#### 注册
1. 进入[官网](https://mlyai.com/login),注册账号  
2. 选择 `机器人` 选项卡, 选择添加机器人, 填写消息后保存  

### 图灵机器人(可选)
::: tip 提示
该接口为付费接口
:::
涉及插件: 聊天机器人

#### 注册
1. 进入[官网](https://www.tuling123.com),注册账号  
2. 激活机器人,根据自己情况选择套餐  

### 百度翻译开放平台API(可选)
涉及插件: 百度翻译

#### 注册
1. 进入[百度翻译开放平台官网](http://api.fanyi.baidu.com/),注册账号,并实名认证  

#### 翻译API(可选)
::: tip 提示
该接口每月有100w字符的免费额度,若超出则需另付费,具体定价参考[官方文档](http://api.fanyi.baidu.com/product/112)
:::
1. 进入[控制台](http://api.fanyi.baidu.com/api/trans/product/desktop)  
2. 选择 `总览` 选项卡,选择开通服务,选择通用翻译,填好信息,选择确定

## 机器人配置
### SUPERUSERS
说明: 根用户,拥有机器人的所有权限,每个根用户用 `""` 包起来,用 `,` 隔开(英文半角逗号,不是中文的逗号),没有特殊情况的话填自己的QQ号就好  
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
### 腾讯机器翻译(可选)
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

### 腾讯违规图片检测(可选)
::: tip 提示
该配置为可选配置,若不设置请将 `tenid` 和 `tenkey` 设置为 `xxxxx`
:::
#### tenid
说明: 访问密钥id,[同上](#tencentcloud_common_secretid)
示例: `tencentcloud_common_secretid="xxxxxxxx"`
#### tankey
说明: 访问密钥,[同上](#tencentcloud_common_secretkey)
示例: `tencentcloud_common_secretkey="xxxxxxxx"`  

### 和风天气(可选)
#### QWEATHER_APIKEY
说明: APIKEY,在[控制台](https://console.qweather.com/#/apps)中获取  
示例: `QWEATHER_APIKEY=xxxxxxxx`  

<img src='/image/easy/configure/he3.png'>

#### QWEATHER_APITYPE
说明: 版本,免费版、个人开发版、商业版,区别请看[官方文档](https://dev.qweather.com/help/account/)  
0:免费版,1:个人开发版,2:商业版,没有特殊情况填 `0` 即可  
示例: `QWEATHER_APITYPE=0`  

### 热搜API版本
#### nethot_version
说明: 热搜接口版本选择,`han`(韩小韩) 或 `tian`(天行数据)  
示例: `nethot_version="han"`

### 天行数据热搜(可选)
#### tianxtoken
说明: 天行数据接口密钥,在[控制台](https://www.tianapi.com/console/)获取  
示例: `tianxtoken="xxxxxxxx"`

### AI聊天(可选)
#### ai_talk_api_type
说明: 接口类型,根据自己购买情况选择  
可选项: tianx([天行数据](https://www.tianapi.com/apiview/47)),qingyunke([青云客](http://api.qingyunke.com/)),turing([图灵机器人](http://www.turingapi.com/),moli([茉莉云](https://mlyai.com/)))  
青云客免费且无需注册(暂时),天行数据每日100次免费额度,图灵机器人永久基础款19.9    
#### ai_talk_tianx_key
说明: 天行数据接口密钥,[控制台](https://www.tianapi.com/console/)获取,若不使用该接口该项可不填  
#### ai_talk_tianx_mode
说明: 天行数据接口工作模式,详情请看[官方文档](https://www.tianapi.com/apiview/47),若不使用该接口该项可不填    
#### ai_talk_tianx_priv
说明: 天行数据接口私有词库匹配模式,详情请看[官方文档](https://www.tianapi.com/apiview/47),若不使用该接口该项可不填    
#### ai_talk_turing_key
说明: 图灵机器人接口密钥,[控制台](http://www.tuling123.com/member/robot/index.jhtml)获取,若不使用该接口该项可不填  
#### ai_talk_moli_key
说明: 茉莉云接口key,[控制台](https://mlyai.com/profile/index.html#/robot/list)获取,若不使用该接口该项可不填  
#### ai_talk_moli_secret
说明: 茉莉云接口密钥,[控制台](https://mlyai.com/profile/index.html#/robot/list)获取,若不使用该接口该项可不填  

## 插件设置
### 允许违规次数
#### BAN_COUNT_ALLOW
说明: 最大允许违规次数,违规达到次数时将踢出并拉黑  
示例: `BAN_COUNT_ALLOW=3`  

### Epic喜加一
#### epic_scheduler
说明: 订阅推送时间,"星期(周日为0) 小时 分钟 秒"  
示例: 星期五 20:00:00 推送  
`epic_scheduler="4 20 0 0"`

### 群管
#### BAN_COUNT_ALLOW
说明: 最大允许违禁次数,违禁达到次数时将踢出并拉黑
#### BAN_RAND_TIME_MIN
说明: 随机禁言最小时间
#### BAN_RAND_TIMR_MAX
说明: 随机禁言最大时间

### 今天吃什么
#### EATING_LIMIT
说明: 每餐每个时间段询问上限  
示例: `EATING_LIMIT=9`

#### GROUPS_ID
说明: 开启按时吃饭提示的群  
示例: `GROUPS_ID=["123456789"]`

## 保存配置
1. 回到 Xshell ,打开 `传输窗口`
2. 将桌面的 `.env.prod` 拖进 `传输窗口`,选择是
