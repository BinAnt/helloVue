var app = new Vue({
    el: '#app',
    data: {
    	books: [
    		{
    			id: 1,
    			name: '哈利波特1',
    			num: 1,
    			date: '2020-3-30',
    			price: 1
    		},
    		{
    			id: 2,
    			name: '哈利波特2',
    			num: 1,
    			date: '2020-3-30',
    			price: 2
    		},
    		{
    			id: 3,
    			name: '哈利波特3',
    			num: 1,
    			date: '2020-3-30',
    			price: 3
    		},
    		{
    			id: 4,
    			name: '哈利波特4',
    			num: 1,
    			date: '2020-3-30',
    			price: 4
    		},
    		{
    			id: 5,
    			name: '哈利波特5',
    			num: 1,
    			date: '2020-3-30',
    			price: 5
    		}
    	]
    },
    methods: {
    	formatPrice (price) {
    		return '￥' + price.toFixed(2)
    	},
    	descrement (index) {
    		this.books[index].num--
    	},
    	increment (index) {
    		this.books[index].num++
    	},
    	moveOut (index) {
    		this.books.splice(index, 1)
    	}
    },
    computed: {
    	totalPrice () {
    		return this.books.reduce((totalPrice, current) => {	
    			return totalPrice + current.price * current.num
    		}, 0)
    	}
    },
    /*過濾器*/
    filters: {
    	showPrice (price) {
    		return '￥' + price.toFixed(2)
    	}
    }
})