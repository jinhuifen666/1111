<template>
  <div class="news-list">
      <ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell mui-media" v-for='item in list' :key='item.id' @click='getNewsInfo(item.id)'>
				<a href='javascript:void(0);' class="mui-navigate-right">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h4 class="news-title mui-ellipsis">{{ item.title }}</h4>
						<p class='news-desc'>
							<span>发表时间：{{ item.add_time |date('YYYY-MM-DD HH:mm:ss') }} </span>
							<span>点击次数：{{ item.click }}次</span>
						</p>
					</div>
				</a>
			</li>	
		</ul>
  </div>
</template>

<script>
// 发送axios请求
export default {
// 因为在页面打开数据就应该拿到，所以在钩子函数中发送请求
	created(){
		this.getnewslist();
	},
	// 提供数据
	data(){
		return{
			list:[]
		}
	},
	// 提供方法
	methods:{
		// 获取新闻列表
		getnewslist(){
			this.$http
				.get('/api/getnewslist')
				.then((res) => {
					const data = res.data;
					if(data.status === 0){
						this.list = data.message;
					}
				})
		},
		// 编程式导航
		getNewsInfo(id){
			this.$router.push(`/home/info/${id}`);
		}
	}
}
</script>

<style lang = 'scss'>
.news-list{
	.mui-table-view-cell{
		.news-title{
			font-size: 16px;
		}
		.news-desc{
			font-size: 12px;
			color:skyblue;
			display:flex;
			justify-content: space-between;
		}
		.mui-table-view-cell {
			padding: 11px 14px;
		}
	}
	.mui-table-view-chevron .mui-table-view-cell {
    padding-right: 55px;
}
}
</style>
