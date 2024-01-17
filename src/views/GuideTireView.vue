<template>
    <Sidenav></Sidenav>
    <div class="main">
        <div class="links">
            <div class="pneus">Pneus</div>
            <RouterLink :to="{ name: 'guide-flags' }" class="links">Bandeiras</RouterLink>
        </div>  
    
    <!--<div class="tires">
            <div class="div1"><img src="../img/guide/tires/white-parentesi.png" alt=""> </div>
            <div class="div2 title">White Hard Compound</div>
            <div class="div3">These provide the least grip, but are supposed to remain in working order the longest.</div>
            <div class="div4"><img src="../img/guide/tires/yellow-parentesi.png" alt=""></div>
            <div class="div5 title ">Yellow Medium Compound</div>
            <div class="div6">This is the compromise compound. It’s usually slower than the softs but faster than hards. And it should last longer than the softs, but not as long as hards!</div>
            <div class="div7"><img src="../img/guide/tires/red-parentesi.png" alt=""> </div>
            <div class="div8 title">Red Soft Compound</div>
            <div class="div9">These represent the fastest rubber, but are likely to wear out before the harder compounds do.</div>
            <div class="div10"><img src="../img/guide/tires/cinturato-green-intermediate-4505508953587.png" alt=""></div>
            <div class="div11 title">Green Intermediate Compound</div>
            <div class="div12">The intermediates are the most versatile of the rain tires. They can be used on a wet track with no standing water, as well as a drying surface. The compound has been designed to have a wide working range, guaranteeing a wide crossover window both with the slicks and the full wets. </div>
            <div class="div13"><img src="../img/guide/tires/cinturato-blue-wet-4505508953865.png" alt=""> </div>
            <div class="div14 title">Full Wet Blue</div>
            <div class="div15">The full wet tires are the most effective for heavy rain, capable of dispersing impressive quantities of water. But if it rains heavily, visibility rather than grip causes issues, leading to race stoppages on occasions. The profile delivers increased resistance to aquaplaning, which gives the tire more grip in heavy rain.</div>
        </div> -->


        <!-- teste card -->

        <div class="grid-tires">
            <div class="card-tires">
                <img src="../img/guide/tires/white-parentesi.png" alt="white" class="pneu">
                <div class="title">White Hard Compound</div>
                <div class="tire-overlay text" v-show="overlay">Esses proporcionam menos aderência, mas são projetados para se aguentarem mais tempo.</div>
                <div class="icon" @click="overlay = true"><img src="../img/icons/upload.png" alt=""></div>
            </div>

            <div class="card-tires">
                <img src="../img/guide/tires/yellow-parentesi.png" alt="yellow" class="pneu">
                <div class="title">Yellow Medium Compound</div>
                <div class="tire-overlay text" v-show="overlay">Nomalmente é mais lento que os pneus soft mas mais rápidos que os hard. Duram mais que os soft mas não tanto como os hard.</div>
                <div class="icon" @click="overlay = true"><img src="../img/icons/upload.png" alt=""></div>
            </div>

            <div class="card-tires">
                <img src="../img/guide/tires/red-parentesi.png" alt="red" class="pneu">
                <div class="title">Red Soft Compound</div>
                <div class="tire-overlay text" v-show="overlay">Estes representam a borracha mais rápida, mas vão ter o desgaste mais acelerado.</div>
                <div class="icon" @click="overlay = true"><img src="../img/icons/upload.png" alt=""></div>
            </div>

            <div class="card-tires">
                <img src="../img/guide/tires/cinturato-green-intermediate-4505508953587.png" alt="green" class="pneu">
                <div class="title">Green Intermediate Compound</div>
                <div class="tire-overlay text" v-show="overlay">Os intermédios são os mais versáteis entre os pneus de chuva. Podem ser usados numa pista molhada bem como numa superficie ainda a secar. É feito de forma a ter um uso abrangente.</div>
                <div class="icon" @click="overlay = true"><img src="../img/icons/upload.png" alt=""></div>
            </div>

            <div class="card-tires">
                <img src="../img/guide/tires/cinturato-blue-wet-4505508953865.png" alt="b" class="pneu">
                <div class="title">Full Wet Blue</div>
                <div class="tire-overlay text" v-show="overlay">Estes pneus são os mais eficazes para chuva intensa, capazes de dispersar enormes quantidades de água. O perfil proporciona resistência aumentada à aquaplanagem, o que confere ao pneu mais aderência.</div>
                <div class="icon" @click="overlay = true"><img src="../img/icons/upload.png" alt=""></div>
            </div>
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
    data() {
        return {
            overlay: false
        }
    },
        
    }
</script>

<style lang="scss" scoped>


// teste card //

.icon {
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
}

.grid-tires{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2,1fr);

}

.card-tires img{
    width: 50%;
}

.card-tires {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #343535;
    width: 20%;
    color: #FFF;
    height: 40vh;
    width: 20vw;
    border-radius: 3vh;
    font-family: "Onest";
    font-size: smaller;
}

.card-tires .title {
    margin-top: 5%;
    font-size: 1.2rem;
    text-align: center;
    font-family: Onest;
}

.tire-overlay {
    position: absolute;
    background-color: white; 
    color: black;
    height: 30vh;
    width: 20vw;
    transition: 0.5s ease-in;
    border-radius: 0 0 3vh 3vh ; 
    z-index: 1;
    opacity: 0.9;
    margin-top: 5%;
    font-family: Onest-Thin;
    font-size: 1rem;
    display: none;
    justify-content: center;
    visibility: hidden; /* Inicialmente oculto */
    padding: 1.5%;
}

.card-tires:hover .tire-overlay {
    visibility: visible; /* Mostra quando o card é hover */
    opacity: 0.9;
}

/* .card-tires:hover .tire-overlay {
    display: flex; 
} */

// header //

.pneus{
    margin-right: 1%;
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

// grid pneu //

.tires {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
}

.tires div {
    display: flex;
    justify-content: center;
    font-size: small;
    background-color: #343535;
    color: #FFFFFF;
    
    img {
        max-width: 90%;
        max-height: 90%;
        display: block;
        margin: auto;
    }
}

.tires .title {
    font-size: 1.2rem;
    font-family: "Onest-Bold";
}


// grid //
.tires .div1 { grid-area: 1 / 1 / 3 / 2; }
.tires .div2 { grid-area: 1 / 2 / 2 / 3; }
.tires .div3 { grid-area: 2 / 2 / 3 / 3; }
.tires .div4 { grid-area: 1 / 3 / 3 / 4; }
.tires .div5 { grid-area: 1 / 4 / 2 / 5; }
.tires .div6 { grid-area: 2 / 4 / 3 / 5; }
.tires .div7 { grid-area: 1 / 5 / 3 / 6; }
.tires .div8 { grid-area: 1 / 6 / 2 / 7; }
.tires .div9 { grid-area: 2 / 6 / 3 / 7; }
.tires .div10 { grid-area: 3 / 1 / 5 / 2; }
.tires .div11 { grid-area: 3 / 2 / 4 / 3; }
.tires .div12 { grid-area: 4 / 2 / 5 / 3; }
.tires .div13 { grid-area: 3 / 3 / 5 / 4; }
.tires .div14 { grid-area: 3 / 4 / 4 / 5; }
.tires .div15 { grid-area: 4 / 4 / 5 / 5; }

</style>
