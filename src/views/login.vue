<template>
    <div class="login">
        <div class="from">
            <div class="title">
                <img src="../assets/image/220-220.png" alt="举杯邀月-技术博客">
                <span>图纸分析-后台管理</span>
            </div>
            <a-form-model ref="form" :model="fromData" :rules="accountRule">
                <a-form-model-item prop="account">
                    <a-input v-model="fromData.account" size="large" autocomplete="off">
                        <a-icon slot="prefix" type="user"/>
                    </a-input>
                </a-form-model-item>
                <a-form-model-item prop="password">
                    <a-input v-model="fromData.password" size="large" type="password" autocomplete="off">
                        <a-icon slot="prefix" type="usb"/>
                    </a-input>
                </a-form-model-item>
                <a-form-model>
                    <a-button type="primary" size="large" style="width: 100%" @click="handleAccount"
                              :loading="loading !== true">
                        {{ loading === true ? '登 录' : loading }}
                    </a-button>
                </a-form-model>
            </a-form-model>
        </div>
        <div class="footer">
            <div>图纸分析</div>
        </div>
    </div>
</template>

<script>
    import { account } from "@/api/public"
    import accountRule from "@/ant-design/rule/accountRule";

    export default {
        data() {
            return {
                loading: true,
                fromData: {
                    account: '',
                    password: '',
                },
                accountRule
            }
        },
        methods: {
            handleAccount() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.loading = '登录中...'
                        account(this.fromData).then(res => {
                            if (res.code === 0 && res.data.token) {
                                localStorage.setItem('token', res.data.token)
                                delete res.data.token
                                localStorage.setItem('info', JSON.stringify(res.data))
                                this.$router.push({name: 'ArticleIndex'})
                            } else {
                                this.loading = true
                            }
                        })
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    @media screen and (min-width: 768px) {
        .login {
            background-image: url('../assets/image/background.svg');
            background-repeat: no-repeat;
            background-position: center 110px;
            background-size: 100%;
        }
    }

    .login {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: auto;
        background-color: #f0f2f5;

        .from {
            flex: 1 1;
            width: 368px;
            margin: auto;
            padding: 20vh 0 30px;
        }

        .footer {
            flex: 0 0 auto;
            font-size: 14px;
            text-align: center;
            padding: 20px 0;

            div {
                color: rgba(0, 0, 0, .4);
            }
        }

        .title {
            height: 44px;
            line-height: 44px;
            text-align: center;
            margin-bottom: 35px;

            img {
                height: 48px;
                margin-right: 16px;
                vertical-align: top;
            }

            span {
                position: relative;
                top: 2px;
                color: rgba(0, 0, 0, .85);
                font-weight: 600;
                font-size: 30px;
                font-family: Avenir, helvetica neue, Arial, Helvetica, sans-serif;
            }
        }
    }
</style>
