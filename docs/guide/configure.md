# 配置
配置文件在根目录下的 `.env.prod`
## API账号注册(可选)
### 腾讯API(可选)
涉及插件: 腾讯翻译,违禁图片检测  

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
涉及插件: 全网热搜, 聊天机器人

#### 注册
1. 进入[官网](https://www.tianapi.com/login.html),注册账号  
2. 进入[热搜API](https://www.tianapi.com/apiview/223),选择申请开通
3. 开通完成

### 茉莉云(可选)
:::  tip 提示
该接口每日500次免费调用额度
:::
涉及插件: 聊天机器人

#### 注册
1. 进入[官网](https://mlyai.com/login),注册账号  
2. 选择 `机器人` 选项卡, 选择添加机器人, 填写消息后保存  

### 图灵机器人(可选)
:::  tip 提示
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

### 百度内容安全API(可选)
涉及插件: 违禁图片检测

#### 注册
前往[官网](https://login.bce.baidu.com/new-reg?tpl=bceplat&from=portal)注册,并实名认证

#### 内容安全API(可选)
1. 在[官网](cloud.baidu.com)依次选择, 产品 人工智能 图像内容安全,点击立即使用
2. 进入控制台后,点击领取免费资源,勾选`内容审核平台-文本`点击领取
3. 回到控制台,点击应用列表,选择创建应用,填写信息,点击立即创建
4. 应用列表的 `API key` 和 `Secret key` 就是需要填写在配置中的密钥

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
说明: 机器人的昵称,自行修改,使用时会随机抽取一个使用
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


#### RESOURCE_PATH
说明: resource路径,默认即可

#### custom_font_path
说明: 字体路径,默认即可

### 代理设置
#### proxy
说明: 代理地址,若代理需认证,在前面要加上 `用户名:密码@`

### 数据库设置
#### mysql_host
说明: 数据库服务器主机地址,默认即可  
#### mysql_port
说明: 数据库服务器端口,默认即可  
#### mysql_user
说明: 数据库用户名,使用 `root` 用户  
#### mysql_password
说明: 数据库密码,填入之前设置的密码  
#### mysql_db
说明: 数据库名,填入自己想要的那种,或者用默认

### 原神祈愿设置
::: tip 提示
没有特殊情况的话,前四项和mysql设置一致即可
:::
#### mysql_host_genshin
说明: 数据库服务器主机地址,默认即可 
#### mysql_port_genshin
说明: 数据库服务器端口,默认即可  
#### mysql_user_genshin
说明: 数据库用户名,使用 `root` 用户 
#### mysql_password_genshin
说明: 数据库密码,填入之前设置的密码  
#### mysql_db_genshin
说明: 数据库名,默认 `genshinpray`,无特殊情况不修改
#### genshin_port
说明: 祈愿API端口,默认即可  
#### genshin_host
说明: 祈愿API主机名,默认即可 
#### genshin_ssl
说明: 是否使用https, 0关 1开

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

#### 违规图片检测
::: tip 提示
该配置为可选配置,若不设置请将 `tenid` 和 `tenkey` 设置为 `xxxxx`
:::
##### 腾讯接口
##### tenid
说明: 访问密钥id,[同上](#tencentcloud_common_secretid)
##### tankey
说明: 访问密钥,[同上](#tencentcloud_common_secretkey)
##### 百度接口
##### baidu_image_key
说明: APIkey,可以在[控制台](https://console.bce.baidu.com/ai/#/ai/antiporn/app/list)查看
##### baidu_image_secret
说明: Secretkey,可以在[控制台](https://console.bce.baidu.com/ai/#/ai/antiporn/app/list)查看
##### baidu_image_level
说明: 检测等级,0:宽松,1:严格,具体检测项可以在[策略配置](https://ai.baidu.com/censoring#/strategylist)查看


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

#### AI聊天
##### ai_talk_api_type
说明: 接口类型,根据自己购买情况选择  
可选项: tianx([天行数据](https://www.tianapi.com/apiview/47)),qingyunke([青云客](http://api.qingyunke.com/)),turing([图灵机器人](http://www.turingapi.com/),moli([茉莉云](https://mlyai.com/)))  
青云客免费且无需注册(暂时),天行数据每日100次免费额度,图灵机器人永久基础款19.9    
##### ai_talk_tianx_key
说明: 天行数据接口密钥,[控制台](https://www.tianapi.com/console/)获取,若不使用该接口该项可不填  
##### ai_talk_tianx_mode
说明: 天行数据接口工作模式,详情请看[官方文档](https://www.tianapi.com/apiview/47),若不使用该接口该项可不填    
##### ai_talk_tianx_priv
说明: 天行数据接口私有词库匹配模式,详情请看[官方文档](https://www.tianapi.com/apiview/47),若不使用该接口该项可不填    
##### ai_talk_turing_key
说明: 图灵机器人接口密钥,[控制台](http://www.tuling123.com/member/robot/index.jhtml)获取,若不使用该接口该项可不填  
##### ai_talk_moli_key
说明: 茉莉云接口key,[控制台](https://mlyai.com/profile/index.html#/robot/list)获取,若不使用该接口该项可不填  
##### ai_talk_moli_secret
说明: 茉莉云接口密钥,[控制台](https://mlyai.com/profile/index.html#/robot/list)获取,若不使用该接口该项可不填  

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

##### GREETING_GROUPS_ID
说明: 开启按时吃饭提示的群  
示例: `GREETING_GROUPS_ID=["123456789"]`

#### 恶意触发
说明: 在 fast_time 内触发 fast_count 次命令
##### fast_time
说明: 恶意触发时间,单位:秒  
示例: `fast_time=10`

##### fast_count
说明: 恶意触发次数  
示例: `fast_count=5`

#### 防白嫖
说明: 在入群后 指定时间 内退群将直接纳入黑名单  
#### auto_baned_delta_time
说明: 指定时间,单位:分钟  
示例: `auto_baned_delta_time=0`  

#### 疫情查询配置
##### covid19_message_type
说明: 推送消息类型,image:图片, text:文字  
示例: `covid19_message_type = "image"`