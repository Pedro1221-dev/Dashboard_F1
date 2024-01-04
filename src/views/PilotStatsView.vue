<template>
  <div>
    <Sidenav></Sidenav>
    <div class="main">
      <RouterLink :to="{ name: 'racestats' }">Corridas</RouterLink>
      <RouterLink :to="{ name: 'constructorstats' }" class="ml-10">Equipas</RouterLink>
      <br>
      <br>
      <select v-model="selectedPilot" @change="handlePilotChange" style="border: 1px solid white;">
        <option v-for="(pilot, index) in pilotStore.$state.pilots" :key="index" :value="pilot">
          {{ pilot.givenName }} {{ pilot.familyName }}
        </option>
      </select>

      <div v-if="selectedPilot">
        <h1>{{ selectedPilot.givenName }} {{ selectedPilot.familyName }}</h1>
        <p>Data Nascimento: {{ selectedPilot.dateOfBirth }}</p>
        <p>Nacionalidade: {{ selectedPilot.nationality }}</p>
        <p>Numero: {{ selectedPilot.permanentNumber }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "../components/sidenav.vue";
import { usePilotStore } from "@/stores/pilot";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      pilotStore: usePilotStore(),
      selectedPilot: null,
    };
  },
  created() {
    this.pilotStore.fetchPilots();
  },
  methods: {
    handlePilotChange() {
      // This function will be called when the selected pilot changes
      console.log(this.selectedPilot);
    },
  },
  components: {
    Sidenav,
  },
};
</script>