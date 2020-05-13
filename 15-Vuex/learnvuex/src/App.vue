<template>
  <div id="app">
    <h2>-----------APP内容------------</h2>
    <h2>{{$store.state.info}}</h2>
  <div>计数器：{{$store.state.counter}}</div>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="updateInfo">修改信息</button>
  </div>
  <h2>--------APP getters-------</h2>
  <p>{{$store.getters.powerCounter}}</p>
  <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import { INCREMENT } from './store/mutation-types'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.$store.dispatch(INCREMENT)
      // this.$store.commit(INCREMENT)
    },
    decrement() {
      this.$store.commit('decrement')
    },
    updateInfo() {
      // this.$store.commit('updateInfo')
      // this.$store.dispatch('aUpdateInfo', {
      //   'name': 'Ant',
      //   success: () => {
      //     console.log('里面已经执行完成');
          
      //   }
      // })

      this.$store
      .dispatch('aUpdateInfo', {'name': 'Ant'})
      .then(res => {
        console.log(res);
      })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
