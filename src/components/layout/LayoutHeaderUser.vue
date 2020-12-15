<template>
    <div class="header-user">
        <ul>
            <li>
                <a-dropdown>
                    <span class="ant-dropdown-link"><a-icon type="user"/>早上好：admin</span>
                    <a-menu slot="overlay" @click="handleMenuClick">
                        <a-menu-item key="1">修改密码</a-menu-item>
                        <a-menu-item key="2">退出登录</a-menu-item>
                    </a-menu>
                </a-dropdown>
            </li>
        </ul>
    </div>
</template>

<script>
    import { loginOutAndClearUser } from '@/utils/util'

    export default {
        methods: {
            handleMenuClick(info) {
                switch (info.key) {
                    case '2':
                        loginOutAndClearUser()
                        this.$router.push({name: 'login'})
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>
