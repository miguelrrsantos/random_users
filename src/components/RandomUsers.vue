<template>
    <div>
        <h1>Random Users</h1>
        <div class="header">
            <p>
                <strong>Please select gender:</strong>
                <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    v-model="apiParameters.gender"
                />
                <label for="male">Male</label>

                <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    v-model="apiParameters.gender"
                />
                <label for="female">Female</label>

                <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    v-model="apiParameters.gender"
                />
                <label for="other">Both</label>
            </p>
            <button type="button" @click="fetchRandomUsers">Load Users</button>
            <button type="button" @click="resetRandomUsers">Reset Table</button>
        </div>
        <div v-if="!error.status">
            <Grid
                :columns="gridColumns"
                :users="randomUsers"
                :loading="loading"
            />
        </div>
        <div v-else>{{ error.message }}</div>
    </div>
</template>

<script>
import randomUserService from '../services/requests'
import Grid from './Grid'

export default {
    name: 'RandomUser',

    components: {
        Grid
    },

    created () {
        this.fetchRandomUsers()
    },

    data () {
        return {
            randomUsers: [],

            error: {
                status: false,
                message: ''
            },

            apiParameters: {
                results: 10,
                gender: 'male'
            },

            gridColumns: ["name", "gender", "picture"],

            loading: false
        }
    },

    methods: {
        async fetchRandomUsers () {
            let parameters = this.apiParameters

            this.loading = true

            let response
            setTimeout(async () => {

                response = await randomUserService.get(parameters)

                if (response.status === 200) {
                    this.randomUsers = this.randomUsers.concat(response.data.results)
                    this.error.status = false
                } else {
                    this.error.status = true
                    this.error.message = response.data.error
                }

                this.loading = false
            }, 2000)
        },

        resetRandomUsers () {
            this.randomUsers = []
        }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px;
}
.header p {
    margin: 0 10px;
}

.header button {
    margin: 0 10px;
}
</style>
