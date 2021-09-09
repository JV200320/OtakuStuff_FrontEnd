import Cookie from 'js-cookie'
import axios from "axios";
const Api = axios.create({baseURL: "http://localhost:3000"})

Api.interceptors.response.use(function (res) {
  if(!res['headers']['access-token'] || res['headers']['access-token'] == '') return res
  const info = {
    'access-token': res['headers']['access-token'],
    client: res['headers']['client'],
    expiry: res['headers']['expiry'],
    uid: res['headers']['uid'],
    'token-type': res['headers']['token-type']
  }

  Cookie.set('@api-data', JSON.stringify(info))
  Api.defaults.headers = info
  return res
}, function (error) {
  console.log(error)
})

// Api.interceptors.request.use(function (res) {
//   if(res.headers['access-token'] && res.headers['access-token'] != '') return res
//   console.log(res)

//   let headers;
//   if(Cookie.get('@api-data')) {
//     headers = JSON.parse(Cookie.get('@api-data'))
//   }

//   Api.defaults.headers = headers
//   return res
// }, function (error) {
//   console.log(error)
// })

export default Api