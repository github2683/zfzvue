<template>
    <v-layout justify-center>
        <v-flex xs12 sm6>
        <!--form表单-->
        <v-card style="padding: 10px">
            <v-card-title style="padding-left:0px;">
                <h3>表单标题</h3>
            </v-card-title>

                <v-form ref="form" v-model="valid" lazy-validation >
                    <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            :counter="10"
                            label="文本输入框"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="电子邮件地址"
                            required
                    ></v-text-field>
                    <v-select
                            v-model="select"
                            :items="items"
                            :rules="[v => !!v || 'Item is required']"
                            label="下拉选择"
                            required
                    ></v-select>
                    <v-checkbox
                            v-model="checkbox"
                            :rules="[v => !!v || 'You must agree to continue!']"
                            label="Do you agree?"
                            required
                    ></v-checkbox>

                    <v-btn
                            :disabled="!valid"
                            @click="submit"
                    >
                        submit
                    </v-btn>
                    <v-btn @click="clear">clear</v-btn>
                </v-form>


        </v-card>
        </v-flex>
    </v-layout>
</template>

<script>

    import axios from 'axios'

    export default {
        name: "Forms",
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
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4'
            ],
            checkbox: false
        }),

        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                    // Native form submission is not yet supported
                    axios.post('/api/submit', {
                        name: this.name,
                        email: this.email,
                        select: this.select,
                        checkbox: this.checkbox
                    })
                }
            },
            clear () {
                this.$refs.form.reset()
            }
        }
    }
</script>

<style scoped>

</style>
