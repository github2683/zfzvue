<template>
  <v-app>
    <!-- <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>导航条 </span>
        <span class="font-weight-light">元素</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">链接</span>
      </v-btn>
    </v-toolbar> -->

    <!-- 
      总入口，还要为各个模块写个一个总vue,如User模块的User.vue
      -->
    <v-content>
      <transition name="slide">
       <router-view></router-view>  
       </transition>   
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data () {
    return {
      //
    }
  }
}
</script>
