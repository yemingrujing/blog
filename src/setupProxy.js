const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/demo', { 
        "target": "http://localhost:3003",
        "ws": true,
        "changeOrigin": true,
        "secure": false 
        })
    ),
    app.use(proxy('/article', { 
        "target": "http://localhost:3003",
        "ws": true,
        "changeOrigin": true,
        "secure": false 
        })
    ),
    app.use(proxy('/news', { 
        "target": "http://localhost:3003",
        "ws": true,
        "changeOrigin": true,
        "secure": false 
        })
    )
}