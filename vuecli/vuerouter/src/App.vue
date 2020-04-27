<template>
  <div id="app">
  <router-view></router-view>
  <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
  <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
  <!-- <button @click="clickHome">首页</button>
  <button @click="clickAbout">关于</button> -->

  <router-link to="/home">首页</router-link>
  <router-link to="/about">关于</router-link>
  <router-link :to="'/user/'+userId">用户</router-link>
  <!-- <router-link to="/profile">档案</router-link> -->
  <router-link :to="{path: '/profile', query: {name: 'ant', age: '18', height: '170'}}">档案</router-link>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'ant'
    }
  },
  methods: {
    clickHome() {
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    clickAbout() {
      // this.$router.push('/about')
      this.$router.replace('/about')
    }
  }
}
</script>

<style>
.router-link-active {
  color: #ff0000;
}
/* .active {
  color: #ff0000;
} */
</style>
