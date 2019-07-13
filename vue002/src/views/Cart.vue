<template>
  <div class="home">
    {{msg}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'cart',
  data:function(){
      return {
        msg:'this is cart page'
      }
  },
  components: {
    HelloWorld
  }
}
</script>
