// 1-导入vue
 import Vue from 'vue';

//  3-导入App根组件
import App from './App.vue';

// 4-引入mint-ui
import { Header,Button,Swipe,SwipeItem } from 'mint-ui';
// 5-加载成全局组件
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 8-引入路由
import VueRouter from 'vue-router';
// 9-加载包
Vue.use(VueRouter);

// 6-引mui的样式和扩展样式
import './lib/mui/css/mui.min.css';
// 7-扩展是为了加载购物车的小图标
import './lib/mui/css/icons-extra.css';
// 引入自己的样式
import './assets/css/index.css';

// 引入axios
import axios from 'axios';
// 设置axios的公共路劲
axios.defaults.baseURL='http://vue.studyit.io';
// axios不是vue的插件，不能使用use()来安装插件
// 只要是与vue无关的第三方的包，都可以使用下面这种用法
// 在vue的原型上添加一个属性，值为axios
Vue.prototype.$http = axios;




// 11-导入组件
import Home from './components/Home.vue';
import Vip from './components/Vip.vue';
import Cart from './components/cart/Cart.vue';
import Search from './components/Search.vue';

// import Home from './components/Home.vue';


// 10-创建路由实例
const router = new VueRouter({
    routes:[
        {path:'/home',component:Home},
        {path:'/vip',component:Vip},
        {path:'/cart',component:Cart},
        {path:'/search',component:Search},
        
    ],
    // 修改高亮类名
    linkActiveClass:'mui-active',
})


// 2-创建vue实例
const vm = new Vue({
    el:'#app',
    // 渲染根组件App
     render: c => c(App),
     router
    
})