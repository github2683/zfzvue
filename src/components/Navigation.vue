<template>
    <v-navigation-drawer
            stateless
            value="true"
    >
        <v-list>
            <v-list-tile style="height: 56px;">
                <v-list-tile-action v-on:click="$emit('show-menu')">
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>首页</v-list-tile-title>
                <!--<v-list-tile-action v-on:click="$emit('show-menu')">-->
                    <!--<v-icon style="margin-left:40px;cursor:pointer;">arrow_back_ios</v-icon>-->
                <!--</v-list-tile-action>-->
            </v-list-tile>

            <v-list-group
                    prepend-icon="account_circle"
                    value="true"
            >
                <v-list-tile slot="activator">
                    <v-list-tile-title>用户模块</v-list-tile-title>
                </v-list-tile>

                <v-list-group
                        no-action
                        sub-group
                        value="true"
                >
                    <v-list-tile slot="activator">
                        <v-list-tile-title>配置管理</v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile
                            v-for="(admin, i) in admins"
                            :key="i"
                            @click=""
                    >
                        <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                        <v-list-tile-action>
                            <v-icon v-text="admin[1]"></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>

                <v-list-group
                        sub-group
                        no-action
                >
                    <v-list-tile slot="activator">
                        <v-list-tile-title>操作管理</v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile
                            v-for="(crud, i) in cruds"
                            :key="i"
                            @click="size++"
                    >
                        <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
                        <v-list-tile-action>
                            <v-icon v-text="crud[1]"></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data: () => ({
            size:1,
            admins: [
                ['管理', 'people_outline'],
                ['配置', 'settings']
            ],
            cruds: [
                ['新增', 'add'],
                ['查询', 'insert_drive_file'],
                ['更新', 'update'],
                ['删除', 'delete']
            ]
        })
    }
</script>
