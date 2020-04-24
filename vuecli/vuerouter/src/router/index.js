//导入vue-router
import vueRouter from 'vue-router'
import Vue from 'vue'

//1.通过Vue.use(插件) 安装插件
Vue.use(vueRouter)

//2、创建vueRouter对象
const routes = [];

const router = new vueRouter({
    //配置路由和组件之间的应用的关系
    routes
})

//3、将router对象传入到Vue实例
export default router