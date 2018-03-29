<template>
    <div class='news-info'>
        <h3 class="news-title">{{ info.title}}</h3>
        <p class='news-desc'>
            <span>发表时间：{{ info.add_time | date }}  </span>
            <span>点击次数：{{ info.click}}次</span>
        </p>

    <!-- 内容部分 -->
    <div class="content" v-html= 'info.content'></div>

    <!--  评论组件 -->
    <comment :commentId='info.id' v-if='isLoaded'></comment>

    </div>
</template>

<script>
import Comment from '../comment/Comment.vue';
// 发送请求
export default {
  created(){
      this.getNewsInfoById();
     
  },
  data(){
      return{
          info:{},  //详情的数据
         isLoaded:false  //数据是否加载完成
      }
  },
  methods:{
        // 根据ID拿到新闻详情
      getNewsInfoById(){
          this.$http
            .get(`/api/getnew/${this.$route.params.id}`)
            .then((res) => {
                const data = res.data;
                if(data.status === 0){
                    this.info = data.message[0];
                    this.isLoaded = true;
                }
            })
      },
  },
  //   将comment的组件作为当前组件的子组件
    components:{Comment}
}
</script>

<style lang='scss' >
// 这边不能添加scoped :因为content是动态生成的 ，v-html-----
.news-info{
    padding:5px;
    .news-title{
        font-size: 18px;
    }
    .news-desc{
        font-size: 12px;
        color:skyblue;
        display:flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
    }
    .content{
        border-bottom: 1px solid #ccc;
        img{
            width:100%;
        }
    }
}


</style>

