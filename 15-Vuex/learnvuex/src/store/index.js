import Vue from 'vue'
import Vuex from 'vuex'

import { INCREMENT } from './mutation-types'

const moduleA = {
  state: () => ({
    name: 'zhangsan'
  }),
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    asyncUpdateName(context, payload) {
      setTimeout(() => {
        context.commit('updateName', payload)
      })
    }
  },
  getters: {
    getName1(state) {
      return state.name + '111'
    },
    getName2(state, getters) {
      return getters.getName1 + '2222'
    },
    getName3(state, getters, rootState) {
      return getters.getName2 + rootState.counter
    }
  }
}

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
    a: moduleA
  }
})
