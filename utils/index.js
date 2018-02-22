module.exports.formEncode = (data) => {
  return Object.keys(data).map(key => `${key}=${data[key]}`).join('&')
}
