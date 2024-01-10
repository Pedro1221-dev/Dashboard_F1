<template>
  <div>
    <div class="sidenav">
      <router-link :to="{ name: 'dashboard' }">Home</router-link>
      <router-link :to="{ name: 'live' }">Live</router-link>
      <router-link :to="{ name: 'standings' }">Standing</router-link>
      <router-link :to="{ name: 'pilotstats' }">Statics</router-link>
      <router-link to="" @click="logout">Logout</router-link>
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

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}
.main{
  background: url('../img/backgrounds/bck.png');
}
</style>
