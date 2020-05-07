<template>
    <div class="tab-bar-item">
        <slot name="tabbar-img"></slot>
        <slot name="tabbar-text"></slot>
      <!-- <img class="tabbar-img" src="../../assets/img/tabbar/home.png" alt="">
      <div class="tabbar-text">首页</div>  -->
    </div>
</template>

<script>
export default {
    name: 'TabBarItem'
  }
</script>

<style scoped>
.tab-bar-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.tabbar-img {
  width: 32px;
  height: 32px;
}
.tabbar-text {
  font-size: 12px;
}
</style>
