<template>
  <v-card style="margin:auto;margin-top:50px;" width='50%'>
    <v-card-title>登录</v-card-title>
    <v-card-text>


      <form>
        <v-text-field
          v-model="name"
          v-validate="'required|max:10'"
          :counter="10"
          :error-messages="errors.collect('name')"
          label="用户名"
          data-vv-name="name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          v-validate="'required|email'"
          :error-messages="errors.collect('email')"
          label="邮箱"
          data-vv-name="email"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          v-validate="'required'"
          :error-messages="errors.collect('password')"
          label="密码"
          data-vv-name="password"
          required
        ></v-text-field>

        <v-checkbox
          v-model="remember"
          v-validate="'required'"
          :error-messages="errors.collect('remember')"
          value="1"
          label="记住账号密码"
          data-vv-name="remember"
          type="checkbox"
          required
        ></v-checkbox>

        <v-btn @click="submit">登录</v-btn>
        <v-btn @click="clear">重量</v-btn>
      </form>
      </v-card-text>
  </v-card>
</template>

<script>
  /* eslint-disable */
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'
  const axios = require('axios');


  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      name: '',
      email: '',
      password: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      remember: true,
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          password: {
            required: 'password field is required'
          }
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
        axios.get('http://localhost/action/user.json',this)
        .then((response)=>{
          console.log('请求成功')
          console.log(response)
        })
        .catch((error)=>{
          console.log('请求失败')
          console.log(error)
        }).then(()=>{

          console.log(' finally excute ')
        })

        

      },
      clear () {
        this.name = ''
        this.email = ''
        this.password = null
        this.remember = null
        this.$validator.reset()
      }
    }
  }
</script>