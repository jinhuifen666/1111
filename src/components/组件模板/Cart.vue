<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner cart">
          <img data-v-0505f5cb="" src="http://vue.studyit.io/upload/201504/20/thumb_201504200059022920.jpg" alt="">
          <div>
            <h2 data-v-0505f5cb="">
              苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）</h2>
            <div data-v-0505f5cb="" class="info">
              <span data-v-0505f5cb="">￥5780</span> 
              <a data-v-0505f5cb="" href="#">删除</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner cart-buy">
          <div>
            <p>总计（不包含运费）</p>
            <p>已勾选商品&nbsp;
              <span>8</span>&nbsp;件&nbsp;&nbsp;总价：
              <span>￥1111</span></p>
          </div>
          <div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  align-items: center;

  h2 {
    font-size: 14px;
  }

  img {
    width: 60px;
    height: 60px;
  }

  span {
    color: #f00;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.cart-buy {
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #f00;
  }
}
</style>
