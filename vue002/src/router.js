import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)


let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      beforeEnter: (to, from, next) => {
        // ...
        window.console.log('进入 about 页面 ')
        next();
      }
    },
    {
      path:'/user/:model',
      name:'user',
      component:()=> import('./views/User.vue'),
      beforeEnter:(to,from,next) => {
        window.console.log('进入 user 页面 ')
        next();
      },
      children:[
        {
          path:'registry',
          // name:'user',
          component:()=>import('./views/manager/user/Registry.vue'),
          beforeEnter:(to,from,next)=>{
            window.console.log('进入 user / registry 页面 ')
            next();
          }
        },
        {
          path:'login',
          // name:'user',
          component:()=>import('./views/manager/user/Login.vue'),
          beforeEnter:(to,from,next)=>{
            window.console.log('进入 user / login 页面 ')
            next();
          }
        }
      ]
    }
  ]
})

/*
导航被触发。
在失活的组件里调用离开守卫。
调用全局的 beforeEach 守卫。
在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
在路由配置里调用 beforeEnter。
解析异步路由组件。
在被激活的组件里调用 beforeRouteEnter。
调用全局的 beforeResolve 守卫 (2.5+)。
导航被确认。
调用全局的 afterEach 钩子。
触发 DOM 更新。
用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
*/




/**
 *  beforeEach
to: Route: 即将要进入的目标 路由对象

from: Route: 当前导航正要离开的路由

next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。

  next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。

  next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。

  next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。

确保要调用 next 方法，否则钩子就不会被 resolved。
 */
router.beforeEach((to,from,next) => {
    //全局路由前置拦截
    window.console.log('全局路由前置拦截');
    next();
})

// router.beforeResolve()

router.afterEach((to,from) => {
  //全局路由前置拦截
  window.console.log('全局路由后置拦截');
  
})


//组件内还可以再控制  如下：
/*
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
*/

export default router