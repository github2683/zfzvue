<template>
  <div class="user">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'user',
  data:function(){
      return {
        msg:'用户模块'
      }
  },
  components: {
    
  }
}
</script>
