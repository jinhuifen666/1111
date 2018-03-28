<template>
  <div class="home">
        <!-- 轮播图 -->
    <mt-swipe :auto="4000" class="home-swipe">
        <mt-swipe-item v-for='(item,i) in list' :key='i'>
            <img :src="item.img" :alt="item.url">
        </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格菜单 -->
     <ul class="mui-table-view mui-grid-view mui-grid-9 ">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon "></span>
                <div class="mui-media-body">新闻资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon "></span>
                <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon "></span>
                <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon "></span>
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon "></span>
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon "></span>
                <div class="mui-media-body">联系我们</div></a></li>
       
    </ul>
  </div>
</template>

<script>
// 用axios发送请求

export default {
// 应该在页面打开就要拿到轮播图数据，所以要在created中发送请求
    created(){
        //
        this.getlunbo(); 
    },

    // 准备数据
     data(){
         return{
             list:[]
         }
     },

    //  准备方法
    methods:{
        // 获取轮播图数据方法
        getlunbo(){
            this.$http
                .get('/api/getlunbo')
                .then((res) => {
                    const data = res.data;
                    // 如果res.data.status===0，说明请求成功
                    if(data.status === 0){
                        // 将获取到的值给list
                        console.log(data.message)
                         this.list = data.message;
                    }
                })
        }
    }


}
</script>

<style lang="scss">
.home-swipe {
    height: 180px;


    img {
        height:100%;
      width: 100%;
    }
  }
  .mui-grid-view.mui-grid-9{
      background-color: #fff;
      border:0;
  
     .mui-table-view-cell{
      border:0;
    }

    //九宫格公共样式
    .mui-icon{
         width: 60px;
         height: 60px;
         background-size: cover;
    }
    // 插入背景图片
     li:first-child .mui-icon{
         background-image: url(../assets/images/menu1.png);
     }
     li:nth-child(2) .mui-icon{
         
         background-image: url(../assets/images/menu2.png);
     }
     li:nth-child(3) .mui-icon{
         
         background-image: url(../assets/images/menu3.png);
     }
     li:nth-child(4) .mui-icon{
         
         background-image: url(../assets/images/menu4.png);
     }
     li:nth-child(5) .mui-icon{
         
         background-image: url(../assets/images/menu5.png);
     }
     li:nth-child(6) .mui-icon{
         
         background-image: url(../assets/images/menu6.png);
     }
}
</style>
