---
sidebar: auto
sidebarDepth: 3
---
# mayafey_webui
真宵Bot的Web管理面板, 以 [v3-admin-vite](https://github.com/un-pany/v3-admin-vite/) 为模板制作

## 注意事项
机器人版本需在 `0.7.0` 及以上  
机器人配置中 `HOST` 需为 `0.0.0.0`  
若需将面板部署至公网, 建议先将机器人目录中 `Api/api/utils.py` 的 `secret_key` 换成新的随机字符串  
账号密码可在机器人目录下 `config/api/config_general.json` 中修改

## 安装nodejs
前往 [nodejs官网](https://nodejs.org/zh-cn/download) 下载并安装

## 安装 pnpm
```
npm i -g pnpm
```

## 安装依赖
在webui目录打开命令行
```
pnpm i
```

## 开发环境
开发环境启动较简单,但会占用一定资源

### 运行
```
pnpm dev
```

## 生产环境
生产环境需自行部署, 如使用 [nginx](http://nginx.org/en/download.html)

### 打包
```
pnpm build:prod
```

### 部署
打包后将 `dist` 文件夹复制至nginx目录

### 配置反向代理
```
location / {
        root dist;
        index index.html;
    }

location /api {
  proxy_pass http://127.0.0.1:25888;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header REMOTE-HOST $remote_addr;
  proxy_set_header Upgrade $http_upgrade;
}

location = /api/version {
  proxy_pass https://raw.fastgit.org/Shine-Light/mayafey_webui/main/package.json;
}
```
将此配置复制至 `nginx目录/conf/nginx.conf` 的 `server` 中,根据自己的配置修改 `proxy_pass` 即可

### 运行
启动 nginx 并访问
