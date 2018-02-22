const rp = require('request-promise')
const { base_url } = require('../config')

module.exports.getContentBlock = function (token, objRefId) {
  return rp({
    method: 'GET',
    uri: `${base_url}/api/ContentBlock?id=${objRefId}`,
    headers: { Authorization: `Bearer ${token}` },
    json: true,
  })
  .catch((response) => {
    console.error(`Error: ${response.error.message}`)
  })
}

module.exports.createContentBlock = function (token, options) {
  const body = {
    cust_id: options.cust_id,
    entity_id: options.entity_id,
    type_id: 'PARAGRAPH',
    contBodies: [{
      type_id: options.type,
      usage_mask: 'ALL_EMAIL_STYLE_USAGE_MASK',
      body: options.body,
    }],
    contModelProps: [],
    contParts: [],
    obj: {
      display_name: options.name,
      parent_obj_id: folderId,
    }
  }

  return rp({
    method: 'POST',
    uri: `${base_url}/api/ContentBlock`,
    body,
    headers: { Authorization: `Bearer ${token}` },
    json: true,
  })
  .catch((response) => console.error(`${body.obj.display_name}: ${response.error.message}`))
}
