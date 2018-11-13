import Vue from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css'
//https://fonts.loli.net/css?family=Roboto:100,300,400,500,700,900|Material+Icons    国内字体
// import   './plugins/vuetify'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'babel-polyfill'


Vue.config.productionTip = false;
Vue.use(Vuetify)

// Vue.use(autoScroll)
// sync(store, router)

// Vue.use(Vuetify,{
//   iconfont:'mdi'
// });
new Vue({  router:router,store:store, render: h => h(App)}).$mount('#app')

// new Vue({el: '#app', router, store,  render: h => h('v-content')})
