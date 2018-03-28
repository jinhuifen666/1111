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
    <div class="comment">
        <h3>发表评论 </h3>
        <textarea  cols="30" rows="6" placeholder="   嘿，同志，有什么话要说得嘛 "></textarea>
        <mt-button type='primary' size='large' >发表评论</mt-button>
        <ul class='comment-list'>
            <li class='comment-item'>
                <h4>
                    <span>第一楼</span>
                    <span>用户：匿名用户</span>
                    <span>发表时间：2012-12-12 12:12：12</span>
                </h4>
                <p>aaaa</p>
            </li>
        </ul>
        <mt-button type='primary' size='large' plain>加载更多</mt-button>

    </div>

    </div>
</template>

<script>
// 发送请求
export default {
  created(){
      this.getNewsInfoById();
  },
  data(){
      return{
          info:[]
      }
  },
  methods:{
      getNewsInfoById(){
          this.$http
            .get(`/api/getnew/${this.$route.params.id}`)
            .then((res) => {
                const data = res.data;
                if(data.status === 0){
                    this.info = data.message[0];
                }
            })
      }
  }
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

.comment{
    .comment-item{
        h4{
            display: flex;
            justify-content:space-between;
            height:25px;
            line-height:25px;
            font-size:14px;
            font-weight:bold;
            background-color: #eee;
        }
        p{
            color:#000;
            padding:5px;
        }
    }
}
</style>

