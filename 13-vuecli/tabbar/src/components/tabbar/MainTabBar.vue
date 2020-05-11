<template>
  <TarBar>
    <TarBarItem path="/home" activeColor="pink">
      <img slot="tabbar-img" class="tabbar-img" src="@/assets/img/tabbar/home.png" alt="">
      <img slot="tabbar-img-active" class="tabbar-img" src="@/assets/img/tabbar/home_active.png" alt="">
      <div slot="tabbar-text" class="tabbar-text">首页</div> 
    </TarBarItem>
    <TarBarItem path="/category" activeColor="pink">
      <img slot="tabbar-img" class="tabbar-img" src="@/assets/img/tabbar/cat.png" alt="">
      <img slot="tabbar-img-active" class="tabbar-img" src="@/assets/img/tabbar/cat_active.png" alt="">
      <div slot="tabbar-text" class="tabbar-text">分类</div> 
    </TarBarItem>
    <TarBarItem path="/cart" activeColor="pink">
      <img slot="tabbar-img" class="tabbar-img" src="@/assets/img/tabbar/cart.png" alt="">
      <img slot="tabbar-img-active" class="tabbar-img" src="@/assets/img/tabbar/cart_active.png" alt="">
      <div slot="tabbar-text" class="tabbar-text">购物车</div> 
    </TarBarItem>
    <TarBarItem path="/profile">
      <img slot="tabbar-img" class="tabbar-img" src="@/assets/img/tabbar/my.png" alt="">
      <img slot="tabbar-img-active" class="tabbar-img" src="@/assets/img/tabbar/my_active.png" alt="">
      <div slot="tabbar-text" class="tabbar-text">我的</div> 
    </TarBarItem>
  </TarBar>
</template>

<script>
import TarBar from '@/components/tabbar/TabBar'
import TarBarItem from '@/components/tabbar/TabBarItem'
export default {
    name: 'MainTabBar',
    components: {
        TarBar,
        TarBarItem
    }
  }
</script>

<style scoped>

</style>
