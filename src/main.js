// 1-导入vue
 import Vue from 'vue';

//  3-导入App根组件
import App from './App.vue';

// 2-创建vue实例
const vm = new Vue({
    el:'#app',
    // 渲染根组件App
     render: c => c(App),
    
})