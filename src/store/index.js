// 导入vue
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 导入vuex的实例
export default new Vuex.Store({
    state:{
        // 从缓存中取出数据
        cart:JSON.parse(localStorage.getItem('cart')) || [],
        // cart:[
        //     // id  :表示区分哪个商品
        //     // count :表示购买的数量 
        //     // {id:34,count:78}
        // ]
        
    },
    mutations:{
        addCart(state,payload){

            // 思路：
            // 1-先看看ID对应的商品是否存在于购物车中
            // 2-如果存在，直接找到对应的商品，将count相加
            // 3-如果不存在，直接push添加进购物车

            const temp = state.cart.filter(item => item.id === payload.id)
            // 没有
            if(temp.length === 0 ){
                state.cart.push({id:payload.id,count:payload.count})
            }else{
            // 有
            console.log(payload.count)
                temp[0].count += payload.count;                
            }

            // 将数据存储到计算机缓存中
            localStorage.setItem('cart',JSON.stringify(state.cart));
            
        }
    },
    // 计算属性
     getters:{
         allCount(state){
             let count = 0 ;
             state.cart.forEach( item => {
                 count += item.count;
                })
                return count;
         }
     }
})