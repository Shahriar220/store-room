const proxy = require('http-proxy-middleware')

module.exports = function(App) {
    App.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
    App.use(proxy('/api/current_user', { target: 'http://localhost:5000' }));
}