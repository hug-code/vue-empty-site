<template>
    <a-layout class="layout">
        <a-layout-sider :width="sideCollapsed ? '80px' : '256px'" :theme="sideTheme">
            <div class="layout-logo"></div>
            <layout-menu/>
        </a-layout-sider>
        <a-layout>
            <a-layout-header>
                <div class="layout-header">
                    <div class="header-switch" @click="collapsed = !collapsed">
                        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" class="header-icon-switch"/>
                    </div>
                    <layout-header-user/>
                </div>
            </a-layout-header>
            <a-layout-content>
                <layout-breadcrumb/>
                <div class="layout-content">
                    <router-view/>
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
    import { SIDEBAR_TYPE } from '@/store/const'
    import LayoutMenu from "@/components/layout/LayoutMenu";
    import LayoutHeaderUser from "@/components/layout/LayoutHeaderUser";
    import LayoutBreadcrumb from "@/components/layout/LayoutBreadcrumb";

    export default {
        components: {
            LayoutMenu,
            LayoutHeaderUser,
            LayoutBreadcrumb
        },
        data() {
            return {
                // 侧栏收起状态
                collapsed: false,
            };
        },
        created() {
            this.$watch('collapsed', () => {
                this.$store.commit(SIDEBAR_TYPE, this.collapsed)
            })
        },
        computed: {
            sideCollapsed() {
                return this.$store.state.sideCollapsed
            },
            sideTheme() {
                return this.$store.state.sideTheme
            }
        }
    };
</script>
<style lang="less">
    @import "../../assets/style/layout";
</style>
