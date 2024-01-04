<template>
  <div class="grid-container">
     <div class="grid-item">
        <!-- SVG Background -->
        <div id="home" class="background">
           <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="1119" viewBox="0 0 1920 1119" fill="none">
              <path d="M0 0H1920V616C1920 616 1891.16 908.81 1811 1004C1730.84 1099.19 1531 1119 1531 1119H0V0Z" fill="url(#paint0_linear_335_992)"/>
              <defs>
                 <linearGradient id="paint0_linear_335_992" x1="0" y1="456" x2="1920" y2="456" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F83D4A"/>
                    <stop offset="1" stop-color="#F8703A"/>
                 </linearGradient>
              </defs>
           </svg>
        </div>
        <div class="navbar">
           <div class="navbar-left">
              <a href="#home">Home</a>
              <a href="#acerca">Acerca</a>
              <a href="#equipas">Equipas</a>      
          </div>
           <div class="navbar-title">
              <b>Formula1Pulse</b>
           </div>
           <div class="navbar-right">
              <a href="#circuitos">Circuitos</a>
              <a href="#historia">História</a>
              <a href="#series">Series</a>
           </div>
           <div class="navbar-icon">
              <RouterLink v-if="!store.isUserAuthenticated" :to="{ name: 'login' }" class="login-link">
                  <img src="src/img/icons/login.png" alt="Login">
              </RouterLink>

              <!-- Show dashboard link only if user is authenticated -->
              <RouterLink v-else :to="{ name: 'dashboard' }" class="dashboard-link">  
                <img src="src/img/icons/dashboard.png" alt="Dashboard">
              </RouterLink>
           </div>
        </div>

      <div class="image-container">
          <div class="image-shadow"></div>
          <img src="src/img/car.png" alt="" style="width: 1200px; height: auto; opacity: 0.80;">    
      </div>
     </div>

     <div class="grid-item">
        <div id="acerca" class="title">
          <p>Acerca</p>
          <img src="src/img/landingPage/hamilton.png" alt="" class="hamilton-left" width="211px" height="426px">
          <img src="src/img/landingPage/leclerc.png" alt="" class="leclerc-right" width="211px" height="426px">
        </div>
     </div>

     <div class="grid-item">
        <div id="equipas" class="title">
           <p>Equipas</p>
        </div>
     </div>

     <div class="grid-item">
          <div id="circuitos" class="title">
              <p>Circuitos</p>
          </div>
     </div>

     <div class="grid-item">
          <div id="historia" class="title">
              <p>História</p>
          </div>
     </div>

     <div class="grid-item">
          <div id="series" class="title">
              <p>Séries</p>
          </div>
     </div>

  <div class="grid-item">
      <div class="footer">FOOTER</div>
  </div>
  </div>
</template>

<script>    
import { RouterLink } from 'vue-router';
import { useUserStore } from "@/stores/user";



export default {
  name: 'DashboardF1HomeView',

  setup() {
    const store = useUserStore();
    return { store };
  },

  mounted() {
    const store = useUserStore();
    console.log(store.isUserAuthenticated);
  },
};
</script>

<style lang="scss" scoped> 

@font-face {
  font-family: 'Tektur';
  src: url('path/to/tektur-font.woff') format('woff');
}

body, html {
  height: 100%;
  margin: 0;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 100vh); /* Each row takes up the full viewport height */
  overflow: hidden;
}
.grid-item {
  text-align: center;
}

.hamilton-left {
  display: flex;
  margin-left: 10%;
  text-align: left !important;
}

.leclerc-right {
  display: flex;
  margin-right: 10%; /* Push the "leclerc" image to the right */
  // text-align: right !important;

}

.navbar {
  text-align: center;
  display: flex;
  margin-left: 15%;
}
.navbar-icon {
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-top: 50px;
  margin-left: 20px;
}
.navbar-icon img {
  width: 40px ;
  height: 40px;
}
.navbar-left, .navbar-right {
  display: flex;
  gap: 25px;
}
.navbar-left a, .navbar-right a {
  color: #FFF; 
  text-decoration: none;
  font-size: 20px; 
  margin-top: 50px;

}
.navbar-left a:hover, .navbar-right a:hover {
  text-decoration: underline;
  text-decoration-color: #B81A10;
  text-underline-offset: 8px;
}
.navbar-title {
  color: #B81A10;
  font-family: Tektur, bold;
  font-size: 60px;
  font-weight: 700;
  line-height: normal;
  margin-top: 30px;
  margin-left: 40px;
  margin-right: 40px;
}
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
}
svg {
  width: 100%;
  height: auto;
  display: block;
}
.button-container {
  z-index: 1;
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  position: relative; 
}

.image-shadow {
  position: absolute;
  width: 1300px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 1648px;
  background: radial-gradient(50% 50% at 50% 50%, #000 0%, rgba(0, 0, 0, 0.00) 100%);
  z-index: -1; 
  top: 82%;
}

.image-container img {
  width: 1000px;
  height: auto;
  opacity: 0.80;
  z-index: 1; 
}

.title{
  color: #B81A10;
  font-family: Tektur;
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 2%;
}

.footer {
  padding: 5%;
}
</style> 


