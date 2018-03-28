<template>
<div class="home">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
</div>
</template>

<script>
// 发送请求 axios

export default {
    // 在页面打开就需要拿到轮播图数据，所以在created钩子函数中发送请求
    created(){
        console.log(1111)
    }

}
</script>

<style>

</style>
