<template>
    <div class="grid-wrapper">
        <table v-if="users.length">
            <thead>
                <tr>
                    <th>row</th>
                    <th v-for="(key, index) in columns" :key="index">
                        {{ key }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(entry, index) in users" :key="entry.login.uuid">
                    <td>{{ index + 1 }}</td>
                    <td v-for="(key, index) in columns" :key="index">
                        <span v-if="key === 'name'">
                            {{
                                entry[key].title +
                                ' ' +
                                entry[key].first +
                                ' ' +
                                entry[key].last
                            }}
                        </span>
                        <span v-else-if="key === 'email'">
                            <a :href="'mailto:' + entry[key]">
                                {{ entry[key] }}
                            </a>
                        </span>
                        <span v-else-if="key === 'location'">
                            {{
                                entry[key].city +
                                ' / ' +
                                entry[key].state +
                                ' / ' +
                                entry[key].country
                            }}
                        </span>
                        <span v-else-if="key === 'age'">
                            {{ entry.dob.age }}
                        </span>
                        <span v-else-if="key === 'picture'">
                            <img :src="entry[key].medium" />
                        </span>
                        <span v-else>
                            {{ entry[key] }}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="loader" v-if="loading"></div>
    </div>
</template>

<script>
export default {
    name: 'Grid',

    props: {
        columns: Array,
        users: Array,
        loading: {
            type: Boolean,
            default: false
        }
    },

    created () {

    },
}
</script>

<style scoped>
.grid-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.loader {
    margin: 10px 0;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    border-top: 6px solid blue;
    border-right: 6px solid green;
    border-bottom: 6px solid red;
    border-left: 6px solid pink;
}

/* Safari */
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
}

th {
    background-color: #42b983;
    color: rgba(255, 255, 255, 0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

td {
    background-color: #f9f9f9;
}

th,
td {
    min-width: 120px;
    padding: 10px 20px;
}
</style>