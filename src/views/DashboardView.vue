<template>
    <Sidenav></Sidenav>
        <div class="main">
            <div class="parent">
                <div class="div1" style="border: 1px solid white;">NOTIFICAÇOES </div>
                <div class="div2" style="border: 1px solid white;"> CALENDARIO </div>
                <div class="div3" style="border: 1px solid white;"> NOTICIAS </div>
                <div class="div4" style="border: 1px solid white;"> CLASSIFICAÇAO </div>
                <div class="div5" style="border: 1px solid white;"> FANTASY </div> 
                <div class="div6" style="border: 1px solid white;"> STATS PILOTO FAVORITO </div>
            </div>
            <h1>DASHBOARD</h1>
            <v-btn @click="logout">LOGOUT</v-btn>
        </div>       
</template>

<script>
import { useUserStore } from "@/stores/user";
import Sidenav from "../components/sidenav.vue";
export default {
    
    data() {
        return {
            store: useUserStore(),
        };
    },

    components: {
        Sidenav,
    },
    
    mounted() {
        
    },

    methods: {
        logout() {
      this.store.logout();
      this.$router.push({ name: "home" });
    },
    },
};
</script>

<style>
.parent {
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: repeat(6, 1fr);
grid-column-gap: 10px;
grid-row-gap: 10px;
text-align: center;
}

.div1 { grid-area: 1 / 5 / 4 / 7; }
.div2 { grid-area: 4 / 5 / 7 / 7; }
.div3 { grid-area: 4 / 3 / 7 / 5; }
.div4 { grid-area: 4 / 1 / 7 / 3; }
.div5 { grid-area: 3 / 1 / 4 / 5; }
.div6 { grid-area: 1 / 1 / 3 / 5; }

</style>