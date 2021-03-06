import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Axios from 'axios'

// Axios({
//   url: 'http://api.qualife.com/out-site/get-banner'
//   // url: 'http://api.qualife.com/out-site/data',
// }).then(res => {
//   console.log(res);
  
// })

import qs from 'qs'

// let params = {name: 'liubin'}
// Axios.post('http://api.qualife.com/out-site/data', qs.stringify(params))
// .then(res => {
//   console.log(res);
// })

//2、axios发送并发请求

// Axios.all([Axios({
//   url: 'http://api.qualife.com/out-site/data',
//   params: {
//     name:'Bin',
//     firstName:'Ant'
//   }
// }), Axios({
//   url: 'http://api.qualife.com/out-site/get-banner'
// })]).then(results => {
//   console.log(results);
// })

// Axios.defaults.baseURL = 'http://api.qualife.com/out-site'
// Axios.defaults.timeout = 500

// Axios.all([Axios({
//   url: '/data',
//   method: 'post',
//   params: {
//     name:'Bin',
//     firstName:'Ant'
//   }
// }), Axios({
//   url: '/get-banner'
// })]).then(Axios.spread((res1, res2) => {
//   console.log(res1, res2);
// }))

import {request} from './network/request'

request({
  url: '/out-site/data',
  params: {
    name:'Bin',
    firstName:'Ant'
  }
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
