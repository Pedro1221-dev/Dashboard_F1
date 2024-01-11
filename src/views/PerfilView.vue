<template>
    <Sidenav></Sidenav>
  
    <div class="main">
      <div class="imgBack">
        <img src="../img/backgrounds/backgroundPerfil.jpg">
      </div>
      
      <div class="perfil">
        <div class="grid-container">
            <div class="avatar" @click="dialog = true">
                <v-avatar size="70" :image="`../src/img/avatars/${store.user.avatarNumber}.png`"></v-avatar>
                <div class="hover-icon"><img src="../img/icons/edit.png"></div>
            </div>
          <div class="username">
            <b>{{ user }}</b>    
          </div>
          <form class="form" @submit.prevent="submitForm">
            <div class="input-old-password">
              <v-text-field
              v-model="old_password"
                density="compact"
                placeholder="Password Antiga"
                prepend-inner-icon="mdi-account-outline"
                variant="outlined"
                required>
        </v-text-field>
            </div>
            <div class="input-new-password">
              <v-text-field
              v-model="new_password"
                density="compact"
                placeholder="Password Nova"
                prepend-inner-icon="mdi-account-outline"
                variant="outlined"
                required></v-text-field>
            </div>
            <v-btn
            block
            class="mb-8"
            color="white"
            size="large"
            variant="tonal"
            type="submit"
            >
            Alterar
        </v-btn>
          </form>    
        </div>
      </div>

      <v-dialog v-model="dialog" max-width="290">
            <v-card>
                <v-card-title class="headline">Escolha o seu avatar</v-card-title>
                <v-card-text>
                <div class="avatars">
                    <img
                    v-for="avatarNumber in 10"
                    :key="avatarNumber"
                    :src="`../src/img/avatars/${avatarNumber}.png`"
                    @click="selectAvatar(avatarNumber)"
                    />
                </div>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-alert
    v-model="showAlert"
    :color="alertType"
    dismissible
    class="position-fixed alert-top-right"
  >
    {{ alertMessage }}
  </v-alert>

    </div>
  </template>
  
  <script>
  import { useUserStore } from "@/stores/user";
  import Sidenav from "../components/sidenav.vue";
  
  export default {
    data() {
      return {
        store: useUserStore(),
        dialog: false,
        images: [
        '../src/img/avatars/1.png',
        '../src/img/avatars/2.png',
      ],
      selectedImage: '',
      old_password: '',
      new_password: '',
      showAlert: false,
      alertMessage: '',
      alertType: 'success',
      };
    },
  
    computed: {
      user() {
        return this.store.getUser.username;
      },
    },
  
    components: {
      Sidenav,
    },
    methods: {
        selectImage(image) {
            this.selectedImage = image;
            this.dialog = false;
        },
        selectAvatar(avatarNumber) {
            this.store.updateAvatar(this.store.user.id, avatarNumber);
            this.dialog = false;
        },
        submitForm() {
            if (this.old_password !== this.store.user.password) {
                this.alertMessage='A senha antiga está incorreta!';
                this.alertType = 'error';
                this.showAlert = true;
                return;
            }

            this.store.updatePassword(this.store.user.id, this.new_password);
            this.alertMessage='Senha atualizada com sucesso!';
            this.alertType = 'success';
            this.showAlert = true;
            },
        },
  }
  </script>
  
  <style lang="scss" scoped>
  .imgBack img {
    width: 100% !important;
    height: 300px !important;
  }
  
  .grid-container {
    width: 35%;
    display: grid;
    grid-template-areas: 
      "avatar username"
      "form form";
    grid-gap: 25px;
    align-items: center;
  }
  
  .avatar {
    grid-area: avatar;
  }



  .avatar {
  position: relative;
  display: inline-block;
  width: 70px; /* corresponde ao tamanho do v-avatar */
  height: 70px; /* corresponde ao tamanho do v-avatar */
}

.v-avatar {
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
  cursor: pointer;
}

.avatar:hover .v-avatar {
  opacity: 0.25;
}
.hover-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  cursor: pointer;
}

.hover-icon img {
  width: 20px;
  height: 20px;
}

.avatar:hover .hover-icon {
  opacity: 1;
}
  
  .username {
    grid-area: username;
  }
  
  .form {
    grid-area: form;
    display: grid;
    grid-template-areas: 
      "input-old-password"
      "input-new-password";
    grid-gap: 10px;
  }
  
  .input-old-password {
    grid-area: input-old-password;
  }
  
  .input-new-password {
    grid-area: input-new-password;
  }

  .alert-top-right {
  top: 0;
  right: 0;
  width: auto;
  max-width: 300px;
  z-index: 2000;
}
  </style>