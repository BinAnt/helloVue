import { INCREMENT } from './mutation-types'

export default {
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
  }