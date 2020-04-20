<template>
    <div>
        <h2>我是cpn 的标题</h2>
        <p>我是内容，哈哈哈哈</p>
        <h2>{{name}}</h2>
    </div>
</template>

<script>
export default {
    name: 'Cpn',
    data () {
        return {
            name: 'Ant Bin'
        }
    }
}
</script>
<style scoped>
</style>