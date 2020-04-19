export default {
    template:  `
    <div id="app">
        <h2>{{message}}</h2>
        <button @click="clickBtn">按钮</button>
    </div>
`,
data() {
    return {
        message: 'Hello World!!!'
    }
},
methods: {
    clickBtn () {
        console.log('click');
        
    }
}
}