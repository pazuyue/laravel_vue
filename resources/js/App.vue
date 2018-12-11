<template>

    <el-container>
        <el-header v-bind:class="{ is_can_see: isActive}">

            <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    v-bind:class="{ active: isActive }">
                <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
                <el-submenu index="2">
                    <template slot="title">系统中心</template>
                    <router-link to="/UserList"><el-menu-item index="2-1">用户列表</el-menu-item></router-link>
                    <!-- <router-link to="/RoleList"><el-menu-item index="2-3">角色列表</el-menu-item></router-link>
                     <router-link to="/PermissionList"><el-menu-item index="2-4">权限列表</el-menu-item></router-link>-->
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">我的工作台</template>
                    <router-link to="/ColumnManagement"><el-menu-item index="3-1">栏目管理</el-menu-item></router-link>
                </el-submenu>

                <el-menu-item index="9">注销</el-menu-item>
            </el-menu>

        </el-header>
        <el-container>
            <router-view v-on:visible = "visible"></router-view> <!--路由引入的组件将在这里被渲染-->
        </el-container>
    </el-container>


</template>

<style>

    .is_can_see{
        display: none ;
    }
</style>

<script>
    import {delCookie,setCookie,getCookie} from './cookie.js'
    export default {
        data() {
            return {
                activeIndex: '1',
                isActive:true,
                msg: 'Vue'
            }
        },
        mounted() {
            if(getCookie('username')!=""){
                this.isActive=false
            }
        },

        watch: {
            isActive(curVal,oldVal){
                console.log(curVal,oldVal);
                this.isActive=curVal
            }
        },

        methods: {
            handleSelect(key, keyPath) {
                if(key==9){
                    delCookie('username')
                    this.isActive=true
                    this.$message.success("注销成功！");
                    setTimeout(function(){
                        this.$router.push('/Login')
                    }.bind(this),1000)
                }
            },
        visible(res){
            this.isActive=res
        },
        },
    }
</script>


