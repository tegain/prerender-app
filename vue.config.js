const prerender = require('prerender-node')

module.exports = {
  devServer: {
    port: 9001,
    before (app) {
      // app is the express instance that the dev server uses
      app.use(prerender
        .set('prerenderServiceUrl', 'http://localhost:3000/')
        .set('prerenderToken', 'cFQvkUXXTTQDmz5gXNIq')
      )
    }
  }
}
