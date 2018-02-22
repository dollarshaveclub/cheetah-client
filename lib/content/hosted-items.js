const rp = require('request-promise')
const { base_url } = require('../../config')

module.exports.getHostedItems = function (token, folderId) {
  const query = folderId ? `?id=${folderId}` : ''
  return rp({
    method: 'GET',
    uri: `${base_url}/api/HostedItem${query}`,
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
