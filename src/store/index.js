import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    landscape: window.matchMedia("(min-width: 600px)").matches
  },
  mutations: {
    listenResize(state) {
      window.addEventListener(
        'resize',
        () => (state.landscape = window.matchMedia("(min-width: 600px)").matches)
      );
    }
  },
  actions: {
  },
  modules: {
  }
})
