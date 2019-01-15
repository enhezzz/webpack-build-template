import Vue from 'vue'
import App from './app.vue'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'
function createApp() {
    let router = createRouter()
    let store = createStore()
    // 同步路由状态(route state)到 store
    sync(store, router)
    const app = new Vue({
        router,
        store,
        render: (h) => h(App)
    })
    return { app, router, store }
}

export { createApp }
