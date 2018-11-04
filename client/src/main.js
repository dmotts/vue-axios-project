import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import serverUrl from '../../server-url'

import router from './router'
import store from './store'

axios.defaults.baseURL = serverUrl
axios.defaults.headers.common['Authorization'] = 'g4tgds'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})

const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
