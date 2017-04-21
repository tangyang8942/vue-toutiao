import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Collect from '../views/Collect.vue'
import Care from '../views/Care.vue'
import My from '../views/My.vue'
import Detail from '../views/Detail.vue'
import Selfpage from '../views/Selfpage.vue'
import Editprofile from '../views/Editprofile.vue'
import Setup from '../views/Setup.vue'

Vue.use(Router);

const routes = [{
        path: '/home/:type',
        component: Home,
        name: 'home'
    },
    {
        path: '/collect/:kind',
        component: Collect,
        name: 'collect'
    },
    {
        path: '/care',
        component: Care,
        name: 'care'
    },
    {
        path: '/my',
        component: My,
        name: 'my'
    },
    {
        path: '/newsDetail/:id',
        component: Detail,
        name: 'newsdetail'
    },
    {
        path: '/selfpage',
        component: Selfpage,
        name: 'selfpage'
    },
    {
        path: '/editprofile',
        component: Editprofile,
        name: 'editprofile'
    },
    {
        path: '/setup',
        component: Setup,
        name: 'setup'
    },
    {
        path: '*',
        redirect: '/home/all?type=__all__'
    },
    {
        path: '',
        redirect: '/home/all?type=__all__'
    }
];

const router = new Router({
    mode: 'history',
    routes
})
// router.beforeEach((to, from, next)=>{
//     if(to.path == '/collect'){
//         console.log(1);
//         next()
//     }else{
//         next()
//     }
// })

export default router
