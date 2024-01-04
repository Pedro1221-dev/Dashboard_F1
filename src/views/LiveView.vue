<script>
import mockData from "@/api/mocks/mock";
import Sidenav from "../components/sidenav.vue";

export default {
  data() {
    return {
      currentIndex: 0,
      driverMapping : {
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
      imgCar: null,
    };
  },
  created() {
    setInterval(this.updateTable, 5000);
  },
  methods: {
  updateTable() {
    if (this.tableData.distance === 100) {
      return;
    }

    this.currentIndex++;
    if (this.currentIndex >= mockData.length) {
      this.currentIndex = 0;
    }  },
  getCurrentMock() {
    return mockData[this.currentIndex];
  },
  carByPilot(driverName) {
    for(let team in this.driverMapping) {
      if(this.driverMapping[team].includes(driverName)) {
        this.imgCar=`../src/img/cars/${team}.png`
        return this.imgCar;
      }
    }
    return null; // retorna null se o piloto não for encontrado em nenhuma equipe
  },
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



<template>
  <Sidenav></Sidenav>
  <div class="main">
  <v-table class="table">
    <thead>
      <tr>
        <th colspan="2" class="text-center">Distance: {{ tableData.distance }}</th>
      </tr>
      <tr>
        <th class="text-left">
          Equipa
        </th>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Time
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(pilot, position) in tableData.pilots" :key="position">
          <td>{{ carByPilot(pilot.name) }}</td>
          <td><img :src=carByPilot(pilot.name) alt="car"></td>
          <td>{{ pilot.name }}</td>
          <td v-if="position<1">{{ tableData.time }}</td>
          <td v-else>+ {{ pilot.time }}</td>
      </tr>
    </tbody>
  </v-table>
  </div>
</template>

<style>
.table{
  background: rgba(0,0,0,0) !important;
  color: white !important;
}

.table tbody tr:nth-child(odd) td {
  background-color: rgba(0, 0, 0, 0.338);
}

.table tbody tr:nth-child(even) td {
  background-color: rgba(0, 0, 0, 0);
}

</style>