<script>
import mockData from "@/api/mocks/mock";
import Sidenav from "../components/sidenav.vue";

export default {
  data() {
    return {
      currentIndex: 0,
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
  <v-table>
    <thead>
      <tr>
        <th colspan="2" class="text-center">Distance: {{ tableData.distance }}</th>
      </tr>
      <tr>
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
        <td>{{ pilot.name }}</td>
        <td v-if="position<1">{{ tableData.time }}</td>
        <td v-else>+ {{ pilot.time }}</td>
      </tr>
    </tbody>
  </v-table>
  </div>
</template>

<style>

</style>