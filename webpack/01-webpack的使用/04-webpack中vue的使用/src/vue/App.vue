<template>
    <div id="app">
        <h2 class="title">{{message}}</h2>
        <button @click="clickBtn">按钮</button>
        <Cpn/>
    </div>
</template>

<script>
import Cpn from './Cpn.vue'

export default {
    name: 'App',
    data() {
    return {
        message: 'Hello World!!!'
    }
    },
components: {
        Cpn
    },
methods: {
    clickBtn () {
        console.log('click');
        
    }
}
}
</script>
<style scoped>
    .title {
        color: green;
    }
</style>