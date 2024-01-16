<template>
    <Sidenav></Sidenav>
    <div class="main">
        <RouterLink :to="{ name: 'guide-flags' }">Bandeiras</RouterLink>
    
        <div class="tires">
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
