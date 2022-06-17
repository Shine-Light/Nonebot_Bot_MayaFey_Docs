# 运行
## Windows
1. 进入go-cqhttp所在目录,打开 `go-cqhttp.bat`
2. 在机器人所在目录,打开 `start.bat`  
3. 开始运行

## Linux  
1. 进入go-cqhttp所在目录,输入 `screen -R gocq`
2. 输入 `./go-cqhttp`
3. 等待运行,运行后按 Ctrl + A + D 退出窗口
4. 进入机器人目录,输入 `screen -R bot`
5. 输入 `poetry run python3 bot.py`
6. 等待运行,运行后按 Ctrl + A + D 退出窗口,想回到机器人终端输入 `screen -R bot` 即可
