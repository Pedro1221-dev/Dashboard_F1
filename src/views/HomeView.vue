<template>
    <div>
        <RouterLink :to="{ name: 'login' }">Login</RouterLink>
        <RouterLink :to="{ name: 'register' }" class="ml-10">Register</RouterLink>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
    name: 'DashboardF1HomeView',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>