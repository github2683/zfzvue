import Vue from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import   './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false;

// Vue.use(Vuetify,{
//   iconfont:'mdi'
// });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
