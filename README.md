# Vue项目 - CMS（内容管理系统）

## 技术

```html
vue + vue-router + axios + mint-ui + mui

webpack + babel + ES6
```

## 项目结构

```html
/node_module  ------------- 项目中使用的包
/src  --------------------- 项目源码
  App.vue ----------------- 根组件
  index.html  ------------- 页面
  main.js ----------------- 入口js文件
.babelrc  ----------------- babel 的配置文件
.gitignore  --------------- git的忽略文件
package.json  ------------- 项目描述组件
README.md ----------------- 项目介绍
webpack.config.js --------- webpack的配置文件
```

## 项目功能

- 1 App组件（项目入口）搭建
  - header（mint-ui header组件）
  - footer（注意MUI样式覆盖的问题 - tabbar）
  - content（路由的使用，别忘了use注册路由）
- 2 首页
  - 轮播图（mint-ui Swipe）
  - 九宫格（mui grid-default 60px）
- 3 新闻咨询
  - 新闻列表（mui 中的 media-list）
  - 新闻详情
  - 评论
- 4 图片分享
  - 图片列表（mui tab-top-webview-main） http://dev.dcloud.net.cn/mui/ui/#scroll
  - 图片详情（mint-ui lazy-load）
  - 图片详情预览（npm i -S vue-preview）
- 5 商品购买
  - 商品列表
  - 商品详情（mui card、numbox）
- 6 购物车
  - 每个商品（card）
  - 开关（mint-ui switch）
  - 购物车商品总数 和 总价
  - 商品删除

## 代码片段

```js
/* webpack.config.js */

// 有利于开发期间定位错误信息
devtool: 'eval-source-map',
```

```css
/* 文字内容超过长度以后省略号显示 */
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

```css
/*
  photo/List.vue 组件中使用mui scroll插件后，在Chrome浏览器中有警告提示
  参考这篇文章，查看原因：
  scroll滚动警告的处理方式参考：http://www.jianshu.com/p/baf61adc8667

  解决方案：
*/

.mui-scroll {
  touch-action: none;
}
```

```js
// vue-router 编程式导航：
// https://router.vuejs.org/zh-cn/essentials/navigation.html

// 什么情况下该使用编程式导航？？？
// 一般情况下，可以通过 router-link 来实现路由的跳转。但是，如果该标签不能被转化为a标签
// 此时，应该使用编程式导航。通过js代码调用 this.$router.push() 来实现路由跳转

showInfo(id) {
  this.$router.push(`/home/photoinfo/${id}`)

  this.$router.push({ path: `/home/photoinfo/${id}` })

  // name 是路由规则中的配置的name属性
  this.$router.push({ name: 'user', params: { userId: 123 }})
}
```

```js
/*
  非Vue插件的使用方式

  以 axios 为例：添加到 Vue 的原型对象中，在组件中就可以通过 this.$http 调用axios了
*/

import axios from 'axios'
Vue.prototype.$http = axios
```

```html
<style scoped>
  scope 作用域

  scoped 属性的说明：
  1 添加该属性后，样式只会在当前组件中生效
  2 scoped属性，不会对通过 v-html 动态生成的内容起作用，所以，如果有 v-html 生成的内容需要设置样式，不要添加该属性
</style>
```

## 项目功能的说明

### 顶部导航菜单的处理

- 1 导入 mint-ui 的 Header/Button 组件
- 2 在 App.vue 中使用 导航菜单 组件
- 3 因为导航菜单是固定定位, 所以需要将固定定位吞掉的这部分空出来
- 4 统一给内容区域添加 margin-top 来空出这部分区域

### mui的使用步骤

- 1 找到 mui包文件 拷贝到项目的lib目录中
- 2 找到要使用的 mui 功能( tabbar.html )的HTML结构, 复制到 App.vue 组件中
- 3 在 main.js 中导入mui的css文件

### 如何开始一个新功能

- 1 创建这个功能的组件
- 2 配置路由
- 3 修改导航菜单（router-link to=""）

### vue-preview 插件的使用

- 1 安装： npm i vue-preview -S
- 2 在 main.js 中 `import VuePreview from 'vue-preview'; Vue.use(VuePreview)`
- 3 在 photos/Inof.vue 中使用 `<vue-preview :slides="图片列表数组"></vue-preview>`
- 4 注意：图片列表数组的数据必须按照插件要求的数据格式来处理

```js
[
  {
    src: '大图片的src',
    msrc: '缩略图的src',
    alt: '图片下载失败时，展示的文字',
    title: '图片的标题',
    w: 600, // 展示大图的宽度
    h: 400  // 展示大图的高度
  }
]
```

### 飞舞的小球（加入购物车动画效果）

- 说明：DOM元素展示和隐藏的时候，会触发动画钩子函数

- 1 使用 transition组件 包裹要执行动画效果的HTML元素
- 2 给 transition组件 添加动画钩子函数（before-enter和enter 两个即可）
- 3 在 beforeEnter方法中，设置小球的初始位置（通过 transform 设置）
- 4 在 enter方法中，设置小球的结束位置（通过 transform 设置）
- 5 点击加入购物车按钮，让小球的 isShow = true （展示小球）
- 6 在 enter方法中，让小球的 isShow = false （隐藏小球）

## vuex状态管理 + 购物车

- [vuex](https://vuex.vuejs.org/zh-cn/intro.html)
- 概述：vuex帮助我们集中管理共享数据，解决了组件通讯的难题
- 使用vuex后：1 共享数据由vuex提供（state） 2 操作数据的方法也由vuex提供（mutations）
- 也就是说：只要使用共享数据，就到vuex中获取或调用方法修改

```html
组件仍然保有局部状态

使用 Vuex 并不意味着你需要将所有的状态放入 Vuex。虽然将所有的状态放到 Vuex 会使状态变化更显式和易调试，但也会使代码变得冗长和不直观。如果有些状态严格属于单个组件，最好还是作为组件的局部状态。你应该根据你的应用开发需要进行权衡和确定。
```
