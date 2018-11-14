<template>
    <v-menu open-on-hover bottom offset-y>
        <v-btn slot="activator" flat>{{menu.name}}</v-btn>
        <v-list>
            <v-list-tile
                    v-for="(item, index) in menu.items"
                    :key="index"
                    @click=""
            >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-menu>
</template>

<script>
    export default {
        name: "top-menu",
        props:['menu'],
        data: () => ({
            // items:[
            //     { title: '子菜单1' },
            //     { title: '子菜单2' },
            //     { title: '子菜单3' },
            //     { title: '子菜单4' }
            // ]
        })
    }
</script>

<style scoped>

</style>
