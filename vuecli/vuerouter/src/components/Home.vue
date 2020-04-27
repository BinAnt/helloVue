<template>
  <div>
      <h2>我是首页标题</h2>
      <p>我是首页内容，呵呵呵</p>
      <router-link to="/home/news">新闻</router-link>
      <router-link to="/home/message">消息</router-link>
      
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "Home",
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">

</style>
