import VueRouter from 'vue-router'
import Vue from 'vue'

const About=()=>import('../pages/About')
const Home=()=>import('../pages/Home')
const New=()=>import('../pages/New')
const Profile=()=>import('../pages/Profile')
Vue.use(VueRouter)

const routes=[
    {
        path:'/home',
        component:Home,
        meta:{title:'主页'},
    },
    {
        path:'/about',
        meta:{title:'关于'},
        component:About,
        
    },
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/new',
        meta:{title:'query'},
        component:New
    },

    {
        path:'/profile',
        meta:{title:'我的'},
        component:Profile
    }

]

const router=new VueRouter({
    routes,
    mode:'history',
})

export default router