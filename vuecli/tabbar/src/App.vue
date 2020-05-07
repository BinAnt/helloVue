<template>
<div id="app">
  <TarBar>
    <TarBarItem v-for="tabbar in tabBars" :key="tabbar">
       <img slot="tabbar-img" class="tabbar-img" :src="tabbar.img" alt="">
      <div slot="tabbar-text" class="tabbar-text">{{tabbar.title}}</div> 
    </TarBarItem>
    <!-- <TarBarItem>
      <img slot="tabbar-img" class="tabbar-img" src="./assets/img/tabbar/home.png" alt="">
      <div slot="tabbar-text" class="tabbar-text">首页</div> 
    </TarBarItem>
    <TarBarItem>
      <img slot="tabbar-img" class="tabbar-img" src="./assets/img/tabbar/home.png" alt="">
      <div slot="tabbar-text" class="tabbar-text">首页</div> 
    </TarBarItem>
    <TarBarItem>
      <img slot="tabbar-img" class="tabbar-img" src="./assets/img/tabbar/home.png" alt="">
      <div slot="tabbar-text" class="tabbar-text">首页</div> 
    </TarBarItem> -->
  </TarBar>
</div>
</template>

<script>
import TarBar from './components/tabbar/TabBar'
import TarBarItem from './components/tabbar/TabBarItem'
export default {
  name: 'App',
  data() {
    return {
      tabBars: [
        {
          img: '/assets/img/tabbar/home.png',
          title: '首页',
          url: ''
        },
        {
          img: '/assets/img/tabbar/home.png',
          title: '分类',
          url: ''
        },
        {
          img: '/assets/img/tabbar/home.png',
          title: '购物车',
          url: ''
        },
        {
          img: '/assets/img/tabbar/home.png',
          title: '我的',
          url: ''
        }
      ]
    }
  },
  components: {
    TarBar,
    TarBarItem
  }
}
</script>
<style scoped>
  @import './assets/css/base.css'
</style>