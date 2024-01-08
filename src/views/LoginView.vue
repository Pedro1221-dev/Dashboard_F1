<template>
  <div style="display: flex; justify-content: flex-end;">
    <div style="flex: 1;">
      <img src="../img/backgrounds/imageBK.jpg" alt="Imagem" style="width: 100%; height: 100vh; object-fit: cover;">
    </div>
    <v-form @submit.prevent = "login">
    <div style="flex: 1; max-width: 450px;">
      <v-card class="mx-auto pa-12 pb-8" elevation="8" style="height: 100vh;">
        <div class="text-h4 text-white mb-4">Acede à tua Conta</div>

        <v-text-field
          v-model="username"
          density="compact"
          placeholder="Username"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-btn
          block
          class="mb-8"
          color="white"
          size="large"
          variant="tonal"
          type="submit"
        >
          Aceder
        </v-btn>

        <v-card-text class="text-center">
          <router-link
            to="/register"
            class="text-white text-decoration-none"
          >
           Não tens conta? <v-icon icon="mdi-chevron-right"></v-icon>
          </router-link>
        </v-card-text>
      </v-card>
    </div>
  </v-form>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/user";
export default {
  data() {
    return {
      store: useUserStore(),
      username: "",
      password: "",
      visible: false // Adicionando o estado para controlar a visibilidade da senha
    };
  },
  methods: {
    login() {
      try {
        this.store.login(this.username, this.password)
        this.$router.push({ name: "dashboard" });
      } catch (error) {
         alert(`Error: ${error.message}`); 
      }
    },
  },
};
</script>

<style scoped>

.v-field.v-field--prepended {
    --v-field-padding-start: 6px;
    color: white !important;
}

html,body {
  overflow: hidden !important;
}
.v-card {
  background-color: #242833 !important;
}

.v-btn {
  background-color: #F83D49 !important;
}
</style>
