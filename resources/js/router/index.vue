<script>
    import Vue from 'vue';
    import VueRouter from 'vue-router';

    Vue.use(VueRouter);

    export default new VueRouter({
        saveScrollPosition: true,
        routes: [
            {
                name: 'Index',
                path: '/',
                component: resolve => void(require(['../components/Index.vue'], resolve))
            }
        ]
    });
</script>

