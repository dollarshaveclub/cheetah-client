const { authenticate } = require('./lib/auth')
const { getContentBlock, createContentBlock } = require('./lib/content/content-blocks')
const { getMergeSymbols } = require('./lib/core/merge-symbols')
const { getRootFolder, getFolder } = require('./lib/core/folders')

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
  getRootFolder () { return getRootFolder(this.token) }
  getFolder (folderId) { return getFolder(this.token, folderId) }
}

module.exports = CheetahClient
