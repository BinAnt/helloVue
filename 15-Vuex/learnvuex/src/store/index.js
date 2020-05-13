import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

const state = {
  counter: 10,
  info: {
    name: 'qq',
    age: 20
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})
