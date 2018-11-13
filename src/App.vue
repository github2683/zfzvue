<template>
  <v-app>
    <transition name="left-menu">
        <Navigation v-if="show" v-bind:drawerm="drawerm" v-on:show-menu="show = !show "></Navigation>
    </transition>

    <v-layout>
      <v-toolbar app>
        <v-toolbar-side-icon @click.stop="show = !show"></v-toolbar-side-icon>
        <v-toolbar-title>系统名称{{show}}</v-toolbar-title>
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
  .left-menu-enter-active, .left-menu-leave-active {
    transition: margin-left 1s;
  }
  .left-menu-enter /* .fade-leave-active below version 2.1.8 */ {
    margin-left: 0px;
  }
  .left-menu-leave-to{
    margin-left: -300px;
  }
</style>
