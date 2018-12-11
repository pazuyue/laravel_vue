<template>
    <el-container>
        <el-container>
            <el-main  v-bind:class="{ main: isActive }">
                <h1>Hello, Larvuent!</h1>
                <el-dialog>
                    <p>欢迎使用 Element</p>
                </el-dialog>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import {delCookie,setCookie,getCookie} from './../cookie.js'
    export default {
        data() {
            return {
                isActive:true,
                visible: false
            }
        },
        mounted() {
            this.$emit('visible',false);
        }
    }
</script>

<style>

    .aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
        width:200px;
    }

    .main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

</style>
