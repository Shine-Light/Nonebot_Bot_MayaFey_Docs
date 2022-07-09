# 前置准备
## 服务器准备
### 选购
云服务器提供商有很多腾讯云、阿里云、百度云、华为云等等,每个提供商的活动都不相同,可以自行前往官网了解  
服务器类型推荐 轻量应用服务器 ,轻量应用服务器适合机器人这样的小项目,价格便宜部署简单,但是弹性较差,可以自行权衡选择  
这里以 本地的 Ubuntu20.04 虚拟机 做演示,各个平台的操作大同小异  
<img src='/image/easy/pre/server_buy.gif'>
::: warning 提示
服务器的地区尽量选择中国大陆地区,我选择香港地区主要是因为便宜,如果选择在非大陆地区,则后期配置会较麻烦,且有部分功能可能无法使用
:::
::: warning 提示
购买时的系统  
Windows:无限制  
Linux:Ubuntu20.04/Ubuntu18.04
:::

完成选择后点击购买  
如果出现售罄的情况,可以选择其他配置或地区的机器,或者等待补货(纯看运气)  

## 软件准备
::: tip 提示
涉及的软件我都放在蓝奏云上,可以直接下载,但还是推荐在官网下载确保是新版本  
地址:[https://wwi.lanzoup.com/b01jfb1ng](https://wwi.lanzoup.com/b01jfb1ng)  
密码:86lx  
:::
### Xshell
下载XshellPlus安装程序  
双击程序进行安装

### VScode
::: tip 提示
其实记事本也可以  
别问我为什么不用notepad++
:::
在[官网](https://code.visualstudio.com/Download)下载安装包  
打开安装程序进行安装

## 连接准备
1. 进入[阿里云](https://aliyun.com)官网,在右上角打开控制台  
2. 选择轻量应用服务器  
3. 找到刚才购买的服务器  
4. 在侧边栏选择远程连接  
5. 设置密码,然后复制IP  
::: warning 警告
服务器的IP千万不要泄露出去,不然容易被攻击
:::
6. 打开Xshell,选择新建  
7. 在主机一栏中填写刚才复制的IP  
8. 在侧边栏选择用户身份验证,用户名输入 `root`,密码输入刚才设置的密码,填写完点击确定  
9. 双击刚才新建得到会话进行连接  

::: details 具体流程图
1. 进入[阿里云](https://aliyun.com)官网,在右上角打开控制台   
<img src='/image/easy/pre/con1.png'>
2. 选择轻量应用服务器  
<img src='/image/easy/pre/con2.png'>
3. 找到刚才购买的服务器  
<img src='/image/easy/pre/con3.png'>
4. 在侧边栏选择远程连接  
<img src='/image/easy/pre/con4.png'>
5. 设置密码,然后复制IP  
<img src='/image/easy/pre/con5.png'>
6. 打开Xshell,选择新建  
<img src='/image/easy/pre/con6.png'>
7. 在主机一栏中填写刚才复制的IP  
<img src='/image/easy/pre/con7.png'>
8. 在侧边栏选择用户身份验证,用户名输入 `root`,密码输入刚才设置的密码,填写完点击确定  
<img src='/image/easy/pre/con8.png'>
9. 双击刚才新建得到会话进行连接  
<img src='/image/easy/pre/con9.png'>
:::

## 环境准备
::: tip 提示
以下操作全部在 Xshell 中操作
:::
### 更换 apt 源
1. 输入 `vim /etc/apt/sources.list` 回车  
2. 按顺序按下键盘上的 `g` `g` `d` `G`,按下键盘上的 `i` 键  
3. 复制下面的代码,右键粘贴
:::: code-group
::: code-group-item 18.04
```shell
deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
```
:::
::: code-group-item 20.04
```shell
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
```
:::
::::
4. 输入 `:`,输入 `wq` 回车
5. 输入 `apt update` 回车

### Python 3.9
::: tip 提示
输入 `python3 -V` 回车,如果出现 3.9.x 则说明已经安装过python3.9,可以跳过这一步
:::
1. 输入 `apt install -y python3.9`
2. 输入 `ln -s /bin/python3.9 /bin/python3`,回车
3. 输入 `python3 -V`,回车,若出现Python3.9.x,则说明安装成功  
<img src='/image/easy/pre/python4.png'>

### pip3
::: tip 提示
输入 `pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple`,回车  
输入 `pip3 --version` 回车,如果有版本显示,说明已安装过,可以跳过这步
:::
1. 输入 `apt install -y python3-pip`
2. 输入 `pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple`,回车  
3. 输入 `pip3 --version` 回车,如果有版本显示,说明安装成功 
<img src='/image/easy/pre/python5.png'>

### poetry
::: tip 提示
输入 `poetry -V` 回车,若出现版本,说明已安装过,可以跳过这步
:::
1. 输入 `pip3 install poetry`,等待安装完成  
2. 输入 `poetry -V` 回车,若出现版本,说明安装成功  

### Screen
::: tip 提示
输入 `screen -v` 回车,若有版本显示,则说明已经安装过,可以跳过这一步
:::
1. 输入 `apt install -y screen`,等待安装完成
2. 输入 `screen -v`,若有版本显示,则说明安装成功
<img src='/image/easy/pre/screen1.png'>

### MySql
::: tip 提示
使用 `rpm -qa|grep -i mysql` 回车,若有版本显示,则说明已安装过,可以跳过这一步
:::
1. 输入 `wget https://dev.mysql.com/get/mysql-apt-config_0.8.22-1_all.deb` 回车
2. 输入 `dpkg -i mysql-apt-config_0.8.22-1_all.deb` 回车,等待安装完成
3. 如果出现下面的提示,18.04选择bionic,20.04选择focal,没有就不管
<img src="/image/easy/pre/mysql2.png">
4. 安装过程中会出现一个提示界面,通过方向键选择到 `OK` 然后回车
<img src='/image/easy/pre/mysql1.png'>

4. 输入 `apt -y install mysql-server` 回车,等待安装完成

### MySql修改密码并开机自启
1. 输入 `mysql` 回车
2. 输入 `use mysql;` 回车
3. 输入 `update user set plugin='caching_sha2_password' where user='root';`
4. 输入 `flush privileges;` 回车
5. 输入 `exut` 回车

6. 输入 `mysqladmin -u用户名 -p password '你的密码'` 回车 X 2,,密码要牢记
7. 输入 `/etc/init.d/mysql restart` 回车
