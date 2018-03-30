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
      <!-- <img :src="item.src" height="100" class="preview-img" v-for="(item,i) in list" :key='i'> -->
      <vue-preview :slides="list"></vue-preview>
    </div>
    <div class="content" v-html='info.content'></div>

    <!-- 评论组件 -->
    <Comment :commentId = 'info.id' v-if='isLoaded'></Comment>
  </div>
</template>

<script>

// 导入评论组件
import Comment from '../comment/Comment.vue';


export default {
    // 发送请求
    created(){  
        // 图片详情
        this.getImageInfoById();
        // 缩略图
        this.getThumImagesById();

    },
    // 数据
    data(){
        return{
            info:{}, //图片详情
            list:[],    //缩略图
            isLoaded:false
        }
    },
    // 方法
    methods:{
        // 图片详情页的数据
        getImageInfoById(){
            this.$http
                .get(`/api/getimageInfo/${this.$route.params.id}`)
                .then(res => {
                    const data = res.data;
                    if(data.status === 0){
                        this.info = data.message[0];
                        // console.log(data.message);
                        this.isLoaded = true;
                    }
                })
        },

        // 缩略图
        getThumImagesById(){
            this.$http
                .get(`/api/getthumimages/${this.$route.params.id}`)
                .then(res => {
                    const data = res.data;
                    if(data.status === 0 ){
                        // 因为vue-preview插件需要一定的数据格式，而直接获取到的数据不是插件需要的数据格式，所以，我们需要将插件转化成插件需要的格式

                        this.list = data.message.map(item=>{
                            return{
                                src: item.src,
                                msrc: item.src,
                                alt: '缩略图',
                                title: '缩略图',
                                w: 600,
                                h: 400
                            }
                        })
                        
                    }
                })
        }   
    },

    // 将comment注册为当前的子组件
    components:{Comment}

}
</script>

<style lang="scss">
.photo-info {
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 10px;

  .thumb-img {
    border-top: 1px solid #ccc;

    .my-gallery {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;

      figure {
        margin: 0;
        
        img {
          width: 100px;
          height: 100px;
          margin: 9px;
          box-shadow: 0 0 15px #ccc;
        }
      }
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
