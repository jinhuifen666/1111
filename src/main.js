// 1-导入vue
import Vue from 'vue';

// 2-引入路由
import VueRouter from 'vue-router';
// 加载路由插件
Vue.use(VueRouter);

// 引入组件
import App from './App.vue';
import Home from './components/Home.vue';
// 创建路由实例
const router = new VueRouter({
    routes:[
        {path:'./home',component:Home}
    ]
})

// 创建vue的实例
const vm = new Vue({
    el:'#app',
    // 渲染组件
    render:c => c(App),
    // 关联路由与vue的实例
    router

})