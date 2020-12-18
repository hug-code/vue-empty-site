<template>
    <a-menu
        :open-keys="openKeys"
        :selected-keys="openKeys"
        :mode="menuMode"
        :theme="sideTheme"
        :class="sideCollapsed ? 'ant-menu-inline-collapsed' : ''"
        @openChange="onOpenChange"
        @click="onClick"
    >
        <template v-for="item in menuList">
            <a-menu-item v-if="!item.children" :key="item.key">
                <a-icon :type="item.icon"/>
                <span>{{ item.title }}</span>
            </a-menu-item>
            <sub-menu v-else :key="item.key" :menu-info="item"/>
        </template>

    </a-menu>
</template>

<script>
    import createRouter from '@/utils/createRouter'
    import SubMenu from '@/components/layout/LayoutSubMenu'

    export default {
        components: {
            SubMenu,
        },
        data() {
            return {
                rootSubmenuKeys: [],
                openKeys: [],
                openKeysTemp: [],
                menuList: [],
                menuMode: 'inline'
            }
        },
        created() {
            this.$nextTick(() => {
                this.menuList = createRouter()
                this.menuList.forEach(item => {
                    this.rootSubmenuKeys.push(item.key)
                })
            })
            this.selectMenu()
        },
        watch: {
            sideCollapsed(res) {
                this.openKeysTemp = this.openKeysTemp.length ? this.openKeysTemp : this.openKeys
                this.openKeys = res ? [] : this.openKeysTemp
                setTimeout(() => {
                    this.menuMode = res ? 'vertical' : 'inline'
                })
            },
            $route() {
                this.selectMenu()
            }
        },
        methods: {
            onOpenChange(openKeys) { // 展开当前菜单时关闭其他展开的菜单
                const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
                if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                    this.openKeys = openKeys;
                } else {
                    this.openKeys = latestOpenKey ? [latestOpenKey] : [];
                }
            },
            onClick(e) {  // 点击菜单
                this.$router.push({name: e.key})
                this.selectMenu()
            },
            selectMenu() { // 生成展开及选中的菜单
                setTimeout(() => {
                    let matched = this.$route.matched
                    this.openKeysTemp = matched.map(item => item.name)
                    if(this.sideCollapsed) {
                        this.menuMode = 'vertical'
                    }else{
                        this.openKeys = this.openKeysTemp
                    }
                }, 10)
            }
        },
        computed: {
            sideCollapsed() {
                return this.$store.state.sideCollapsed
            },
            sideTheme() {
                return this.$store.state.sideTheme
            }
        }
    }
</script>
