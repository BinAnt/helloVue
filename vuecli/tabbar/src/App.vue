<template>
<div id="app">
  <TarBar></TarBar>
</div>
</template>

<script>
import TarBar from './components/tabbar/TabBar'
export default {
  name: 'App',
  components: {
    TarBar
  }
}
</script>
<style scoped>
  @import './assets/css/base.css'
</style>