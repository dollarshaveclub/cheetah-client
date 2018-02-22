const rp = require('request-promise')
const { base_url } = require('../../config')

module.exports.getMergeSymbols = function (token, viewId) {
  return rp({
    method: 'GET',
    uri: `${base_url}/api/MergeSymbol?viewId=${viewId}`,
    headers: { Authorization: `Bearer ${token}` },
    json: true,
  })
  .catch((response) => {
    console.error(`Error: ${response.error.message}`)
  })
}
