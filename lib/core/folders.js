const rp = require('request-promise')
const { base_url } = require('../../config')

module.exports.getRootFolder = function (token) {
  return rp({
    method: 'GET',
    uri: `${base_url}/api/HostedItem`,
    headers: { Authorization: `Bearer ${token}` },
    json: true,
  })
  .catch((response) => {
    console.error(response)
  })
}

module.exports.getFolder = function (token, folderId) {
  return rp({
    method: 'GET',
    uri: `${base_url}/api/HostedItem?id=${folderId}`,
    headers: { Authorization: `Bearer ${token}` },
    json: true,
  })
  .catch((response) => {
    console.error(response)
  })
}
