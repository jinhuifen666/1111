<template>
  <div>
    <div class="mui-slider mui-fullscreen">
			<div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
          <a href="#" class="mui-control-item mui-active" @click.prevent="getImage()">
						全部
					</a>
          <a href="#" class="mui-control-item" v-for='item in categoryList' :key='item.id' @click.prevent="getImage(item.id)">
						{{ item.title}}
					</a>
        </div>
			</div>
		</div>

		<!-- 图片列表 -->
		<ul class="category-img-list">
      <li class="img-list-item" v-for='item in iamgelist' :key='item.id' @click="goPhotoInfo(item.id)">
        <img v-lazy="item.img_url" > 
        <div>
          <h2>{{ item.title}}</h2>
          <p>{{ item.zhaiyao}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// 导入mui
import mui from '../../lib/mui/js/mui.min.js';
export default { 
  //操作DOM，在mounted的钩子函数中操作
  mounted(){
    // 顶部导航区域滚动
    mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    })

    // 分类菜单的方法
    this.getCategoryList();
    this.getImage();
  },
  //提供数据
  data(){
      return{
        categoryList:[],  //分类菜单
        iamgelist:[]    //获取全部图片
      }
    },
    // 方法
    methods:{
      
      //  获取分类菜单的请求 
      getCategoryList(){
        this.$http
          .get('/api/getimgcategory')
          .then(res => {
            const data = res.data;
            if(data.status === 0){
              this.categoryList = data.message;
            }
          })
      },

      // 获取图片列表数据
      getImage(id = 0){
        this.$http
          .get(`/api/getimages/${id}`)
          .then(res => {
            const data = res.data;
            if(data.status === 0){
              this.iamgelist = data.message;
              console.log(data.message) 
            }
          })
      },


    // 跳转到详情
    goPhotoInfo(id){
      this.$router.push(`/home/photoinfo/${id}`);
    }

    }

};
</script>

<style lang="scss">
.mui-slider-indicator.mui-segmented-control {
  background-color: #fff;
}

.mui-fullscreen {
  position: fixed;
  top: 40px;
  height: 38px;
}

/* scroll滚动警告的处理方式参考：http://www.jianshu.com/p/baf61adc8667 */
* {
  touch-action: none;
}

.category-img-list {
  list-style: none;
  padding: 5px;
  padding-top: 30px;

  .img-list-item {
    position: relative;
    margin-bottom: 5px;

    div {
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.2);
      color: #fff;

      h2 {
        font-size: 16px;
      }

      p {
        color: #fff;
        margin-bottom: 0px;
      }
    }

    img[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
    }


    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
