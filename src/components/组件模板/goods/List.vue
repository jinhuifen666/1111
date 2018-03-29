<template>
  <div class="goods-list">
    <ul>
      <li class="goods-item">
        <img src="http://vue.studyit.io/upload/201504/20/thumb_201504200046589514.jpg" alt="">
        <h2>华为（HUAWEI）荣耀6Plus 16G双4G版</h2>
        <div>
          <span class="price-cur">￥2195</span>
          <span class="price-prev">￥2499</span>
        </div>
        <p>
          <span>热卖中</span>
          <span>剩余60件</span>
        </p>
      </li>

      <li class="goods-item">
        <img src="http://vue.studyit.io/upload/201504/20/thumb_201504200046589514.jpg" alt="">
        <h2>华为（HUAWEI）荣耀6Plus 16G双4G版</h2>
        <div>
          <span class="price-cur">￥2195</span>
          <span class="price-prev">￥2499</span>
        </div>
        <p>
          <span>热卖中</span>
          <span>剩余60件</span>
        </p>
      </li>

      <li class="goods-item">
        <img src="http://vue.studyit.io/upload/201504/20/thumb_201504200046589514.jpg" alt="">
        <h2>华为（HUAWEI）荣耀6Plus 16G双4G版</h2>
        <div>
          <span class="price-cur">￥2195</span>
          <span class="price-prev">￥2499</span>
        </div>
        <p>
          <span>热卖中</span>
          <span>剩余60件</span>
        </p>
      </li>
    </ul>

    <!-- 加载更多 -->
    <mt-button plain size="large" type="primary">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .goods-list {
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .goods-item {
      width: 48%;
      margin: 1%;
      padding: 3px;
      border: 1px solid #ccc;
      box-shadow: 0 0 10px #ccc;

      h2 {
        font-size: 14px;
      }

      div {
        font-size: 14px;
        margin-top: 5px;

        .price-cur {
          color: #f00;
          margin-right: 10px;
        }
        .price-prev {
          text-decoration: line-through;
          color: #ccc;
        }
      }

      img {
        width: 100%;
      }

      p {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0 3px;
        color: #ccc;
      }
    }
  }
</style>
