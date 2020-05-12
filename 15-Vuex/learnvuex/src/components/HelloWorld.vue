<template>
  <div class="hello">
    <h2>---------Hello 内容---------</h2>
   <h2>{{$store.state.counter}}</h2>
   <h2>---------Hello getters---------</h2>
   <p>{{$store.getters.powerCounter}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
