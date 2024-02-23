const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/contact.php',
    createProxyMiddleware({
      target: 'https://thebrajeshsaini.com', // Replace with the actual server URL
      changeOrigin: true,
    })
  );
};
