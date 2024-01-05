<template>
  <v-form @submit.prevent="register"> 
    <v-card
        class="mx-auto"
        max-width="344"
        title="User Registration"
      >
        <v-container>
          <v-text-field
            v-model="first"
            color="primary"
            label="First name"
            variant="underlined"
          ></v-text-field>
    
          <v-text-field
            v-model="last"
            color="primary"
            label="Last name"
            variant="underlined"
          ></v-text-field>
    
          <v-text-field
            v-model="username"
            color="primary"
            label="Username"
            variant="underlined"
          ></v-text-field>
    
          <v-text-field
            v-model="password"
            color="primary"
            label="Password"
            placeholder="Enter your password"
            variant="underlined"
          ></v-text-field>
    
        </v-container>
    
        <v-divider></v-divider>
    
        <v-card-actions>
          <v-spacer></v-spacer>
    
          <v-btn color="success" type="submit">
            Complete Registration
    
            <v-icon icon="mdi-chevron-right" end></v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-form>
    
  </template>

<script>
import { useUserStore } from "@/stores/user";
export default {
  data() {
    return {
      store: useUserStore(),
      first: "",
      last: "",
      username: "",
      password: "",
    };
  },
  methods: {
  async register() {
    try {
      await this.store.register(this.first, this.last, this.username, this.password);
      await this.store.login(this.username, this.password);
      this.$router.push({ name: "dashboard" }); // Redireciona para a página do dashboard após o login
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  },
  },
};
</script>

<style lang="scss" scoped>

</style>