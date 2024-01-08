<template>
  <div style="display: flex; justify-content: flex-end;">

    <div style="flex: 1; max-width: 450px;">
      <v-card class="mx-auto pa-12 pb-8" elevation="8" rounded="lg" style="height: 100vh;">
        <div class="text-h4 text-white mb-4">Criar uma Conta</div>
        <v-form @sunmit.prevent = "register">
        <!-- Campos de texto para o registro -->
        <v-text-field
          v-model="firstName"
          density="compact"
          placeholder="Primeiro Nome"
          prepend-inner-icon="mdi-account-outline"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="lastName"
          density="compact"
          placeholder="Último Nome"
          prepend-inner-icon="mdi-account-outline"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="username"
          density="compact"
          placeholder="Nome de Utilizador"
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

        <!-- Botão de registro -->
        <v-btn
          block
          class="mb-8"
          color="white"
          size="large"
          variant="tonal"
          type="submit"
        >
          Registar
        </v-btn>
      </v-form>
        <!-- Link para página de login -->
        <v-card-text class="text-center">
          <router-link
            to="/login"
            class="text-white text-decoration-none"
          >
            Já tens uma conta? <v-icon icon="mdi-chevron-right"></v-icon>
          </router-link>
        </v-card-text>
      </v-card>
    </div>

    <div style="flex: 1;">
      <img src="imageRegister.png" alt="Nova Imagem" style="width: 100%; height: 100vh; object-fit: cover;">
    </div>
  </div>
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
      this.$router.push({ name: "home" }); // Redireciona para a página do dashboard após o login
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  },
  },
};
</script>

<style>
html,body {
  overflow: hidden;
}
.v-card {
  background-color: #242833 !important;
}

.v-btn {
  background-color: #F83D49 !important;
}
</style>