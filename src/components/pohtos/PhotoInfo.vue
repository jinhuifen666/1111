<template>
  <div class="photo-info">
    <header>
      <h2 class="title">{{ info.title }}</h2>
      <p class="mui-ellipsis">
        <span>发表时间：{{info.add_time | date}}</span>
        <span>点击次数：{{ info.click}}次</span>
      </p>
    </header>
    <div class="thumb-img">
      <img src="http://vue.studyit.io/upload/201504/18/thumb_201504181230434303.jpg" height="100" class="preview-img">
      <img src="http://vue.studyit.io/upload/201504/18/thumb_201504181230437111.jpg" height="100" class="preview-img">
      <img src="http://vue.studyit.io/upload/201504/18/thumb_201504181230439139.jpg" height="100" class="preview-img">
    </div>
    <div class="content" v-html='info.content'>
       
    </div>
  </div>
</template>

<script>
export default {
    // 发送请求
    created(){  
        this.getImageInfoById();

    },
    // 数据
    data(){
        return{
            info:{}  //图片详情
        }
    },
    // 方法
    methods:{
        // 图片详情
        getImageInfoById(){
            this.$http
                .get(`/api/getimageInfo/${this.$route.params.id}`)
                .then(res => {
                    const data = res.data;
                    if(data.status === 0){
                        this.info = data.message[0];
                        console.log(data.message);
                    }
                })
        }
    }

}
</script>

<style lang="scss">
.photo-info {
  padding-left: 3px;
  padding-right: 3px;
  padding-top:10px;

  .thumb-img {
    border-top: 1px solid #ccc;

    img {
      margin: 9px;
      box-shadow: 0 0 15px #ccc;
    }
  }

  .title {
    font-size: 18px;
    color: #26a2ff;
    text-align: center;
  }

  .mui-ellipsis {
    display: flex;
    justify-content: space-between;
    padding: 0 3px;
  }

  .content {
    font-size: 14px;
    line-height: 28px;
    padding-top: 20px;
  }
}
</style>
