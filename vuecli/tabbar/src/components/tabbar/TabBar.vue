<template>
  <div id="tab-bar">
    <div class="tab-bar-item">首页</div>
    <div class="tab-bar-item">分类</div>
    <div class="tab-bar-item">购物车</div>
    <div class="tab-bar-item">我的</div>
  </div>
</template>
<script>
    export default {
        name: 'TarBar'
    }
</script>
<style scoped>
    #tab-bar {
  width: 100%;
  height: 90px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f1f1f1; 
  margin: 0;
  padding: 0;
  }
#tab-bar .tab-bar-item {
  width: 25%;
  text-align: center;
}
</style>