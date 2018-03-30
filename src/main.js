// 1-导入vue
 import Vue from 'vue';

//  3-导入App根组件
import App from './App.vue';

// 4-引入mint-ui
import { Header,Button,Swipe,SwipeItem,Lazyload  } from 'mint-ui';
// 5-加载成全局组件
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 懒加载（lazy）是vue的插件，所以需要use()
Vue.use(Lazyload);




// 6-引mui的样式和扩展样式
import './lib/mui/css/mui.min.css';
// 7-扩展是为了加载购物车的小图标
import './lib/mui/css/icons-extra.css';
// 引入自己的样式
import './assets/css/index.css';


// 引入axios
import axios from 'axios';
// 设置axios的公共路劲
axios.defaults.baseURL='http://vue.studyit.io/';
// axios不是vue的插件，不能使用use()来安装插件
// 只要是与vue无关的第三方的包，都可以使用下面这种用法
// 在vue的原型上添加一个属性，值为axios
Vue.prototype.$http = axios;

// 导入过滤器
// 因为filter--index.js没有到导出，只需要导入，index.js会自动去找
import './filter';

//  导入路由实例
import router from './router';

import VuePreview from 'vue-preview'; 
Vue.use(VuePreview)

// 导入vuex
// index.js可以省略
import store from './store'
    
// 2-创建vue实例
const vm = new Vue({
    el:'#app',
    // 渲染根组件App
     render: c => c(App),
     router,
     store
    
})