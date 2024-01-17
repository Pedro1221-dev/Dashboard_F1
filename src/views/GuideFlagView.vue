<template>
    <Sidenav></Sidenav>
    <div class="main">
        <div class="links">
            <RouterLink :to="{ name: 'guide-tires' }" class="links">Pneus</RouterLink>
            <div class="bandeiras">Bandeiras</div>
        </div>
        
        <div class="flags">
            <div class="div1"><img src="../img/guide/flags/greenFlag.png" alt=""></div>
            <div class="div2 title">Bandeira Verde</div>
            <div class="div3">A sessão começou ou vai continuar.</div>
            <div class="div4"><img src="../img/guide/flags/blueFlag.png" alt=""></div>
            <div class="div5 title">Bandeira Azul</div>
            <div class="div6">Indica ao piloto que um carro com avanço está prestes a ultrupassá-lo e que tem de ceder passagem.</div>
            <div class="div7"><img src="../img/guide/flags/whiteFlag.png" alt=""></div>
            <div class="div8 title">Bandeira Branca</div>
            <div class="div9">Informa o piloto que há carros lentos à sua frente.</div>    
            <div class="div10"><img src="../img/guide/flags/redFlag.png" alt=""></div>
            <div class="div11 title">Bandeira Vermelha</div>
            <div class="div12">A sessão parou.</div>
            <div class="div13"><img src="../img/guide/flags/blackFlag.png" alt=""></div>
            <div class="div14 title">Bandeira Preta</div>
            <div class="div15">O piloto é desqualificado e é tem de regressar à pit imediatamente.</div>
            <div class="div16"><img src="../img/guide/flags/yellowFlag.png" alt=""></div>
            <div class="div17 title">Bandeira Amarela</div>
            <div class="div18">Significa perigo.</div>  
            <div class="div19"><img src="../img/guide/flags/yellowRedFlag.png" alt=""></div>
            <div class="div20 title">Bandeira Amarela e riscas vermelhas</div>
            <div class="div21">Indica que a pista está escorregadia.</div>
            <div class="div22"><img src="../img/guide/flags/checkeredFlag.png" alt=""></div>
            <div class="div23 title">Bandeira axadrezada</div>
            <div class="div24">A sessão terminou.</div>
        </div>
    </div>

</template>

<script>
import { RouterLink } from 'vue-router';
import Sidenav from "../components/sidenav.vue";
    export default {
    
        components: {
         Sidenav,
    },
        
    }
</script>

<style lang="scss" scoped>
.bandeiras{
    margin-left: 1%;
    color: #FFF;
    text-decoration: underline;
    text-underline-offset: 10%;
    text-decoration-color: #C8473F;
    text-decoration-thickness: 2px;
}
.links {
    display: flex;
    font-family: "Onest";
    font-size: 1.5rem;
    color: #FFF; 
}

.flags {
    margin-top: 3%;
    display: grid;
    grid-template-columns: repeat(8, 1fr); /* Updated grid-template-columns */
    grid-template-rows: repeat(1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
}

.flags div {
    display: flex;
    font-size: small;
    background-color: #343535;
    color: #FFFFFF;
    
    img {
    max-width: 80%;
    max-height: 80%;
    margin: auto;
    }
}

.flags .title {
    font-size: 1.2rem;
    font-family: "Onest-Bold";
}

.div1 { grid-area: 1 / 1 / 3 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 2 / 2 / 3 / 3; }
.div4 { grid-area: 1 / 3 / 3 / 4; }
.div5 { grid-area: 1 / 4 / 2 / 5; }
.div6 { grid-area: 2 / 4 / 3 / 5; }
.div7 { grid-area: 1 / 5 / 3 / 6; }
.div8 { grid-area: 1 / 6 / 2 / 7; }
.div9 { grid-area: 2 / 6 / 3 / 7; }
.div10 { grid-area: 1 / 7 / 3 / 8; }
.div11 { grid-area: 1 / 8 / 2 / 9; }
.div12 { grid-area: 2 / 8 / 3 / 9; }
.div13 { grid-area: 3 / 1 / 5 / 2; }
.div14 { grid-area: 3 / 2 / 4 / 3; }
.div15 { grid-area: 4 / 2 / 5 / 3; }
.div16 { grid-area: 3 / 3 / 5 / 4; }
.div17 { grid-area: 3 / 4 / 4 / 5; }
.div18 { grid-area: 4 / 4 / 5 / 5; }
.div19 { grid-area: 3 / 5 / 5 / 6; }
.div20 { grid-area: 3 / 6 / 4 / 7; }
.div21 { grid-area: 4 / 6 / 5 / 7; }
.div22 { grid-area: 3 / 7 / 5 / 8; }
.div23 { grid-area: 3 / 8 / 4 / 9; }
.div24 { grid-area: 4 / 8 / 5 / 9; }




</style>

