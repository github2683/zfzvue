<template>
  <div id="login-form"  class="login">
      {{ msg }}
      <form >
        <label>用户名</label>
        <input name="username" v-model="username"/> {{username}}
        <br/>
        <label>密码</label>
        <input name="password" type="password" v-model="password"/>{{password}}
        <br/>
        <button >登录</button>
      </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  props: {
    msg: String
  },
    data:function () {
        return {
            username:'',
            password:''
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
