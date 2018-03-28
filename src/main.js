// 1- 导入vue
import Vue from 'vue';

// 2-导入App根组件
import App from './App.vue';


// 3-导入mint-ui
import { Header,Button,Swipe, SwipeItem } from 'mint-ui';
// 注册为全局组件
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入路由
import VueRouter from 'vue-router';
// 安装插件
Vue.use(VueRouter);

// 导入 mui 样式 和 扩展样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

// 导入自定义样式
import './assets/css/index.css';

// 导入组件
import Home from './components/Home.vue';


// 创建路由实例
const router = new VueRouter({
    routes:[
        {path:'/home',component:Home},
    ],

    // 修改底部类名
    linkActiveClass:'mui-active',
})

// 创建vue实例
const vm = new Vue({
    el:'#app',
    // 渲染App 根组件
    render:c => c(App),
    // 关联vue实例与路由实例
    router
})

