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
  return Promise.reject(error)
})

Api.interceptors.request.use(function (req) {
  if(req.headers['access-token'] && req.headers['access-token'] != '') return req

  let headers;
  if(Cookie.get('@api-data')) {
    headers = JSON.parse(Cookie.get('@api-data'))
  }

  if(!headers) return req

  Api.defaults.headers = headers
  return req
}, function (error) {
  return Promise.reject(error)
})

export default Api