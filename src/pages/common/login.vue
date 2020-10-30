<template>
    <div class="login-page">
        <div class="login-page-container">
            <div class="login-page-container-top">
                <div class="login-page-container-top-header">
                    <img src="~@/assets/logo.png" class="logo">
                    <span>Admin-Puls</span>
                </div>
            </div>
            <div class="login-page-container-main">
                <a-form ref="ruleForm" :model="formLogin">
                    <a-form-item name="username">
                        <a-input v-model:value="formLogin.username" size="large" />
                    </a-form-item>
                    <a-form-item name="password">
                        <a-input v-model:value="formLogin.password" size="large" />
                    </a-form-item>
                </a-form>
                <a-form-item>
                    <a-button type="primary" html-type="submit" block size="large"> 登录 </a-button>
                </a-form-item>
                <div class='login-page-tips'>测试帐号为:adminPuls 密码：123456</div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    setup () {
        const formLogin = reactive({ username: 'adminPuls', password: '123456' })
        return { formLogin }
    }
}
</script>

<style lang="less" scoped>
.login-page {
    height: 100%;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    background-image: url("~@/assets/image/login-bg.jpg");
    &-container {
        width: 380px;
        margin: 0 auto;
        padding: 110px 0 144px;
        // ----------------------------------------------
        &-top {
            text-align: center;
            &-header {
                height: 45px;
                line-height: 45px;
                font-size: 33px;
                color: #000000;
                font-family: Avenir, Helvetica Neue, Arial, Helvetica,
                    sans-serif;
                font-weight: 600;
                .logo {
                    height: 45px;
                    vertical-align: top;
                    margin-right: 16px;
                    border-style: none;
                }
            }
        }
        // ----------------------------------------------
        &-main {
            padding-top: 30px;
            margin: 0 auto;
        }
    }
    &-tips {
        font-size: 14px;
        color: #000000;
        margin-bottom: 5px;
    }
}
@media (max-width: 576px) {
    .login-page {
        &-container {
            width: auto !important;
            margin: 10px;
        }
    }
}
</style>