<template>
    <div class="login-container">

    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
// .login-container {
//     // height: 100%;
//     // min-height: 100vh;
//     // background-position: center;
//     // background-repeat: no-repeat;
//     // background-attachment: fixed;\
//     // background-image: url("~@/assets/image/login-bg.jpg");
// }
.login-container {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: url("~@/assets/image/login-bg.jpg") no-repeat;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
@media (max-width: 1200px) {
    .login-container {
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size:;
        background-image: url("~@/assets/image/login-bg.jpg");
    }
}
</style>