'use strict'
const name = 'my vue example' // page title
// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
const port = 8888 // dev port

// try git commit
// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/*.do': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: 'http://foo:8080'
      }
    }
  }
}
