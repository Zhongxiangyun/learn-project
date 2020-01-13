module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''//正则  已 /api 开头的替换为 ‘’ 字符串
                }
            }
        }
    }
}