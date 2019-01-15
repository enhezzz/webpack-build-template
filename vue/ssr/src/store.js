import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function createStore() {
    return new Vuex.Store({
        state: {
            data: ''
        },
        mutations: {
            initData(state, payload) {
                state.data = payload
            }
        },
        actions: {
            fetchItem ({ commit }) {
              // `store.dispatch()` 会返回 Promise，
              // 以便我们能够知道数据在何时更新
              return new Promise((resolve, reject)=> {
                  setTimeout(()=> {
                    commit('initData', 'ssr data from server')
                    resolve()
                  },2000)
              })
            }
          },
    })
}
export {createStore}