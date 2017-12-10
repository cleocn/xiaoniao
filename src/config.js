/*
备注
*/
// const urlApi = 'https://api.4dz.club:3000/'
// const urlApi = 'http://service-ospailfo-1255547872.ap-guangzhou.apigateway.myqcloud.com/'
// const urlApi = 'http://139.199.9.175:3000'
// const urlApi = 'http://localhost:3000'
const urlApi = 'https://api.hnn7.com'
const cdnDomain = 'https://cdn.hnn7.com'

module.exports = {
  urlBase: urlApi,
  cdnDomain: cdnDomain,
  apiList: {
    upload: urlApi + '/upload',
    recommended: {
      get: urlApi + '/recommended',
      save: urlApi + '/recommended'
    },
    user: {
      wxlogin: urlApi + '/onLogin'
    }
  }
}
