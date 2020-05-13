import Vue from 'vue'
import Vuex from 'vuex'

import { INCREMENT } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 10,
    info: {
      name: 'qq',
      age: 20
    }
  },
  mutations: {
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    updateInfo(state, obj) {
      Vue.set(state.info, 'name', obj.name)
      // obj.success();
      // state.info.name = 'Bin'
    }
  },
  actions: {
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo', payload)
          resolve('aUpdateInfo 执行完成')
        }, 1000)
      })
     
    },
    [INCREMENT] (context, payload) {
      
      context.commit(INCREMENT)
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    }
  },
  modules: {
  }
})
