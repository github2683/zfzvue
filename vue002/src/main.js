import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
const axios = require('axios');

Vue.config.productionTip = false


// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  window.console.log('数据请求成功前....')
  return config;
}, function (error) {
  window.console.log('数据请求失败前....')
  // Do something with request error
  
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  window.console.log('数据响应成功前....')
  return response;
}, function (error) {
  // Do something with response error
  window.console.log('数据响应失败前....')
  return Promise.reject(error);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
