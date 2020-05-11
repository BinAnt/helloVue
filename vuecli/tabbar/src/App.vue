<template>
<div id="app">
  <MainTabBar/>
  <router-view></router-view>
</div>
</template>

<script>
import MainTabBar from './components/tabbar/MainTabBar'
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
    MainTabBar
  }
}
</script>
<style scoped>
  @import './assets/css/base.css'
</style>