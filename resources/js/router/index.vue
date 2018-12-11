<script>
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    import axios from 'axios'
    Vue.use(VueRouter);
    Vue.prototype.$ajax = axios

    export default new VueRouter({
        saveScrollPosition: true,
        routes: [
            {
                name: 'Index',
                path: '/',
                component: resolve => void(require(['../components/Index.vue'], resolve))
            },
            {
                name: 'Login',
                path: '/Login',
                meta:{
                    requiresAuth: true,
                    title:'用户登陆' // 标题设置在这里
                },
                component: resolve => void(require(['../components/Login.vue'], resolve))
            },
            {
                name: 'UserList',
                path: '/UserList',
                meta:{
                    requiresAuth: true,
                    title:'用户列表' // 标题设置在这里
                },
                component: resolve => void(require(['../components/UserList.vue'], resolve))
            }
        ]
    });
</script>

