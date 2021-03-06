# 配置
## API账号注册
### 腾讯API
涉及插件: 翻译,违禁图片检测  

#### 注册
1. 进入[腾讯云官网](https://cloud.tencent.com),注册账号  

#### 翻译API(可选)
::: tip 提示
该接口每月有500w字符的免费额度,若超出则需另付费,具体定价参考[官方文档](https://cloud.tencent.com/document/product/551/35017)
:::
1. 搜索 TMT机器翻译 ,进入机器翻译控制台,选择开通  

#### 违禁图片检测API(可选)
::: tip 提示
该接口首月免费1w张图片,超出额度或次月开始需自行购买,具体前往[官方文档](https://cloud.tencent.com/document/product/1125/37108)查询  
:::
1. 搜索 图片内容安全 ,进入图片内容安全控制台,选择开通  

### 和风天气API(可选)
::: tip 提示
该接口一天1000次免费调用额度,日常使用足够  
:::
涉及插件: 天气

#### 注册
1. 进入[官网](https://id.qweather.com/#/login?redirect=https://console.qweather.com),注册一个账号

2. 选择应用管理,选择新建应用,选择免费开发版,输入名称,选择Web Api,输入名称,创建成功

### 天行数据(可选)
::: tip 提示
该接口每日100次免费调用额度
:::
涉及插件: 全网热搜

#### 注册
1. 进入[官网](https://www.tianapi.com/login.html),注册账号  
2. 进入[热搜API](https://www.tianapi.com/apiview/223),选择申请开通
3. 开通完成

## 机器人配置
### 基础配置
#### HOST
说明: 主机地址,默认即可  
#### PORT
说明: 端口,默认即可
#### SUPERUSERS
说明: 根用户,拥有机器人的所有权限,每个超级用户用 `""` 包起来,用 `,` 隔开(英文半角逗号,不是中文的逗号)  
示例: ```SUPERUSERS = ["12345678", "114514", "12138"]```
#### NICKNAME
说明: 机器人的昵称,默认即可
#### COMMAND_START
说明: 命令起始符,即命令前加的前缀,若设置为空则命令前无需加前缀  
示例:
```    
COMMAND_START=["/", "!"]  
命令触发: /菜单 !菜单
```  
#### COMMAND_SEP
说明: 命令分隔符,用来分开命令和参数,默认即可

#### bot_id
说明: 机器人QQ号

#### timezone
说明: 时区,默认为上海

### 代理设置
#### proxy
说明: 代理地址,若代理需认证,在前面要加上 `用户名:密码@`

### 数据库设置
#### mysql_host
说明: 数据库服务器主机地址,默认即可  
#### mysql_port
说明: 数据库服务器端口,默认即可  
#### mysql_user
说明: 数据库用户名,默认即可  
#### mysql_password
说明: 数据库密码,填入之前设置的密码  
#### mysql_db
说明: 数据库名,填入创建时的数据库名,或者用默认

### API设置
#### 腾讯机器翻译
##### tencentcloud_common_region
说明: 接口地域,详情请前往[官方文档](https://cloud.tencent.com/document/product/551/15614#1.-.E6.9C.8D.E5.8A.A1.E5.9C.B0.E5.9D.80)查询  
::: warning 注意
以下设置的密钥请保存好,不要泄露给任何人
:::
##### tencentcloud_common_secretid
说明: 访问密钥id,在[腾讯云控制台](https://console.cloud.tencent.com/cam/capi)里获取  
##### tencentcloud_common_secretkey
说明: 访问密钥,在[腾讯云控制台](https://console.cloud.tencent.com/cam/capi)里获取  

#### 腾讯违规图片检测(可选)
::: tip 提示
该配置为可选配置,若不设置请将 `tenid` 和 `tenkey` 设置为 `xxxxx`
:::
##### tenid
说明: 访问密钥id,[同上](#tencentcloud_common_secretid)
##### tankey
说明: 访问密钥,[同上](#tencentcloud_common_secretkey)

#### 热搜API版本
##### nethot_version
说明: 热搜接口版本选择,`han`(韩小韩) 或 `tian`(天行数据)

#### 天行数据
##### tianxtoken
说明: 天行数据接口密钥,在[控制台](https://www.tianapi.com/console/)获取

#### 和风天气
##### QWEATHER_APIKEY
说明: APIKEY,在[控制台](https://console.qweather.com/#/apps)中获取
##### QWEATHER_APITYPE
说明: 版本,免费版、个人开发版、商业版,区别请看[官方文档](https://dev.qweather.com/help/account/)  
0:免费版,1:个人开发版,2:商业版

#### AI对话
##### ai_talk_api_type
说明: 接口类型,根据自己购买情况选择  
可选项: tianx([天行数据](https://www.tianapi.com/apiview/47)),qingyunke([青云客](http://api.qingyunke.com/)),turing([图灵机器人](http://www.turingapi.com/))  
青云客免费且无需注册(暂时),天行数据每日100次免费额度,图灵机器人永久基础款19.9    
##### ai_talk_tianx_key
说明: 天行数据接口密钥,[控制台](https://www.tianapi.com/console/)获取,若不使用该接口该项可不填  
##### ai_talk_tianx_mode
说明: 天行数据接口工作模式,详情请看[官方文档](https://www.tianapi.com/apiview/47),若不使用该接口该项可不填    
##### ai_talk_tianx_priv
说明: 天行数据接口私有词库匹配模式,详情请看[官方文档](https://www.tianapi.com/apiview/47),若不使用该接口该项可不填    
##### ai_talk_turing_key
说明: 图灵数据接口密钥,[控制台](http://www.tuling123.com/member/robot/index.jhtml)获取,若不使用该接口该项可不填  

### 插件配置
#### 定时任务
配置默认即可  

#### 词云
##### wordcloud_background_color
说明: 词云背景颜色  

##### wordcloud_timezone
说明: 时区,默认即可  

#### Epic喜加一
##### epic_scheduler
说明: 订阅推送时间,"星期(周日为0) 小时 分钟 秒"  
示例: 星期五 20:00:00 推送  
`epic_scheduler="4 20 0 0"`

#### 群管
##### BAN_COUNT_ALLOW
说明: 最大允许违禁次数,违禁达到次数时将踢出并拉黑
##### BAN_RAND_TIME_MIN
说明: 随机禁言最小时间
##### BAN_RAND_TIMR_MAX
说明: 随机禁言最大时间

#### 今天吃什么
##### EATING_LIMIT
说明: 每餐每个时间段询问上限  
示例: `EATING_LIMIT=9`

##### GROUPS_ID
说明: 开启按时吃饭提示的群  
示例: `GROUPS_ID=["123456789"]`
