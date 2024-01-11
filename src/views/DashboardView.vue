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
            <img :src="`../src/img/avatars/${store.user.avatarNumber}.png`" alt="avatar" class="avatar">
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
                <div class="div1">NOTIFICAÇOES 
                  <v-alert v-if="raceFinished"
                          color="#D9D9D9"
                          theme="dark"
                          density="compact"
                          closable
                          :style="{ fontSize: '15px', width: '350px', margin: '10px', 'margin-left': '25px' }"
                  >
                    <div style="display: flex; align-items: center;">
                      <div style="display: inline-flex; border-radius: 50%; background: #BCBCBC; padding: 10px; align-items: center; justify-content: center; margin-right: 10px;">
                        <v-icon>mdi-flag-checkered</v-icon>
                      </div>
                      <span>A corrida ao vivo terminou!</span>
                    </div>
                  </v-alert>
                </div>
                <RouterLink :to="{ name: 'calendar' }" class="div2">
                  <div class="calendar-grid">
                    <div class="day" v-for="day in 31" :key="day">{{ day }}</div>
                  </div>
                </RouterLink>
                <div class="div3">
                  <h3>TITULO</h3>
                  <p style="font-size: small;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, consectetur neque quis eius facilis nemo obcaecati fugit. Iste cupiditate natus quo eos nisi, deleniti perspiciatis ut, neque, fuga commodi in.</p>
                </div>
                <RouterLink :to="{ name: 'standings' }" class="div4">
                  Classificaçao Geral
                  <div class="grid-geral">
                    <img src="../img/components/main/Leclerc.png" alt="">
                    <img src="../img/components/main/Hamilton.png" alt="">
                    <img src="../img/components/main/Verstappen.png" alt="">
                  </div>
                </RouterLink>
                <div class="div5">
                  <img src="../img/components/fantasy/Piloto Fantasy.png" style="height: 100%;">
                  <img src="../img/components/fantasy/logo fantasy 1.png" style="width: 40%;">
                  <img src="../img/components/fantasy/Car Fantasy 2.png" style="position: relative;left: 10%;">
                </div> 
                <div class="div6"> STATS PILOTO FAVORITO </div>
            </div>
        </div>       
</template>

<script>
import { useUserStore } from "@/stores/user";
import { RouterLink } from 'vue-router';
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
        raceFinished() {
          return sessionStorage.getItem('finishedRace') === 'true';
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
    height: 88vh;
    top: -4vh;
}

.div1,.div2,.div3,.div4,.div5,.div6 {
border-radius:10px
}
.div1 { grid-area: 1 / 5 / 4 / 7;
  background: 
    linear-gradient(rgba(54, 70, 82, 0.35), rgba(54, 70, 82, 0.35)), 
    url('../img/backgrounds/backNotification.png');
 }
 .div2 {
  grid-area: 4 / 5 / 7 / 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: 
    linear-gradient(rgba(73, 73, 73, 0.90), rgba(73, 73, 73, 0.90)), 
    url('../img/backgrounds/backCalendario.png');
}
.div3 { grid-area: 4 / 3 / 7 / 5;
  background-image:
   linear-gradient( rgba(65, 65, 65, 0),rgba(0, 0, 0, 1)),
   url('../img/backgrounds/News Photo.png');
  background-size: cover; /* ou 'contain' se você quiser que a imagem se ajuste dentro da div */
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.div4 { grid-area: 4 / 1 / 7 / 3;
  background:
  linear-gradient(rgba(49, 49, 49, 0.67),rgba(49, 49, 49, 0.67)),
  url('../img/backgrounds/backGeral.png');
}
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
.div6 { grid-area: 1 / 1 / 3 / 5;
  background: linear-gradient(
    125deg,
    rgba(28, 38, 57, 0.75),rgba(90, 34, 50, 0.75),rgba(116, 32, 47, 0.75),rgba(221, 25, 35, 0.75)), 
  url('../img/backgrounds/backStats.png');
  background-repeat: no-repeat;
  background-size: cover;
}

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
    font-size: medium !important;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  column-gap: 17px;
  font-size:20px;
}

.day {
  padding: 5px;
  border-radius: 6px;
  text-align: center;
  background-color: rgba(47, 48, 48, 0.75)
}
.grid-geral{
  display: grid;
  grid-template-rows: repeat(3, 85px);
  text-align: center;
  padding-left: 10px
}
.grid-geral img{
  width: 370px;
  height: 85px;
}

.main{
  background:
  linear-gradient(rgba(47, 48, 48, 0.64),rgba(47, 48, 48, 0.64)),
  url('../img/backgrounds/bck.png');
}


</style>