import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isUserAuthenticated: false,
    user: null,
    users: [
      { username: "teste", password: "123", type: "admin" },
    ],
  }),
  getters: {
    getUser: (state) => state.user,
    isUser: (state) => state.isUserAuthenticated,
  },
  actions: {
    register(first,last,username,password){
          // Verifica se o usuário já existe
        const existingUser = this.users.find((user) => user.username === username);
        if (existingUser) {
          throw Error("Username already exists");
        }

        // Cria um novo usuário
        const newUser = {
          username,
          password,
          type: "regular", // Defina o tipo conforme necessário
          firstName: first,
          lastName: last,
        };

        // Adiciona o novo usuário à lista
        this.users.push(newUser);
        this.isUserAuthenticated = true;
    },
    login(username, password) {
      const user = this.users.find(
        (user) => user.username == username && user.password == password
      );
      if (user) {
        this.$patch({
          isUserAuthenticated: true,
          user: user
        });
        console.log(this.isUserAuthenticated);
      } else {
        throw Error("User invalid!");
      }
    },
    logout() {
      this.$patch({
        isUserAuthenticated: false,
        user: null
      });
    }
  },  
  persist: true,
});