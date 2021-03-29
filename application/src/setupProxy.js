const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://localhost:8050' ,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
        "^/api": ''
    },
    // cookieDomainRewrite: "http://localhost:3000"
}));
};