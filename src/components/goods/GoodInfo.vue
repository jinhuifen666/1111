<template>
  <div class="goods-info">
    <!-- 轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- 轮播图组件 -->
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for='(item,i) in Imagelist' :key='i'>
              <img :src="item.src" :alt="item.src">
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>

    <!-- 飞舞的小球 -->

    <!-- transition是内置的组件，用来实现过渡动画效果
            要执行过渡动画效果的元素，应该被transition包裹 -->
   <transition 
      @before-enter="beforeEnter"
      @enter="enter">
      <div class="ball" v-show="isShow"></div>
    </transition>

    <!-- 商品数据展示 -->
    <div class="mui-card">
      <div class="mui-card-header">{{info.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner info">
          <p>
            <span class="market-price">市场价：<del>￥{{ info.market_price}}</del></span> 
            <span>
            销售价：
            <span class="sell-price">￥{{ info.sell_price}}</span>
            </span>
          </p>
          <div class="numbox-container">
            购买数量：
            <!-- count:表示购买数量
                  total:表示库存数量
             -->
            <NumberBox v-model="count" :total='info.stock_quantity'></NumberBox>
          </div>
          <div>
            <mt-button type="primary">立即购买</mt-button>
            <mt-button type="danger" @click='addCart'>加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ info.goods_no}}</p>
          <p>库存情况：{{ info.stock_quantity}}件</p>
          <p>上架时间：{{ info.add_time | date }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
 // 导入numberBox
import NumberBox  from '../../components/comment/NumberBox.vue';

export default {
  created(){
    console.log(this.$route.params.id);
    // 轮播图\
    this.getSwipeImage();
    this.getInfo();

  },
  data(){
    return{
      Imagelist:[],  //轮播图
      info:{},  //商品图文
      count:1,   //购买数量
      isShow:false   //飞舞的小球是否展示
    }
  },
  methods:{
     // 获取商品轮播图数据
    getSwipeImage() {
      this.$http
        .get(`/api/getthumimages/${this.$route.params.id}`)
        .then(res => {
          const data = res.data

          if (data.status === 0) {
            this.Imagelist = data.message
          }
        })
    },

    // 商品图文介绍
    getInfo(){
      this.$http  
        .get(`/api/goods/getinfo/${this.$route.params.id}`)
        .then(res => {
          const data = res.data;
          if(data.status === 0){
              this.info = data.message[0];
             
              
          }
        })
    },

    // 添加至购物车
    addCart(){
      console.log(this.count);
      // this.isShow = !isShow;

      this.$store.commit('addCart',
      {id:this.$route.params.id - 0,count:this.count});
      this.isShow = true;
      
    } ,
    
    beforeEnter: function (el) {
      // ...
      console.log('beforeEnter',el)
      el.style.transfrom= 'translate(0,0)';
      
    },
    // 此回调函数是可选项的设置
    // 与 CSS 结合时使用
    enter: function (el, done) {
      // ... 此处的done调用后，后面的钩子函数才会执行
      // done();
      el.style.transform= 'translate(97px, ' + (window.pageYOffset + 153) + 'px)';
       // 设置小球的结束位置
      // 隐藏小球
      this.isShow = false
    },
    // afterEnter: function (el) {
    //   // ...
   
      
    // },
    // enterCancelled: function (el) {
    //   // ...
    // },
    },

  // 注册NumberBox
  components:{NumberBox}
   
  
}
</script>

<style lang="scss">
  .mint-swipe {
    height: 200px;

    .mint-swipe-item {
      text-align: center;

      img {
        height: 100%;
        // width: 100%;
      }
    }
  }

  .info {

    p {
      color: #000;

      .market-price {
        margin-right: 10px;
      }

      .sell-price {
        color: #f00;
        font-size: 16px;
        font-weight: bold;
      }
    }

    .mui-numbox {
      height: 25px;
    }

    .numbox-container {
      margin-bottom: 10px;
    }

    .mint-button {
      font-size: 14px;
      height: 34px;
    }
  }

  .mui-card-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 120px;
  }

  .ball {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #f00;
    position: absolute;
    z-index: 11;
    top: 376px;
    left: 151px;
    /* 通过 贝塞尔曲线 设置动画效果 */
    transition: all 0.9s cubic-bezier(.52,-0.54,.83,.67);
    // transition:all 3s ease;
  }
</style>
