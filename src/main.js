import Vue from 'vue'
import App from './App.vue'

import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App
    //only for development testing
    //, { props: { 'wait': 5000 } }
  ),
}).$mount('#app')
