# 安装
## go-cqhttp
1. 输入 `mkdir -p /nonebot/go-cqhttp`
2. 输入 `cd /nonebot/go-cqhttp`
3. 输入 `wget https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_linux_386.tar.gz`,回车,等待下载完成
::: tip 提示
github连不上或者下载太慢? 看[常见问题](/problem/README.md#github速度慢)
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

## 安装原神祈愿API(可选)
::: tip 提示
如果不需要这个功能可以跳过这一步
:::
1. 在 [https://github.com/GardenHamster/GenshinPray/releases](https://github.com/GardenHamster/GenshinPray/releases) 中找到最新版本的压缩包,右键复制链接,替换下方的 `{releases}` 
<img src="/image/easy/setup/GenshinPray2.png">

2. 顺序将以下代码复制粘贴回车运行  
```shell
cd /nonebot
git clone https://github.com/GardenHamster/GenshinPray.git
cd GenshinPray/GenshinPray
mv PrayMaterial /nonebot/GenshinPray/PrayMaterial
mv Sql/initData.sql /nonebot/GenshinPray/initData.sql
mv Fonts/zh-cn.ttf /usr/share/fonts
fc-cache
cd ..
rm -rf GenshinPray
cd ..
wget {releases}
unzip GenshinPray.zip
rm -f GenshinPray.zip
wget https://dot.net/v1/dotnet-install.sh
sudo bash dotnet-install.sh -c 6.0 --runtime aspnetcore
ln -s $HOME/.dotnet/dotnet /usr/bin/dotnet
cd GenshinPray
apt install -y libgdiplus
vim appsettings.Production.json
```
3. 依次按下 `g` `g` `d` `G`,按下 `i` 键  
4. 将以下代码的 `{password}` 替换为你的数据库密码,复制后右键粘贴到控制台
```json
{
  "ConnectionString": "Data Source=127.0.0.1;port=3306;Initial Catalog=genshinpray;uid=root;pwd={password};CharSet=utf8mb4;SslMode=None;", //数据库链接字符串
  "PrayImgSavePath": "/nonebot/bot/resource/img/GenshinPray", //祈愿结果图片保存目录
  "PrayMaterialSavePath": "/nonebot/GenshinPray/PrayMaterial", //祈愿素材图片目录
  "PrayImgHttpUrl": "{imgPath}" //祈愿接口中返回的图片地址
}
```
5. 按下 `:` `w` `q` 回车保存  
6. 输入 `dotnet GenshinPray.dll --launch-profile Production --urls http://0.0.0.0:8081`,回车,如果出现下面的提示,说明安装正常 
<img src="/image/easy/setup/GenshinPray.png">

7. 按下 `Ctrl` + `C` 退出程序  
8. 运行 `mysql -uroot -p你的密码 genshinpray<initData.sql`
