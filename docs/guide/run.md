# 运行
::: warning 注意
在安装完成后,建议先开启go-cqhttp,挂个3~5天,再开启机器人,这样不容易风控
:::
## Windows
1. 进入go-cqhttp所在目录,打开 `go-cqhttp.bat`
2. 在机器人所在目录,打开 `start.bat`  
3. 在 原神祈愿API 目录打开cmd,运行 `dotnet GenshinPray.dll --launch-profile Production --urls http://0.0.0.0:8081`,不需要这个功能可以跳过
4. 开始运行

## Linux  
1. 进入go-cqhttp所在目录,输入 `screen -R gocq`
2. 输入 `./go-cqhttp`
3. 等待运行,运行后按 Ctrl + A + D 退出窗口
4. 进入机器人目录,输入 `screen -R bot`
5. 输入 `poetry run python3 bot.py`
6. 进入 原神祈愿API 目录,`screen -R bot`
7. 运行 `dotnet GenshinPray.dll --launch-profile Production --urls http://0.0.0.0:8081`,不需要这个功能可以跳过
8. 等待运行,运行后按 Ctrl + A + D 退出窗口,想回到机器人终端输入 `screen -R bot` 即可
