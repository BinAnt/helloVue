import { INCREMENT } from './mutation-types'

export default {
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
  }