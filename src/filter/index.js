// 导入vue
import Vue from 'vue';
import moment from 'moment';
// 过滤
Vue.filter('date',(input,format = 'YYYY-MM-DD HH:mm:ss') => {
    return moment(input).format(format);
})