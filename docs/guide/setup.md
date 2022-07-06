# 安装
## 环境配置
::: tip 提示
系统:Windows 10 / Window 11 / Ubuntu 18.04 / Ubuntu 20.04 / Mac(没试过)  
python >= 3.9  
poetry >= 1.1.13  
mysql >= 5.6  
以前安装过环境的可以跳过  
测试环境: Windows10 Mysql8.0 python3.9 poetry1.1.13
:::
### 安装微软运行库
#### Windows
1. 在[官网](https://visualstudio.microsoft.com/zh-hans/downloads/)下载软件并打开(社区版本即可)  
2. 勾选C++桌面开发,可选勾选前两个,点击安装,等待安装完成  
<img src="/image/setup/setup/c++14.0.png">
3. 点击重启,安装完成  

#### Linux
Linux无需该步骤

### 安装Python和pip
#### Window
1. 在[Python官网](https://www.python.org/downloads/)下载 python3.9.x 的安装程序  
<img src='/image/setup/setup/python_install.png'>
2. 安装程序,安装时勾选 Add to Path  
<img src='/image/setup/setup/python_install1.png'>
3. 安装后打开cmd,输入 `python -V` 回车,若显示版本为3.9.x则 Python 安装成功  

#### Linux
方法很多,自行百度

### 安装poetry
1. 在命令行输入 `pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/` 回车  
2. 输入 `pip install poetry` 回车,等待安装完成  
3. 输入 `poetry -V` 回车,若显示版本则 poetry 安装成功  

### 安装mysql
#### Windows
1. 下载[XAMPP](https://www.apachefriends.org/zh_cn/index.html),打开安装程序,只需勾选 Mysql 即可,其余自行选择,等待安装完成  
2. 启动Mysql
3. 选择Mysql栏的 Admin 进入管理面板,新建数据库,数据库名填mayafey,排序规则使用 utf8mb4_bin
4. 在侧边栏点击刚才创建的数据库
5. 选择 权限 选项卡,新建一个账户,记好账号和密码
#### Linux
方法很多,自行百度

## 安装并配置go-cqhttp
### Windows
1. 新建一个文件夹用于存放程序  
2. 根据自己的系统下载最新版的[go-cqhttp](https://github.com/Mrs4s/go-cqhttp/releases/tag/v1.0.0-rc1),不知道现在那个版本的请参考[版本说明](https://docs.go-cqhttp.org/guide/quick_start.html#%E4%B8%8B%E8%BD%BD),这里以Windows10系统演示(Github 打不开的可以自行百度 github hosts加速)  
3. 打开 `go-cqhttp.exe`,一路确定  
4. 打开 `go-cqhttp.bat`, 输入 `3`,然后回车  
5. 打开 `config.yml` (使用记事本,vscode等打开),修改`uin`和`password`为机器人的账号和密码(不建议使用自己的主账号)  
6. 修改 `universal` 为 `ws://127.0.0.1:25888/onebot/v11/ws`, 其余项目根据自己需要修改  
7. 打开 `go-cqhttp.bat`,可能会要求扫码或验证码,若出现下图的提示说明安装成功  
<img src='/image/setup/setup/go_success.png'>

### Linux
1. `wget https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc2/go-cqhttp_linux_amd64.tar.gz`
2. `tar -xvf go-cqhttp_linux_amd64.tar.gz`
3. `cd go-cqhttp_linux_amd64`
4. `vi config.yml`,按i开始修改,将 `universal` 修改为 `ws://127.0.0.1:25888/onebot/v11/ws`,修改`uin`和`password`为机器人的账号和密码,修改完输入 `:wq`,回车退出
5. `./go-cqhttp`,可能会要求扫码或验证码,若出现下图的提示说明安装成功  
<img src='/image/setup/setup/go_success.png'>

## 安装机器人
### Windows
1. 前往[Github](https://github.com/Shine-Light/Nonebot_Bot_MayaFey)下载最新版本的压缩包并解压  
2. 在解压后的文件夹内打开cmd,输入 `poetry install`,等待安装完成,安装期间请不要关闭程序,根据机器配置不同可能需要5~20分钟  
3. 安装完成
### Linux
1. 输入 `git clone https://github.com/Shine-Light/Nonebot_Bot_MayaFey.git` 回车
2. 进入目录,`poetry install`,等待安装完成,安装期间请不要关闭程序,根据机器配置不同可能需要5~20分钟
3. 安装完成
