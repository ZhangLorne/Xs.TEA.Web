let root='/api'
let axios=require('axios')
function apiAxios (method, url, params, success, failure) {
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  })
    .then(function (res) {
      if (res.status === 200) {
        if (success) {
          success(res.data)
        }
      } else {
        if (failure) {
          failure(res.data)
        } else {
        }
      }
    })
    // .catch(function (err) {
    //   let res = err.response
    //   if (err) {
    //     window.alert('api error, HTTP code: ' + res.status)
    //   }
    // })
}
var EipPort='http://192.168.9.200:8080/Xs.EIP.Api';
var TeaPort='http://192.168.9.200:8080/Xs.TEA.Api';
export default {
  //请求方式
  get: (url, params, success, failure)=> {
    return apiAxios('GET', url, params, success, failure)
  },
  post: (url, params, success, failure)=>{
    return apiAxios('POST', url, params, success, failure)
  },
  put: (url, params, success, failure)=>{
    return apiAxios('PUT', url, params, success, failure)
  },
  delete:(url, params, success, failure)=>{
    return apiAxios('DELETE', url, params, success, failure)
  },
  login:function (params,success) {
    this.post(EipPort+'/sso/login',params,success)
  },
  getValidCode:function (params,success) {
    this.post(EipPort+'/sso/captcha/get',params,success)
  }
}
