<template>
  <div>
    <Sidenav></Sidenav>
    <div class="main">
      <h1>Corrida</h1>
          <form action="">
            <label for="sltYears">Year: </label>
            <select id="sltYears" v-model="year" @change="this.year=year">
              <option
                :value="season.season"
                v-for="season in standingStore.getYears"
                :key="season.season"
              >
                {{ season.season }}
              </option>
            </select>


            <label for="sltRace">Race: </label>
            <select id="sltRace" v-model="i" @change="standingStore.fetchStandings(this.year,i)">
              <option
                :value="index + 1"
                v-for="(race, index) in standingStore.races"
                :key="race.round"
              >
                {{ race.Circuit.circuitName }}
              </option>
            </select>
          </form>  
      <v-data-table-virtual
        :headers="headers"
        :items="virtualPilots"
        item-value="name"
      ></v-data-table-virtual>
    </div>
  </div>
</template>

<script>
import Sidenav from "../components/sidenav.vue";
import { useStandingStore } from "@/stores/standing";
export default {
  data() {
    return {
      standingStore: useStandingStore(),
      year: new Date().getFullYear(),
      i:0,
      headers: [
        { title: "Position", align: "start", key: "position" },
        { title: "Name", align: "start", key: "name" },
        { title: "Time", align: "end", key: "time" },
      ],
    };
  },
  created() {
    this.standingStore.fetchYears();
    this.standingStore.fetchRaces(this.year);

    try {
      this.standingStore.fetchStandings(this.year, this.i);
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  },

  components: {
    Sidenav,
  },
  computed: {
    virtualPilots() {
      const standings = this.standingStore.getStandings;
      return standings
        ? standings.map((standing, index) => ({
            position: index + 1,
            name: standing.Driver.familyName,
            time: standing.Time ? standing.Time.time : "Not Finished",
          }))
        : [];
    },
  },
  watch: {
    year(newYear) {
      this.standingStore.fetchRaces(newYear);
    },
  },
};

</script>

<style lang="scss" scoped>
  /* Adicione estilos conforme necessário */
</style>

