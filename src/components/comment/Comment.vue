<template>
  <div class="comment">
        <h3>发表评论 </h3>
        <textarea  cols="30" rows="6" placeholder="   嘿，同志，有什么话要说得嘛 " v-model="content"></textarea>
        <mt-button type='primary' size='large' @click='sendCommend'>发表评论</mt-button>
        <ul class='comment-list'>
            <li class='comment-item' v-for='(item,i) in list' :key='i'>
                <h4>
                    <span>第{{ i + 1 }}楼</span>
                    <span>用户：{{ item.user_name}}</span>
                    <span>发表时间：{{ item.add_time | date}}</span>
                </h4>
                <p>{{ item.content}}</p>
            </li>
        </ul>
        <mt-button type='primary' size='large' plain @click='loaderMore'>加载更多</mt-button>

    </div>
</template>

<script>
export default {

//  接收父组件传递过来
props:['commentId'],

created(){
    console.log(this.commentId);
     this.getCommentsById();

},

data(){
    return{
         list:[],   //已经评论的数据
          pageIndex:1,   //表示评论的页数
          content:'',   //即将评论的数据
    }
},
methods:{
             // 根据ID拿到评论数据
    getCommentsById(){
        this.$http
            .get(`/api/getcomments/${this.commentId}?pageindex=${this.pageIndex}`)
            .then((res) => {
                const data = res.data;
                if(data.status === 0){
                    // this.list = data.message;
                    // 拼接，可以将之前显示的全部显示出来 
                    // ES5的方法
                    // this.list = this.list.concat(data.message);
                    // ES6的方法(扩展运算符 )
                    this.list = [...this.list,...data.message];
                    
                }
            })
    },

    // 加载更多
    loaderMore(){
        // 加载下一页的数据
        this.pageIndex++;
        // 调用加载方法
        this.getCommentsById();
    },

    //提交评论数据
    sendCommend(){
        if(this.content.trim().length === 0) return
        this.$http  
            .post(`/api/postcomment/${this.commentId}`,`content=${this.content}`)
            .then((res) => {
               if(res.data.status ===0){
                    this.list.unshift({
                    add_time:new Date(),
                    content:this.content,
                    user_name:'匿名用户'
                    
                })
                //清空
                this.content = '';
               }
            })

        
    }

}
}
</script>

<style lang='scss'>
.comment{
    h3{
        margin-top:20px;
    }
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
