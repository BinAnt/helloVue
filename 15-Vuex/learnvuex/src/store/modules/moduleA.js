export default {
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