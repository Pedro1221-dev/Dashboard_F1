<template>
    <Sidenav></Sidenav>
        <div class="main">
            <div class="profile">
    <v-menu :location="location">
      <template v-slot:activator="{ props }">
        <v-btn
          size="small"
          color="primary"
          dark
          v-bind="props"
          class="profile-button"
        >
        {{ user}}
            <img src="../img/avatars/1.png" alt="avatar" class="avatar">
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-btn size="small">Perfil</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn size="small" @click="logout">Logout</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
            </div>
            <div class="parent">
                <div class="div1" style="border: 1px solid white;">NOTIFICAÇOES </div>
                <div class="div2" style="border: 1px solid white;"> CALENDARIO </div>
                <div class="div3" style="border: 1px solid white;"> NOTICIAS </div>
                <div class="div4" style="border: 1px solid white;"> CLASSIFICAÇAO </div>
                <div class="div5" style="border: 1px solid white;"> FANTASY </div> 
                <div class="div6" style="border: 1px solid white;"> STATS PILOTO FAVORITO </div>
            </div>
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

    computed: {
        user() {
        return this.store.getUser.username;
        },
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

<style scoped>
.parent {
        position: relative;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    text-align: center;
    height: 84vh;
    top: -4vh;
}

.div1 { grid-area: 1 / 5 / 4 / 7; }
.div2 { grid-area: 4 / 5 / 7 / 7; }
.div3 { grid-area: 4 / 3 / 7 / 5; }
.div4 { grid-area: 4 / 1 / 7 / 3; }
.div5 { grid-area: 3 / 1 / 4 / 5; }
.div6 { grid-area: 1 / 1 / 3 / 5; }

.profile {
    position: relative;
    text-align: right;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    top: -5vh;
}

.avatar{
    width:25px !important; 
    height:25px !important;
    margin-left: 20% !important;
}

.profile-button{
    background-color: #494949 !important;
    border-radius: 20px !important;
}
</style>