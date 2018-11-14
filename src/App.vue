<template>
  <v-app>
      <!--左边栏菜单-->
      <Navigation class="leftmenu" v-bind:class="{leftshow:show,lefthide:!show}"  v-on:show-menu="show = !show "></Navigation>


      <v-layout  class="topmenu" v-bind:class="{topshow:!show,tophide:show}">
          <!--头条菜单-->
          <v-toolbar app style="position: absolute;">
            <v-toolbar-side-icon @click.stop="show = !show"></v-toolbar-side-icon>
            <v-toolbar-title>系统菜单[{{show?'打开':'关闭'}}]</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">





                <TopMenu v-bind:menu="topMenu[0]"></TopMenu>
                <TopMenu v-bind:menu="topMenu[1]"></TopMenu>
                <TopMenu v-bind:menu="topMenu[2]"></TopMenu>

            </v-toolbar-items>
          </v-toolbar>

          <v-content>
            <v-container fluid>
              <router-view></router-view>
            </v-container>
          </v-content>
    </v-layout>

  </v-app>

</template>




<script>

import Navigation from './components/Navigation'
import TopMenu from './components/TopMenu'


export default {
  name: 'App',
    components: {TopMenu, Navigation},
    data () {
      return {
          drawerm:true,
          show:true,
          topMenu:[
              {
                  name:'头条菜单1',
                  items:[
                      { title: '子菜单1' },
                      { title: '子菜单2' },
                      { title: '子菜单3' },
                      { title: '子菜单4' }
                  ]
              },
              {
                  name:'头条菜单2',
                  items:[
                      { title: '子菜单21' },
                      { title: '子菜单22' },
                      { title: '子菜单23' },
                      { title: '子菜单24' }
                  ]
              },
              {
                  name:'头条菜单3',
                  items:[
                      { title: '子菜单31' },
                      { title: '子菜单32' },
                      { title: '子菜单33' },
                      { title: '子菜单34' }
                  ]
              }

          ]

      }
  }

}
</script>

<style>
  .leftmenu-enter-active, .leftmenu-leave-active {
    transition: margin-left 1s;
  }
  .leftmenu-enter /* .fade-leave-active below version 2.1.8 */ {
    margin-left: 0px;
  }
  .leftmenu-leave-to{
    margin-left: -300px;
  }
/*
linear：
线性过渡。等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0)
ease：
平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)
ease-in：
由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)
ease-out：
由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0)
ease-in-out：
由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
step-start：
等同于 steps(1, start)
step-end：
等同于 steps(1, end)
steps(<integer>[, [ start | end ] ]?)：
接受两个参数的步进函数。第一个参数必须为正整数，指定函数的步数。第二个参数取值可以是start或end，指定每一步的值发生变化的时间点。第二个参数是可选的，默认值为end。
cubic-bezier(<number>, <number>, <number>, <number>)：
特定的贝塞尔曲线类型，4个数值需在[0, 1]区间内
*/
  .leftmenu,.topmenu,.v-navigation-drawer[data-booted="true"]{

    transition-property: margin-left,width;

    transition-duration: 0.5s;
    transition-timing-function: ease-out ;
    transition-delay: 10ms;
    z-index: 2;
    position: absolute;
  }
  .topmenu{
    z-index: 2;
    position: absolute;
  }
  .leftshow{
    margin-left: 0px;
  }
  .lefthide{
    margin-left: -300px;
  }

  .topshow{
    margin-left: 0px;
    width: 100%;
  }
  .tophide{
    margin-left: 300px;
    width: calc(100% - 300px);
  }
</style>
