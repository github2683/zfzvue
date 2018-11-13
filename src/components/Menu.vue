<template>
    <v-treeview :items="items"></v-treeview>
</template>

<script>
    export default {
        name: "Menu",
        data:function () {
            return {
                items:[
                    {
                        name:'菜单1',
                        children:[
                            {
                                name:'一级子菜单1'
                            },
                            {
                                name:'一级子菜单2'
                            },
                            {
                                name:'一级子菜单3'
                            }
                        ]
                    },
                    {
                        name:'菜单2',
                        children:[
                            {
                                name:'一级子菜单1'
                            },
                            {
                                name:'一级子菜单2'
                            },
                            {
                                name:'一级子菜单3'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
