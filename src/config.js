/*
备注
city: 城市（在程序载入时获取一次）
count: 返回结果数量
baiduAK: 百度地图AK
apiList: api列表
hotKeyword: 搜索页热门关键词关键词
hotTag: 搜索页热门类型
bannerList: 首页（热映页）轮播图列表列表
skinList: “我的”页面背景列表
shakeSound: 摇一摇音效地址（带url表示远程地址）
shakeWelcomeImg: 摇一摇欢迎图片
*/
// const urlApi = 'https://api.4dz.club:3000/'
// const urlApi = 'http://service-ospailfo-1255547872.ap-guangzhou.apigateway.myqcloud.com/'
// const urlApi = 'http://139.199.9.175:3000'
const urlApi = 'http://localhost:3000'

module.exports = {
  city: '',
  count: 20,
  baiduAK: 'Y1R5guY8Y2GNRdDpLz7SUeM3QgADAXec',
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
