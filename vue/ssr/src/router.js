import Router from 'vue-router'
import Vue from 'vue'
import t from './components/t.vue'
Vue.use(Router)
const routes = [
    {
        path: '/',
        component: t
    },
    {
        path: '/lazy-load',
        component: () => import(/* webpackChunkName: "lazy" */ './components/lazy.vue')  //  懒加载
    }
]
function createRouter() {
    return new Router({
        mode: 'history',
        routes  // short for `routes: routes`
    })
}
export { createRouter }