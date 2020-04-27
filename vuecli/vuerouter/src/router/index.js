//导入vue-router
import vueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')

//1.通过Vue.use(插件) 安装插件
Vue.use(vueRouter)

//2、创建vueRouter对象
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/user/:userId',
        component: User
    }
];

const router = new vueRouter({
    //配置路由和组件之间的应用的关系
    routes,
    mode: 'history'
})

//3、将router对象传入到Vue实例
export default router