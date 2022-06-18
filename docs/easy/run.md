# 运行
## 运行go-cqhttp
1. 输入 `screen -R gocq` 进入新窗口
2. 输入 `cd /nonebot/go-cqhttp`
3. 输入 `./go-cqhttp`
4. 若出现下面的情况,说明已启动
<img src='/image/easy/run/gocq1.png'>

5. 同时按下键盘的 `Ctrl` , `A` 和 `D`键 将程序挂在后台运行  

## 运行机器人
1. 输入 `screen -R bot` 进入新窗口
2. 输入 `cd /nonebot/bot`
3. 输入 `poetry run python3 bot.py`
4. 在初次运行时会下载 chromiun 内核,下载速度可能很慢,等待下载完成
::: tip 提示
libatk-1.0.so.0 libatk-bridge-2.0.so.0 libcups.so.2 libxkbcommon.so.0 libXcomposite.so.1 libXdamage.so.1 libXext.so.6 libXfixes.so.3 libXrandr.so.2 libgbm.so.1 libpango-1.0.so.0 libcairo.so.2 libatspi.so.0
:::
5. 等待机器人启动  
6. 启动后,同时按下键盘的 `Ctrl` , `A` 和 `D`键 将程序挂在后台运行
7. 将机器人拉入群,在群内发送一条信息 `/初始化`
8. 当机器人回复 `初始化成功` 时,机器人开始正常运行
