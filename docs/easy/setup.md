# 安装
## go-cqhttp
1. 输入 `mkdir -p /nonebot/go-cqhttp`
2. 输入 `cd /nonebot/go-cqhttp`
3. 输入 `wget https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_linux_386.tar.gz`,回车,等待下载完成
::: tip 提示
github连不上或者下载太慢? 看[常见问题](#github连接)
:::
4. 输入 `tar -zxvf go-cqhttp_linux_386.tar.gz`,回车
5. 输入 `./go-cqhttp`,回车
6. 输入 `3`,回车
7. 同时按下键盘的 `Ctrl` 和 `C` 键
8. 选择顶部的 `窗口`,选择 `传输新建文件`
9. 在弹出的窗口(后面统称为`传输窗口`)里,按住 `config.yml` 并拖至桌面
10. 在桌面右键 `config.yml` 选择打开方式,选择其他应用,选择VScode勾选 `始终用该应用打开`,点击确定
11. 在 `uin:` 后面填写机器人账号的QQ号,在 `password:` 的 `""` 里面填写机器人账号的密码
12. 划到最下面,将 `universal:` 的后面修改为 `ws://127.0.0.1:25888/onebot/v11/ws`
13. 同时按下键盘上的 `Ctrl` 和 `S` 键
14. 返回桌面,把 `config.yml` 拖到 `传输窗口` 里,点击确定,关闭 `传输窗口`
15. 输入 `screen -R gocq` 回车,输入 `./go-cqhttp` 回车
16. 若出现下图的情况则说明安装成功
<img src='/image/easy/setup/gocq5.png'>

17. 同时按下键盘的 `Ctrl` , `C` 退出程序
18. 同时按下键盘的 `Ctrl` , `A` 和 `D`键 返回主窗口
::: details 具体流程图
10. 在桌面右键 `config.yml` 选择打开方式,选择其他应用,选择VScode勾选 `始终用该应用打开`,点击确定
<img src='/image/easy/setup/gocq1.png'>
<img src='/image/easy/setup/gocq2.png'>

11. 在 `uin:` 后面填写机器人账号的QQ号,在 `password:` 的 `""` 里面填写机器人账号的密码
<img src='/image/easy/setup/gocq3.png'>

12. 划到最下面,将 `universal:` 的后面修改为 `ws://127.0.0.1:25888/onebot/v11/ws`
<img src='/image/easy/setup/gocq4.png'>
:::

## 安装机器人
1. 输入 `apt -y install git` 回车,等待安装完成
2. 输入 `cd /nonebot` 回车
3. 输入 `git clone https://github.com/Shine-Light/Nonebot_Bot_MayaFey.git` 回车
4. 输入 `mv Nonebot_Bot_MayaFey bot` 回车
5. 输入 `cd bot` 回车,输入 `poetry install`,等待安装(可能需要5~20分钟)  
6. 打开 `传输窗口` ,将 `.env.prod` 拖到桌面,关闭传输窗口
