const { authenticate } = require('./lib/auth')
const { getContentBlock, createContentBlock } = require('./lib/content-blocks')
const { getMergeSymbols } = require('./lib/merge-symbols')

class CheetahClient {
  constructor (options = {}) {
    this.options = options
  }

  authenticate ({ username, password, client_id }) {
    return authenticate({ username, password, client_id })
      .then(token => { this.token = token })
  }

  getContentBlock (objRefId) { return getContentBlock(this.token, objRefId) }
  createContentBlock (options) { return createContentBlock(this.token, options) }
  getMergeSymbols (viewId) { return getMergeSymbols(this.token, viewId) }
}

module.exports = CheetahClient
