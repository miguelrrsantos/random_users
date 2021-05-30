import Vue from 'vue'
import App from './App.vue'

import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

import vueCustomElement from 'vue-custom-element';

import RandomUsers from './components/RandomUsers.vue';

// Configure Vue to ignore the element name when defined outside of Vue.
Vue.config.ignoredElements = [
  'random-users'
];

// Enable the plugin
Vue.use(vueCustomElement);

// Register your component
Vue.customElement('random-users', RandomUsers, {});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
