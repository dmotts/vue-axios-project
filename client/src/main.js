import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import serverUrl from '../../server-url'

import router from './router'
import store from './store'

axios.defaults.baseURL = serverUrl

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
