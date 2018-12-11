/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example-component', require('./components/ExampleComponent.vue'));

//import Hello from './components/Hello.vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {getCookie} from './cookie.js'

Vue.use(ElementUI);

import router from './router/index.vue'

router.beforeEach((to, from, next) => {

    console.log(to.path);
    //to即将进入的目标路由对象，from当前导航正要离开的路由， next  :  下一步执行的函数钩子
    if(to.path === '/Login')  {  next()  }  // 如果即将进入登录路由，则直接放行
    else {     //进入的不是登录路由
        if(getCookie('username')=="") {
            next({ path: '/Login' })
        }
        //下一跳路由需要登录验证，并且还未登录，则路由定向到  登录路由
        else {
            next()
        }
    }  //如果不需要登录验证，或者已经登录成功，则直接放行
})

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
