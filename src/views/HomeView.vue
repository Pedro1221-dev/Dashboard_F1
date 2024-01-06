<template>
  <div class="grid-container">
    <div class="grid-item">
        <!-- SVG Background -->
        <div id="home" class="background">
           <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="1119" viewnews.news="0 0 1920 1119" fill="none">
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
      <div class="background-acerca">
      <div id="acerca" class="acerca">
        <div id="acerca" class="title" >
          <br><b>Acerca</b><br>
        </div>
        <div class="news-container">
         <!-- Hamilton Section -->
         <div class="news acerca-hamilton">
            <div class="acerca-hamilton-title">Como Surgiu ?</div>
            <p class="acerca-hamilton-text">
               O 'Formula 1 Pulse' surge como um projeto interdisciplinar inovador na universidade, unindo conhecimentos em ciência
               da computação, design de interfaces e análise de dados. Esta dashboard dinâmica proporciona uma visão envolvente da
               Fórmula 1, destacando estatísticas e informações relevantes de maneira visualmente atrativa, resultado da paixão e
               dedicação de uma equipa diversificada.
            </p>
            <div class="hamilton">
               <div class="overlap-group">
                  <img class="hamilton-image" alt="Image" src="src\img\news\hamilton.png" />
               </div>
            </div>
         </div>
         <!-- Leclerc Section -->
         <div class="news acerca-leclerc">
            <div class="acerca-leclerc-title">Para que Serve ?</div>
            <p class="acerca-leclerc-text">
               'Formula 1 Pulse' é uma ferramenta essencial para entusiastas e profissionais do desporto automobilístico.
               Funcionando como uma dashboard abrangente, oferece acompanhamento em tempo real de estatísticas, resultados de
               corridas e análises detalhadas, proporcionando uma perspetiva única sobre o desempenho das equipas e pilotos. Esta
               plataforma representa uma fonte valiosa de insights e entretenimento, reunindo paixão, inovação e conhecimento num
               só lugar.
            </p>
            <div class="leclerc">
               <div class="overlap-group">
                  <img class="leclerc-image" alt="Image" src="src\img\news\leclerc.png" />
                  
               </div>
            </div>
         </div>
      </div>
    </div>
  </div>
    </div>

    <div class="grid-item">
        <div class="background-teams">
        <div id="equipas" class="title">
          <br>
           <b>Equipas</b>
        </div>
        <div class="grid-teams">
          <div class="grid-team">
            <div class="teams">
              <img class="mercedes" alt="Mercedes" src="src\img\teams\mercedes.png"/>
              <div class="overlay">Mercedes</div>
            </div>
          </div>
          <div class="grid-team">
            <div class="teams">
              <img class="ferrari" alt="Ferrari" src="src\img\teams\ferrari.png"/>
              <div class="overlay">Ferrari</div>
            </div>
          </div>

          <div class="grid-team">
            <div class="teams">
              <img class="redbull" alt="Red Bull" src="src\img\teams\redbull.png"/>
              <div class="overlay">Red Bull</div>
            </div>
          </div>

          <div class="grid-team">
            <div class="teams">
              <img class="alfaromeo" alt="Alfa Romeo" src="src\img\teams\alfa romeo.png"/>
              <div class="overlay">Alfa Romeo</div>
            </div>
          </div>
          <div class="grid-team">
            <div class="teams">
              <img class="mclaren" alt="McLaren" src="src\img\teams\mcLaren.png"/>
              <div class="overlay">McLaren</div>
            </div>
          </div>
          <div class="grid-team">
            <div class="teams">
              <img class="astonmartin" alt="Aston Martin" src="src\img\teams\aston martin.png"/>
              <div class="overlay">Aston Martin</div>

            </div>
          </div>
          <div class="grid-team">
            <div class="teams">
              <img class="haas" alt="Haas" src="src\img\teams\haas.png"/>
              <div class="overlay">Haas</div>

            </div>
          </div>
          <div class="grid-team">
            <div class="teams">
              <img class="alpine" alt="Alpine" src="src\img\teams\alpine.png"/>
              <div class="overlay">Alpine</div>

            </div>
          </div>
          <div class="grid-team">
          </div>
          <div class="grid-team">
            <div class="teams">
              <img class="alphatauri" alt="Alpha Tauri" src="src\img\teams\alpha tauri.png"/>
              <div class="overlay">Alpha Tauri</div>
            </div>
          </div>
          <div class="grid-team">
            <div class="teams">
              <img class="williams" alt="Williams" src="src\img\teams\williams.png"/>
              <div class="overlay">Williams</div>
            </div>
          </div>       
        </div>       
      </div>
    </div>


    <div class="grid-item">
      <div class="background-circuitos">
        <div id="circuitos" class="title">
            <br><b>Circuitos</b>
        </div>
        <div class="grid-tracks">
          <div class="tracks">
            <img src="src\img\tracks\bahrain.png" alt="Bahrain" class="track">
            <div class="overlay">Bahrain</div>
          </div>
          <div class="tracks">
            <img src="src\img\tracks\Saudi Arabia.png" alt="Saudi Arabia" class="track">
            <div class="overlay">Saudi Arabia</div>
          </div>
          <div class="tracks">
            <img src="src\img\tracks\Australia.png" alt="Australia" class="track">
            <div class="overlay">Australia</div>
          </div>
          <div class="tracks">
            <img src="src\img\tracks\Japan.png" alt="Japan" class="track">
            <div class="overlay">Japan</div>
          </div>
          <div class="tracks">
            <img src="src\img\tracks\China.png" alt="China" class="track">
            <div class="overlay">China</div>
          </div>
          <div class="tracks">
            <img src="src\img\tracks\USA1.png" alt="United States" class="track">
            <div class="overlay">United States</div>
          </div>
          <div class="tracks">
            <img src="src\img\tracks\Italy1.png" alt="Italy" class="track">
            <div class="overlay">Italy</div>
          </div>
          <div class="tracks">
            <img src="src\img\tracks\Monaco.png" alt="Monaco" class="track">
            <div class="overlay">Monaco</div>

          </div>
          <div class="tracks">
            <img src="src\img\tracks\Canada.png" alt="Canada" class="track">
            <div class="overlay">Canada</div>

          </div>
          <div class="tracks">
            <img src="src\img\tracks\Spain.png" alt="Spain" class="track">
            <div class="overlay">Spain</div>

          </div>
          <div class="tracks">
            <img src="src\img\tracks\Austria.png" alt="Austria" class="track">
            <div class="overlay">Austria</div>

          </div>
          <div class="tracks">
            <img src="src\img\tracks\UK.png" alt="United Kingdom" class="track">
            <div class="overlay">United Kingdom</div>

          </div>
          <div class="tracks">
            <img src="src\img\tracks\Hungary.png" alt="Hungary" class="track">
            <div class="overlay">Hungary</div>

          </div>
          <div class="tracks">
            <img src="src\img\tracks\Belgium.png" alt="Belgium" class="track">
            <div class="overlay">Belgium</div>

          </div>
          <div class="tracks">
            <img src="src\img\tracks\Netherlands.png" alt="Netherlands" class="track">
            <div class="overlay">Netherlands</div>

          </div>
          <div class="tracks">
            <img src="src\img\tracks\Italy2.png" alt="Italy" class="track">
            <div class="overlay">Italy</div>

          </div>

          <div class="tracks">
            <img src="src\img\tracks\Azerbaijan.png" alt="Azerbaijan" class="track">
            <div class="overlay">Azerbaijan</div>

          </div>

          <div class="tracks">
            <img src="src\img\tracks\Singapore.png" alt="Singapore" class="track">
            <div class="overlay">Singapore</div>

          </div>

          <div class="tracks">
            <img src="src\img\tracks\USA2.png" alt="United States" class="track">
            <div class="overlay">United States</div>

          </div>

          <div class="tracks">
            <img src="src\img\tracks\Mexico.png" alt="Mexico" class="track">
            <div class="overlay">Mexico</div>

          </div>

          <div class="tracks">
            <img src="src\img\tracks\Brazil.png" alt="Brazil" class="track">
            <div class="overlay">Brazil</div>

          </div>

          <div class="tracks">
            <img src="src\img\tracks\USA3.png" alt="United States" class="track">
            <div class="overlay">United States</div>

          </div>
        
          <div class="tracks">
            <img src="src\img\tracks\Qatar.png" alt="Qatar" class="track">
            <div class="overlay">Qatar</div>

          </div>

          <div class="tracks">
            <img src="src\img\tracks\Abu Dhabi.png" alt="Abu Dhabi" class="track">
            <div class="overlay">Abu Dhabi</div>

          </div>
        </div>
      </div>
    </div>

    <div class="grid-item">
      <div class="background-historia"></div>
        <div id="historia" class="title">
          <br><b>História</b><br>
        </div>
        <div id="historia" class="historia">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, in sunt? Dolores est facere maiores similique nulla magni nam reprehenderit, 
            illo saepe aspernatur molestiae. A assumenda sit incidunt sequi corrupti? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, in sunt? Dolores est facere maiores similique nulla magni nam reprehenderit, 
            illo saepe aspernatur molestiae. A assumenda sit incidunt sequi corrupti? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, in sunt? Dolores est facere maiores similique nulla magni nam reprehenderit, 
            illo saepe aspernatur molestiae. A assumenda sit incidunt sequi corrupti? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, in sunt? Dolores est facere maiores similique nulla magni nam reprehenderit, 
            illo saepe aspernatur molestiae. A assumenda sit incidunt sequi corrupti? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, in sunt? Dolores est facere maiores similique nulla magni nam reprehenderit, 
            illo saepe aspernatur molestiae. A assumenda sit incidunt sequi corrupti? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, in sunt? Dolores est facere maiores similique nulla magni nam reprehenderit, 
            illo saepe aspernatur molestiae. A assumenda sit incidunt sequi corrupti? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, in sunt? Dolores est facere maiores similique nulla magni nam reprehenderit, 
            illo saepe aspernatur molestiae. A assumenda sit incidunt sequi corrupti?</p>
        </div>
      </div>
    </div>

     <div class="grid-item">
        <div id="series" class="title">
          <b>Séries</b>
        </div>
        <!-- Slideshow container -->
        <div class="slideshow-container">
          <!-- Full-width images with number and caption text -->
          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="src\img\car.png" style="width:100%">
            <div class="text">Caption Text</div>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="src\img\car.png" style="width:100%">
            <div class="text">Caption Two</div>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="src\img\car.png" style="width:100%">
            <div class="text">Caption Three</div>
          </div>

        <!-- Next and previous buttons -->
        <a class="prev" id="prevSlide">&#10094;</a>
        <a class="next" id="nextSlide">&#10095;</a>
        </div>
        <br>

        <!-- The dots/circles -->
        <div style="text-align:center">
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
        </div>
     </div>

     <!-- Falta colocar o script para o carroussel funcionar, nao estava a conseguir -->

  <div class="grid-item">
      <div class="footer">FOOTER</div>
  </div>
</template>

<script>    
import { useUserStore } from "@/stores/user";
import { RouterLink } from 'vue-router';

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

body, html {
  height: 100%;
  margin: 0;
  background-color: blue;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  //grid-template-rows: repeat(6, 100vh); /* Each row takes up the full viewport height */
  grid-template-rows: 100vh 130vh 110vh 240vh 1vh 100vh;
  // overflow: hidden;
}

.title b {
  text-align: center;
  display: block;
  margin: 0 auto;
}

/* Navbar */ 
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

/*  */ 
.background {
  position: absolute;
  width: 100%;
  height: 80%;
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

.title {
  color: #B81A10;
  font-family: Tektur, bold;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

/* ACERCA */
.background-acerca{
  background-color: #343535;
  
}
.news {
  height: 480px ;//100% n funciona
  position: relative;
  width: 100%;
  margin-left: 10%;
  margin-right: 10%;
}

  /* Hamilton Section */

.news .acerca-hamilton-title {
  color: #FFFFFF;
  font-family: "Onest-Bold", Helvetica;
  font-size: 35px;
  font-weight: 700;
  left: 20%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 10%;

}

.news .acerca-hamilton-text {
  color: #FFFFFF;
  font-family: "Onest-Regular", Helvetica;
  font-size: 160%; //25px
  font-weight: 400;
  left: 20%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 30%; //
  width: 40%;
  text-align: left;
}

.news .hamilton-image {
  //height: 412px;
  height: 25rem;
  left: 3%;
  position: relative;
  top: 50%;
}

  /* Leclerc Section */

.news .acerca-leclerc-title {
  color: #FFFFFF;
  font-family: "Onest-Bold", Helvetica;
  font-size: 35px;
  font-weight: 700;
  left: 20%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
}

.news .acerca-leclerc-text {
  color: #FFFFFF;
  font-family: "Onest-Regular", Helvetica;
  font-size: 160%; //25px
  font-weight: 400;
  left: 20%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 8vh; //80px;
  width: 40%;
  text-align: left;
}

.news .leclerc { // Corrigir
  height: 38rem;//526px;
  left: 76rem;//1220px;
  position: absolute;
  width: 19rem;//311px;
}

.news .leclerc-image {
  height: 25rem;
  left:15%; //37px;
  position: absolute;
  bottom: 27%;
}

/* TEAMS */

.grid-teams {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-template-rows: repeat(3, 1fr); 
  gap: 0px; 
  margin: 5%;
  position: relative;
  overflow: hidden;
}

.teams .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%; //185px
  width: 100%; //386px
  opacity: 0;
  transition: .5s ease;
  border-radius: 2vh; //15px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 350%;
  font-family: Tektur;
  background-color: #c9dce2; /* Default background color */
}

.teams:hover .overlay {
  opacity: 0.9;
}

/* .teams:hover .overlay.ferrari {
  background-color: #000000;  // not working
} */

.background-teams{
  background-color: #D4CBCA;
  margin-bottom: 20%;
}
.grid-team {
  padding: 3%;
}

.teams { //ajustar
  height: 96%; //186px
  width: 96%; //386px
  position: relative;
}


/* CIRCUITOS */

.grid-tracks {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 0px; /* Adjust the gap between tracks as needed */
  margin-top: 5%;
  margin-left: 10%;
  position: relative;
  overflow: hidden;
}

.tracks .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 97%;//289px;
  width:  61%;//263px;
  opacity: 0;
  transition: .5s ease;
  border-radius: 2vh; //15px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 200%;
  font-family: Tektur;
  background-color: #D4CBCA; 
  text-decoration-color: #000
}

.tracks:hover .overlay {
  opacity: 0.9;
}

.grid-track {
}

.tracks{
  /*height: 100%;
  width: 100%; */
  height: auto;
  width: auto;
 /*  height: 289px;
  width: 263px; */
  position: relative;
  overflow: hidden;
  margin-bottom: 7%;
}

.tracks .track{ //nao altera nada
 /*   height: 289px;
  width: 263px;
  left: 0;
  position: relative;
  top: 0; */
}

.background-circuitos{
  background-color: #343535;
}

.background-historia{
  background-color: #D4CBCA;
}

.historia p {
  font-family: "Onest-Regular", Helvetica;
  text-align: justify;
  text-decoration-color: #000;
  font-size: 156%;  //font-size: 25px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 10%;
  margin-right: 10%;
}

/* ---------------------------------------------------------------------- */
/* SERIES */

* {box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px; //
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}


/* ---------------------------------------------------------------------- */
/* FOOTER */

.footer {
  padding: 5%;
  color: #FFF;
  text-align: center;
  font-size: 125%;
  background-color: #343535;
}

</style> 


