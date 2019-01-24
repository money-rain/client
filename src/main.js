import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firestore from './firebase'

Vue.config.productionTip = false
Vue.prototype.$firestrore = firestore
Vue.use(require('vue-shortkey'))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
