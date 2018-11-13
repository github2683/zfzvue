<template>
  <v-app>
      <!--左边栏菜单-->
      <Navigation class="leftmenu" v-bind:class="{leftshow:show,lefthide:!show}"  v-on:show-menu="show = !show "></Navigation>

      <!--头条菜单-->
      <v-layout  class="topmenu" v-bind:class="{topshow:!show,tophide:show}">
      <v-toolbar app style="position: absolute;">
        <v-toolbar-side-icon @click.stop="show = !show"></v-toolbar-side-icon>
        <v-toolbar-title>系统菜单{{show?'打开':'关闭'}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>超链接1</v-btn>
          <v-btn flat>超链接2</v-btn>
          <v-btn flat>超链接3</v-btn>
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

// import HelloWorld from './components/HelloWorld'
// import Menu from './components/Menu'
import Navigation from './components/Navigation'



export default {
  name: 'App',
    components: {Navigation},
    data () {
      return {
          drawerm:true,
          show:true
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
    z-index: 10;
    position: absolute;
  }
  .topmenu{
    z-index: 10;
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
