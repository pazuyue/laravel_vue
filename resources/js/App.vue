<template>
    <div>
        <h1>Hello, {{ msg }}! Monogo 测试环境</h1>
        <router-view></router-view> <!--路由引入的组件将在这里被渲染-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Vue'
            }
        }
    }
</script>

