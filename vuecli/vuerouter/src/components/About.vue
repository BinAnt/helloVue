<template>
  <div>
      <h2>我是关于标题</h2>
      <p>我是关于内容，哈哈哈</p>
  </div>
</template>

<script>
export default {
    name: "About",
    data() {
        return {

        }
  },
  created() {
    console.log('About created');
  },
  destroyed() {
    console.log('About destroyed');
    
  },
  components: {

  }
  }
</script>

<style scoped lang="scss">

</style>
