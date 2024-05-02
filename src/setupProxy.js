const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(['/api/login', '/api/register'],
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};