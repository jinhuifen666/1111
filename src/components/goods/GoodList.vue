<template>
  <div class="goods-list">
    <ul>
      <li class="goods-item" v-for='item in list ' :key='item.id' @click=goGoodInfo(item.id)>
        <img :src="item.img_url" :alt="item.img_url">
        <h2>{{ item.title }}</h2>
        <div>
          <span class="price-cur">￥{{ item.sell_price}}</span>
          <span class="price-prev">￥{{item.market_price}}</span>
        </div>
        <p>
          <span>热卖中</span>
          <span>剩余{{ item.stock_quantity }}件</span>
        </p>
      </li>
    </ul>

    <!-- 加载更多 -->
    <mt-button plain size="large" type="primary" @click='LodeMore' v-if='hasMore'>加载更多</mt-button>
    <p class='has-more' v-else >我也是有底线的</p>
  </div>
</template>

<script>
export default {

    //  钩子函数发送请求
    created(){
        this.getGoods();

    },
    // 提供数据
     data(){
         return{
            list:[],  //列表数据 
            pageIndex:1, //页码
            hasMore:true      //是否加载更多
        
         }
     },
    //  提供方法
    methods:{
        // 加载商品
        getGoods(){
            this.$http
                .get(`/api/getgoods?pageindex=${this.pageIndex}`)
                .then(res => {
                    const data = res.data;
                    if(data.status === 0){
                        this.list =[...this.list,...data.message];

                        // 判断是否加载更多
                        if(data.message.length < 10){
                            this.hasMore = false;
                        }
                        
                    }
                })
        },
        // 加载更多
        LodeMore(){
            this.pageIndex++;
            this.getGoods();
        },
        // 编程式导航跳转
        goGoodInfo(id){
            this.$router.push(`/home/goodinfo/${id}`)
        }
        
    }
  
}
</script>

<style lang="scss">
  .goods-list {
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .goods-item {
      width: 48%;
      margin: 1%;
      padding: 3px;
      border: 1px solid #ccc;
      box-shadow: 0 0 10px #ccc;

      h2 {
        font-size: 14px;
         height: 32px;
        overflow: hidden;
        line-height: 16px;
        margin-bottom: 5px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      div {
        font-size: 14px;
        margin-top: 5px;

        .price-cur {
          color: #f00;
          margin-right: 10px;
        }
        .price-prev {
          text-decoration: line-through;
          color: #ccc;
        }
      }

      img {
        width: 100%;
      }

      p {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0 3px;
        color: #ccc;
       
      }
    }
    .has-more{
         text-align:center;
        padding:10px;
    }
  }
</style>
