<template>
    <v-layout justify-center>
        <v-flex xs12 sm6  style="border: 1px solid #abacb1!important; border-radius: 5px;">
            <v-toolbar color="indigo" dark>

                <v-toolbar-title>登录/注册</v-toolbar-title>
                <v-spacer></v-spacer>

            </v-toolbar>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        :counter="10"
                        label="输入用户名"
                        required
                ></v-text-field>

                <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                ></v-text-field>
                <v-select
                        v-model="select"
                        :items="items"
                        :rules="[v => !!v || 'Item is required']"
                        label="选择区域"
                        required
                ></v-select>
                <v-checkbox
                        v-model="checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="同意条款?"
                        required
                ></v-checkbox>

                <v-btn
                        :disabled="!valid"
                        @click="submit"
                >
                    登录
                </v-btn>
                <v-btn @click="clear">清空</v-btn>
            </v-form>
        </v-flex>
    </v-layout>

</template>
<script>
    // import axios from 'axios'

    export default {
        name:'Login',
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            select: null,
            items: [
                '北京',
                '上海',
                '广州',
                '深圳'
            ],
            checkbox: false
        }),

        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                    // Native form submission is not yet supported
                    // axios.post('/api/submit', {
                    //     name: this.name,
                    //     email: this.email,
                    //     select: this.select,
                    //     checkbox: this.checkbox
                    // })
                }
            },
            clear () {
                this.$refs.form.reset()
            }
        }
    }
</script>
