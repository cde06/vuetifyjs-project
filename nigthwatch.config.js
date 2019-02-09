module.exports = {
  test_settings: {
    default: {
      selenium_port: 4444,
      launch_url: 'http://localhost:8086',
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerURL: 'http://localhost:8086'
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['start-fullscreen']
          //args: ['headless', 'no-sandbox', 'disable-gpu']
        }
      }
    }
  }
};
