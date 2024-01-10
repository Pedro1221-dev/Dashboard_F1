<!-- SeuComponente.vue -->

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
import mockData from "@/api/mocks/mock";
import Sidenav from "../components/sidenav.vue";

export default {
  data() {
    return {
      currentIndex: 0,
      driverMapping: {
        "mercedes": ["hamilton", "russel"],
        "red bull": ["verstappen", "perez"],
        "ferrari": ["leclerc", "sainz"],
        "mclaren": ["norris", "piastri"],
        "aston martin": ["alonso", "stroll"],
        "alfa romeo": ["bottas", "zhou"],
        "williams": ["albon", "sargeant"],
        "haas f1 team": ["magnussen", "hulkenberg"],
        "alphatauri": ["tsunoda", "devries"],
        "alpine f1 team": ["gasly", "ocon"],
      },
      teamColors: {
        "mercedes": "rgba(6, 157, 152, 0.8)",
        "red bull": "rgba(2, 16, 120, 0.87)",
        "ferrari": "rgba(245, 0, 0, 0.8)",
        "mclaren": "rgba(254, 136, 4, 0.87)",
        "aston martin": "rgba(0, 88, 80, 0.87)",
        "alfa romeo": "rgba(127, 0, 0, 0.87)",
        "williams": "rgba(5, 160, 227, 0.87)",
        "haas f1 team": "rgba(223, 44, 44, 0.87)",
        "alphatauri": "rgba(14, 22, 35, 0.87)",
        "alpine f1 team": "rgba(15, 28, 44, 1)",
      },
      imgCar: null,
      standingStore: useStandingStore(),
      year: 2023,
      i:1,
      headers: [
        { title: "Position", align: "start", key: "position" },
        { title: "Name", align: "start", key: "name" },
        { title: "Time", align: "end", key: "time" },
      ],
      driverMapping: {
        "mercedes": ["Hamilton", "Russell"],
        "red bull": ["Verstappen", "Pérez"],
        "ferrari": ["Leclerc", "Sainz"],
        "mclaren": ["Norris", "Piastri"],
        "aston martin": ["Alonso", "Stroll"],
        "alfa romeo": ["Bottas", "Zhou"],
        "williams": ["Albon", "Sargeant"],
        "haas f1 team": ["Magnussen", "Hülkenberg"],
        "alphatauri": ["Tsunoda", "de Vries"],
        "alpine f1 team": ["Gasly", "Ocon"],
      },
      teamColors: {
        "mercedes": "rgba(6, 157, 152, 0.8)",
        "red bull": "rgba(2, 16, 120, 0.87)",
        "ferrari": "rgba(245, 0, 0, 0.8)",
        "mclaren": "rgba(254, 136, 4, 0.87)",
        "aston martin": "rgba(0, 88, 80, 0.87)",
        "alfa romeo": "rgba(127, 0, 0, 0.87)",
        "williams": "rgba(5, 160, 227, 0.87)",
        "haas f1 team": "rgba(223, 44, 44, 0.87)",
        "alphatauri": "rgba(14, 22, 35, 0.87)",
        "alpine f1 team": "rgba(15, 28, 44, 1)",
      },
      imgCar: null,
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
    tableData() {
      return this.getCurrentMock();
    },
  },
};
</script>

<style lang="scss" scoped>
  /* Adicione estilos conforme necessário */
</style>
