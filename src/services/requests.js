import axios from 'axios'

let base_endpoint = 'https://randomuser.me/api/'

export default {
    async get (parameters) {
        return await axios.get(base_endpoint, { params: parameters })
    },
}