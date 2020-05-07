<template>
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>
<script>
    export default {
        name: 'TarBar',
        components: {}
    }
</script>
<style scoped>
    #tab-bar {
  width: 100%;
  height: 49px;
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
</style>