const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const isProduction = process.env.NODE_ENV === 'production';

const cdn = {
    // 所有环境
    all: {
        css: [
            'https://cdn.jsdelivr.net/npm/ant-design-vue@1.7.2/dist/antd.min.css'
        ],
        js: []
    },
    // 生产环境
    build: {
        css: [],
        js: [
            'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js',
            'https://cdn.jsdelivr.net/npm/vue-router@3.4.6/dist/vue-router.min.js',
            'https://cdn.jsdelivr.net/npm/axios@0.20.0/dist/axios.min.js',
            'https://cdn.jsdelivr.net/npm/vuex@3.5.1/dist/vuex.min.js',
            'https://cdn.jsdelivr.net/npm/ant-design-vue@1.7.2/dist/antd.min.js',
        ]
    }
}

const externals = {
    'vue': 'Vue',
    'vuex': 'Vuex',
    'axios': 'axios',
    'vue-router': 'VueRouter',
    'ant-design-vue': 'antd',
    'mockjs': 'Mock',
}

module.exports = {
    // 正式环境关闭source map
    productionSourceMap: !isProduction,
    // 正式环境关闭eslint
    lintOnSave: !isProduction,
    // 函数式组件
    runtimeCompiler: true,
    // 资源路径
    publicPath: isProduction ? '/' : '/',

    devServer: {
        open: false, // 自动启动浏览器
        port: 8100,  // 开发服务器端口
        // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:30001/', // 对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {  // 重定向
                    '^/api': '/',
                },
            },
        }
    },

    configureWebpack: config => {
        if (isProduction) {
            config.externals = externals;
        }

    },

    chainWebpack: config => {
        // 压缩图片
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif)(\?.*)?$/)
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({bypassOnDebug: true})

        // webpack 会默认给commonChunk打进chunk-vendors，所以需要对webpack的配置进行delete
        config.optimization.delete('splitChunks')

        config.plugin('html').tap(args => {
            if (isProduction) {
                cdn.all.js = cdn.all.js.concat(cdn.build.js)
                cdn.all.css = cdn.all.css.concat(cdn.build.css)
            }
            args[0].cdn = cdn.all
            args[0].title = '举杯邀月'
            return args
        })
        config.resolve.alias.set("@", resolve("src"));
    },

    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                },
            },
        },
    },
}
