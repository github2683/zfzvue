<template>
    <!--<v-layout wrap style="height: 200px;" >-->
        <!--<v-container>-->
            <!--<v-layout justify-center>-->
                <!--<v-btn color="pink" dark  @click.stop="drawer = !drawer" > 显示/隐藏 </v-btn>-->
            <!--</v-layout>-->
        <!--</v-container>-->

        <v-navigation-drawer v-bind:class="{'menu-hide':mini}"
                v-model="drawer"
                absolute
                dark
        >
            <!--temporary  蒙版 点击则收起  -->
            <v-list class="pa-1">
                <!--<v-list-tile v-if="mini" @click.stop="mini = !mini">-->
                    <!--<v-list-tile-action>-->
                        <!--<v-icon>chevron_right</v-icon>-->
                    <!--</v-list-tile-action>-->
                <!--</v-list-tile>-->

                <v-list-tile avatar tag="div">
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>用户名</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn icon  v-on:click="$emit('show-menu')">
                            <v-icon>chevron_left</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>

            <v-list class="pt-0" dense>
                <v-divider light></v-divider>

                <v-list-tile
                        v-for="item in items"
                        :key="item.title"
                        @click=""
                >
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    <!--</v-layout>-->
</template>

<script>
    export default {
        props:['drawerm'],
        name: "navigation-drawer",
        data () {
            return {
                drawer: this.drawerm,
                items: [
                    { title: 'Home', icon: 'dashboard' },
                    { title: 'About', icon: 'question_answer' }
                ],
                mini: false,
                right: null
            }
        }

    }
</script>

<style scoped>
    .menu{
        transition-property: margin-left; /* 要过渡的属性 */
        transition-duration: .5s;/* 过渡持续时间 */
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
        transition-timing-function: ease-out;/*  过渡类型 */
        transition-delay: .1s;/* 延迟执行时间  */
    }
    .menu-hide{
        margin-left: -300px;
    }
</style>
