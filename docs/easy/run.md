# 运行
::: warning 注意
在安装完成后,建议先开启go-cqhttp,挂个3~5天,再开启机器人,这样不容易风控
:::
## 运行go-cqhttp
1. 输入 `screen -R gocq` 进入新窗口
2. 输入 `cd /nonebot/go-cqhttp`
3. 输入 `./go-cqhttp`
4. 若出现下面的情况,说明已启动
<img src='/image/easy/run/gocq1.png'>

5. 同时按下键盘的 `Ctrl` , `A` 和 `D`键 将程序挂在后台运行  

## 运行祈愿接口
1. 输入 `screen -R bot` 进入新窗口
2. 输入 `cd /nonebot/GenshinPray`
3. 输入 `dotnet GenshinPray.dll --launch-profile Production --urls http://0.0.0.0:8081`
4. 启动后,同时按下键盘的 `Ctrl` , `A` 和 `D`键 将程序挂在后台运行

## 运行机器人
1. 输入 `screen -R bot` 进入新窗口
2. 输入 `cd /nonebot/bot`
3. 输入 `poetry run python3 bot.py`
4. 在初次运行时会下载 chromiun 内核,下载速度可能很慢,等待下载完成
5. 等待机器人启动  
6. 启动后,同时按下键盘的 `Ctrl` , `A` 和 `D`键 将程序挂在后台运行
