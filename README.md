# vue-empty-site

vue 空框架，开箱即用

### 版本信息
```text
vue: 2.6.11
ant-design: 1.7.2
vue-router: 3.4.8
axios: 0.21.0
vuex: 3.5.1
```
### package.json
```text
"dependencies": {
    "core-js": "^3.6.5",
    "vue": "^2.6.11",
    "ant-design-vue": "^1.7.2",
    "vue-router": "^3.4.8",
    "axios": "^0.21.0",
    "moment": "^2.29.1",
    "vuex": "^3.5.1"
},
"devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^6.2.2",
    "image-webpack-loader": "^7.0.1",
    "less": "^3.13.0",
    "less-loader": "^7.1.0",
    "mockjs": "^1.1.0",
    "vue-template-compiler": "^2.6.11"
}
```
### 其他
图片压缩使用 `image-webpack-loader` 包，npm安装会有问题，启动时报错：
```text
Syntax Error: Error: Cannot find module 'imagemin-gifsicle'
```
解决办法：可以单独卸载这个包然后用cnpm安装
```text
npm remove image-webpack-loader
cnpm install --save-dev image-webpack-loader
```

### Nginx配置
```shell
server {
    listen       80;
    server_name  localhost;
    root         /home/wwwroot/web;
    index        index.php index.html index.htm;
    
    # 路由设置为 history 需要配置，否则子页刷新404
    location / {
        try_files $uri $uri/ /index.html;
    }

    # access_log  /home/logs/nginx/localhost.log;
}
```

