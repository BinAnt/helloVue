<template>
  <div>
      <h2>我是用户标题</h2>
      <p>我是用户内容，嘿嘿嘿嘿</p>
      <span>{{userId}}</span>
      <h2>{{$route.params.userId}}</h2>
  </div>
</template>

<script>
export default {
    name: 'User',
    computed: {
        userId() {
            return this.$route.params.userId
        }
    }
  }
</script>

<style scoped lang="scss">

</style>
