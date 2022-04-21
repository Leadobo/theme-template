const mix = require('laravel-mix')

class LeadoboExtension {
  name() {
    return 'leadobo-extension'
  }

  register(name) {
    this.name = name
  }

  webpackConfig(webpackConfig) {
    webpackConfig.externals = {
      vue: 'Vue',
    }

    webpackConfig.output = {
      uniqueName: this.name,
    }
  }
}

mix.extend('leadobo', new LeadoboExtension())
