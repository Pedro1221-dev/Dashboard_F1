<template>
    <div>
      <Sidenav></Sidenav>
      <div class="main">
        <RouterLink :to="{ name: 'pilotstats' }">Pilotos</RouterLink>
        <RouterLink :to="{ name: 'racestats' }" class="ml-10">Corridas</RouterLink>
        <br><br>
        <select v-model="selectedConstructor" @change="handleConstructorChange" style="border: 1px solid white;">
          <option v-for="(constructor, index) in constructorStore.$state.constructors" :key="index" :value="constructor">
            {{ constructor.name }}
          </option>
        </select>
  
        <div v-if="selectedConstructor">
          <h1>{{ selectedConstructor.name }}</h1>
          <p>{{ selectedConstructor.nationality }}</p>
  
          <!-- Display drivers associated with the selected constructor -->
          <div v-if="selectedConstructor.drivers && selectedConstructor.drivers.length">
            <h2>Drivers:</h2>
              <p v-for="(driver, index) in selectedConstructor.drivers" :key="index">
                {{ driver.name }}
              </p>
              
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidenav from "../components/sidenav.vue";
  import { useConstructorStore } from "@/stores/constructor";
  
  export default {
    data() {
      return {
        constructorStore: useConstructorStore(),
        selectedConstructor: null,
        newImg: null,
      };
    },
    created() {
      this.constructorStore.fetchConstructors();
    },
    methods: {
      pilotPhoto(driveName){
        newImg=`../img/drivers/${driveName}.jpg`
        return newImg
      },
      handleConstructorChange() {
        // This function will be called when the selected constructor changes
        console.log(this.selectedConstructor);
  
        // Manually associate drivers with the selected constructor
        this.associateDriversWithConstructor();
      },
      associateDriversWithConstructor() {
  if (this.selectedConstructor) {
    // Create a mapping between constructor names and associated drivers
    const driverMapping = {
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
    };

    // Retrieve drivers based on the selected constructor name
    const drivers = driverMapping[this.selectedConstructor.name.toLowerCase()] || [];

    // Update the drivers property in the selectedConstructor
    this.selectedConstructor.drivers = drivers.map(driverName => ({ name: driverName }));
  }
},

    },
    components: {
      Sidenav,
    },
  };
  </script>
  