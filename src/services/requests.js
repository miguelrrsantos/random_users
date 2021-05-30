import Vue from 'vue'

let base_endpoint = 'https://randomuser.me/api/'

export default {
    async get (parameters) {
        return await Vue.axios.get(base_endpoint, { params: parameters })
    },
}