<template>
    <div>
    <!-- 头部 -->
      <mt-header fixed title="内容管理系统">
        <a slot="left">
          <mt-button icon="back">返回</mt-button>
        </a>
      </mt-header>

      <!-- 出口 -->
      <router-view class='content'></router-view>
    <!-- 底部导航菜单 -->
      <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>
 
    </div>
</template>

<script>
export default {

}
</script>

<style>
.content{
  margin-top:40px;
}
</style>
