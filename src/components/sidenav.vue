<template>
  <div>
    <div class="sidenav">
      <router-link :to="{ name: 'dashboard' }">
        <div class="icon-container">
          <img src="../img/icons/edit.png" alt="Home" class="icon-image">
        </div>
        <span class="link-text">Home</span>
      </router-link>
      <router-link :to="{ name: 'live' }">
        <div class="icon-container">
          <v-icon>mdi-video-wireless</v-icon>
        </div>
        <span class="link-text">Live</span>
      </router-link>
      <router-link :to="{ name: 'standings' }">
        <div class="icon-container">
          <v-icon>mdi-podium</v-icon>
        </div>
        <span class="link-text">Classificação</span>
      </router-link>
      <router-link :to="{ name: 'pilotstats' }">
        <div class="icon-container">
          <v-icon>mdi-chart-bar-stacked</v-icon>
        </div>
        <span class="link-text">Estatisticas</span>
      </router-link>
      <router-link to="" @click="logout">
        <div class="icon-container">
          <v-icon>mdi-logout</v-icon>
        </div>
        <span class="link-text">Logout</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/user";

export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {
    logout() {
      useUserStore().logout();  // Correção aqui
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}
.icon-image {
  width: 24px; /* Ajuste este valor para o tamanho desejado */
  height: 24px; /* Ajuste este valor para o tamanho desejado */
}

.icon-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
  border-radius: 50%;
  padding: 5px;
  margin-bottom: 20px; /* Adiciona espaço abaixo de cada ícone */
}

.sidenav a {
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza os itens na largura */
  position: relative; /* Adicionado para posicionar o texto do link em relação a este elemento */
}

.sidenav .link-text {
  position: absolute; /* Remove o texto do link do fluxo normal do documento */
  left: 100%; /* Posiciona o texto do link à direita do ícone */
  margin-left: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.sidenav a:hover .link-text {
  opacity: 1;
}

.sidenav a:hover .icon-container {
  border-color: red; /* Faz a borda do ícone ficar vermelha quando o mouse passa sobre o link */
}
</style>
