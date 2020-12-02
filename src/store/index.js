import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import 'firebase/auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    landscape: window.matchMedia("(min-width: 600px)").matches,
    messages:[]
  },
  mutations: {
    listenResize(state) {
      window.addEventListener(
        'resize',
        () => (state.landscape = window.matchMedia("(min-width: 600px)").matches)
      );
    },
    // Ya no es necesaria porque está la de abajo que escucha en todo momento si hay un longin o logout
    // changeUserInfo(state, payload) {
    //   // payload es la nueva info que llega puede ir otro nombre, pero state se tiene que llamar state si o si
    //   state.user = payload
    // },
    listenUser(state) {  
      // Esta funcion hace que por mas que se recarge la pag el usuario se va mantener hasta que elija deslogearse
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          state.user = user
        } else {
          state.user = null
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
