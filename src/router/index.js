// 导入 Vue
import Vue from 'vue';
// 8-引入路由
import VueRouter from 'vue-router';
// 9-加载包
Vue.use(VueRouter);

// 11-导入组件
import Home from '../components/Home.vue';
import Vip from '../components/Vip.vue';
import Cart from '../components/cart/Cart.vue';
import Search from '../components/Search.vue';
 import NewsList from '../components/news/NewsList.vue';
 import NewsInfo from '../components/news/NewsInfo.vue';

// 10-创建路由实例
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/vip',component:Vip},
        {path:'/cart',component:Cart},
        {path:'/search',component:Search},

        {path:'/home/news',component:NewsList},
        {path:'/home/info/:id',component:NewsInfo},
          
    ],
    // 修改高亮类名
    linkActiveClass:'mui-active',
})

// 导出路由实例
export default router;