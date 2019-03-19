import Router from 'vue-router'
import Vue from 'vue'
import t from './components/t.jsx'
Vue.use(Router)
let router;
// if(module.hot) {
//     module.hot.accept(['./components/t.js','./components/lazy.js'], function() {
//         console.log('Accepting the updated printMe module!');
//         router = createRouter()
//     })
// }
let routes = [
    {
        path: '/',
        component: t
    },
    {
        path: '/lazy-load',
        component: () => import(/* webpackChunkName: "lazy" */ './components/lazy.jsx')  //  懒加载
    },
    {
        path: '/a',
        component: () => import(/* webpackChunkName: "a" */ './components/a.vue')  //  懒加载
    }
]
function createRouter() {
    return new Router({
        routes  // short for `routes: routes`
    })
}
router = createRouter()
export default router;