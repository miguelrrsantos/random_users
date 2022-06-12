<template>
    <div id="app">
        <random-users :wait="wait" />
    </div>
</template>

<script>
import RandomUsers from './components/RandomUsers'
import axios from 'axios'

export default {
    name: 'App',

    axios,

    components: {
        RandomUsers
    },

    props: ['wait']
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
