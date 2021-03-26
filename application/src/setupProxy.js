const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://localhost:8050' ,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
        "/api": "/authentication/login/nickname"
    },
    // cookieDomainRewrite: "http://localhost:3000"
}));
};