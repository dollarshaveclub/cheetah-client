const rp = require('request-promise')
const { formEncode } = require('../utils')
const { base_url } = require('../config')

module.exports.authenticate = ({ username, password, client_id }) => {
  return rp({
    method: 'POST',
    uri: `${base_url}/authorization/oAuth2/Token`,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: formEncode({
      grant_type: 'password',
      client_id,
      username,
      password,
    }),
  }).then(response => JSON.parse(response).access_token)
}
