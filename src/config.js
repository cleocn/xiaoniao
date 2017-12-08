/*
备注
*/
// const urlApi = 'https://api.4dz.club:3000/'
// const urlApi = 'http://service-ospailfo-1255547872.ap-guangzhou.apigateway.myqcloud.com/'
const urlApi = 'http://139.199.9.175:3000'
// const urlApi = 'http://localhost:3000'

module.exports = {
  urlBase: urlApi,
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
