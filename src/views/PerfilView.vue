<template>
        <Sidenav></Sidenav>

    <div class="main">
        <div class="imgBack">
            <img src="../img/backgrounds/backgroundPerfil.jpg">
        </div>
        
        <div class="perfil">
            <div class="parent">
                <div class="div1">
                    <v-avatar image="..\src\img\avatars\1.png"></v-avatar>    
                </div>
                <div class="div2">
                    <b>{{ user }}</b>    
                </div>
                <div class="div3">
                    <form action="">
                        <v-text-field v-model="user"></v-text-field>
                        <input type="text" name="" id="">
                        <v-text-field>pass</v-text-field>
                        <input type="password" name="" id="">
                        <input type="submit" value="">
                    </form>    
                </div>
            </div>
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
        
    }
</script>

<style lang="scss" scoped>

.imgBack img {
    width: 100% !important;
    height: 300px !important;
}
.perfil{
    border: 1px solid white;
    max-width: 300px !important;
    min-height: 240px !important;
}

.parent {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 2 / 1 / 4 / 3; }
</style>