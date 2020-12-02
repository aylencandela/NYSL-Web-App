import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyA3SsvSe1Dkkm6tL56ywoRXZJf8HUkxMTw",
  authDomain: "nysl-webapp-849fa.firebaseapp.com",
  databaseURL: "https://nysl-webapp-849fa.firebaseio.com",
  projectId: "nysl-webapp-849fa",
  storageBucket: "nysl-webapp-849fa.appspot.com",
  messagingSenderId: "618884005884",
  appId: "1:618884005884:web:b5b4523d33a54be5723c79"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
