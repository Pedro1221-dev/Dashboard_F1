<template>
    <!-- SVG Background -->
    <div class="background">
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
          <a href="#">Home</a>
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
            <RouterLink :to="{ name: 'login' }" class="login-link">
                <img src="src/img/icons/login.png" alt="Login">
            </RouterLink>
            <RouterLink :to="{ name: 'dashboard' }" class="dashboard-link">
                <img src="src/img/icons/dashboard.png" alt="Dashboard">
            </RouterLink>
      </div>
  </div>

  <div class="image-container">
      <img src="src/img/car.png" alt="" style="width: 1500px; height: auto; opacity: 0.80;">    
  </div>


  <div class="acerca">
      <h1>Acerca</h1>
  </div>

  <div class="equipas">
      <h1>Equipas</h1>
  </div>
</template>

<script>    
import { RouterLink } from 'vue-router';
export default {
  name: 'DashboardF1HomeView',

  data() {
    return {};
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped> 
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

  /* position: absolute;
  width: 100%;
  height: 100%; */
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

// .acerca{
//     background-color: black;
//     min-height: 600px;
// }

/* .image-container {
  
} */
</style> 

