<template>
  <div class="home">
        <!-- 轮播图 -->
    <mt-swipe :auto="4000" class="home-swipe">
        <mt-swipe-item v-for='(item,i) in list' :key='i'>
            <img :src="item.img" :alt="item.url">
        </mt-swipe-item>
    </mt-swipe>
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
    height: 250px;

    img {
      width: 100%;
    }
  }
</style>
