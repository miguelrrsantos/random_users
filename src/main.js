import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App
    //only for development testing
    //, { props: { 'wait': 5000 } }
  ),
}).$mount('#app')
