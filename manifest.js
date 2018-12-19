module.exports = {
  version: '1.0.0',
  init: function (pluginContext) {
     const condition = require('./conditions/header-match.js')
     pluginContext.registerCondition(condition)
  }
}