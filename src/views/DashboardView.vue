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
          <v-btn size="small" @click="perfil">Perfil</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn size="small" @click="logout">Logout</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
            </div>
            <div class="parent">
                <div class="div1" style="border: 1px solid white;">NOTIFICAÇOES </div>
                <div class="div2" style="border: 1px solid white;">
                  CALENDARIO
                  <div class="calendar-grid">
                    <div class="day" v-for="day in 30" :key="day">{{ day }}</div>
                  </div>
                </div>
                <div class="div3" style="border: 1px solid white;"> NOTICIAS </div>
                <div class="div4" style="border: 1px solid white;">
                  CLASSIFICAÇAO
                  <div class="pilot-card" v-for="pilot in topPilots" :key="pilot.id">
                    <img :src="pilot.photo" alt="Pilot Photo" class="pilot-photo">
                    <div class="pilot-info">
                      <p>{{ pilot.name }}</p>
                      <p>{{ pilot.number }} - {{ pilot.team }}</p>
                      <p>Points: {{ pilot.points }}</p>
                    </div>
                  </div>
                </div>
                <div class="div5" style="border: 1px solid white;">
                  <img src="../img/components/fantasy/Piloto Fantasy.png" style="height: 100%;">
                  <img src="../img/components/fantasy/logo fantasy 1.png" style="width: 40%;">
                  <img src="../img/components/fantasy/Car Fantasy 2.png" style="position: relative;left: 10%;">
                </div> 
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
        topPilots() {
      // Replace this with your actual data or logic to fetch the top pilots
      return [
        {
          id: 1,
          firstName: "Charles",
          name: "Leclerc",
          number: 16,
          team: "ferrari",
          points: 338,
          photo: "../img/drivers/leclerc.png",
        },
        {
          id: 2,
          firstName: "Lewis",
          name: "Hamilton",
          number: 44,
          team: "mercedes",
          points: 327,
          photo: "../img/drivers/hamilton.png",
        },
        {
          id: 3,
          firstName: "Max",
          name: "Verstappen",
          number: 33,
          team: "redbull",
          points: 325,
          photo: "../img/drivers/verstappen.png",
        },
      ];
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
    perfil() {
      this.$router.push({ name: "perfil" });
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

.div1 { grid-area: 1 / 5 / 4 / 7;
 }
 .div2 {
  grid-area: 4 / 5 / 7 / 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.div3 { grid-area: 4 / 3 / 7 / 5;
  background-image: url('../img/backgrounds/News Photo.png');
  background-size: cover; /* ou 'contain' se você quiser que a imagem se ajuste dentro da div */
  background-repeat: no-repeat;
  background-position: center;
}
.div4 { grid-area: 4 / 1 / 7 / 3; }
.div5 {
  grid-area: 3 / 1 / 4 / 5;
  background-image: url('../img/backgrounds/backFantasy.jpg');
  background-size: cover; /* ou 'contain' se você quiser que a imagem se ajuste dentro da div */
  background-repeat: no-repeat;
  background-position: bottom center;
  display:flex;
  align-items: center;
  max-height: 100px;
}
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

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  width: 100%;
  height: 100%;
}

.day {
  border: 1px solid black;
  padding: 10px;
  text-align: center;
}

.pilot-card {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.pilot-photo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
</style>