<template>
  <div class="num-box">
    <button type="button" class="num-btn num-btn-minus" @click="minus">-</button> 
                        <!-- 绑定购买的数量 -->
    <input type="number" v-model='NumberCount' class="num-input-numbox"> 
    <button type="button" class="num-btn num-btn-plus" @click="plus">+</button>
  </div>
</template>

<script>
export default {

  // 接收父组件传递过来的属性
  // 子组件中提供的v-model传递给父组件的，规定用value接收
  props:['value','total'],

  data(){
    return{
      NumberCount:this.value,   //购买数量
    }
  },
  methods: {
    // -
    minus() {
      console.log('-');
      // 如果当前点击的时候，中间数字为0，就不准在点击  -
      if(this.NumberCount <= 0) return;
      this.NumberCount--;
    },

    // +
    plus() {
      console.log('+');
      // 如果当前点击中间的数字比库存大，就不准在点击
      if(this.NumberCount >= this.total ) return
      this.NumberCount++;
    }
  },
  watch:{
    NumberCount(NewVal){
      // 判断当前在购买数值框里的输入的数字大小 ，规定，负数不能输入，比库存大的数组也不能输入
      if(NewVal < 0){
        this.NumberCount = 0
      }else if(NewVal > this.total){
        this.NumberCount = this.total;
      }
      // 父组件会自动传递一个Input事件，子组件调用 
      this.$emit('input',this.NumberCount - 0);
    }
  }
}
</script>

<style scoped lang="scss">
.num-box {
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 120px;
  height: 25px;
  padding: 0 40px 0 40px;
  vertical-align: top;
  vertical-align: middle;
  border: solid 1px #bbb;
  border-radius: 3px;
  background-color: #efeff4;

  [disabled] {
    color: #c0c0c0;
  }

  .num-btn {
    font-size: 18px;
    font-weight: normal;
    line-height: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 40px;
    height: 100%;
    padding: 0;
    color: #555;
    border: none;
    border-radius: 0;
    background-color: #f9f9f9;
  }

  .num-btn-minus {
    left: 0;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  .num-btn-plus {
    right: 0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .num-input-numbox {
    display: inline-block;
    overflow: hidden;
    width: 100% !important;
    height: 100%;
    margin: 0;
    padding: 0 3px !important;
    text-align: center;
    text-overflow: ellipsis;
    word-break: normal;
    border: none !important;
    border-right: solid 1px #ccc !important;
    border-left: solid 1px #ccc !important;
    border-radius: 0 !important;
  }
}
</style>
