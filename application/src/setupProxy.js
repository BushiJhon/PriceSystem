const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://121.40.67.221:8050' ,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
        "^/api": ''
        },
    }));
    app.use(createProxyMiddleware('/local', {
        target: 'http://localhost:8010' ,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
        "^/local": ''
        },
    }));
};