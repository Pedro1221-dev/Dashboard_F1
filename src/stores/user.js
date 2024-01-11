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
    register(first,last,username,password,avatarNumber = 1){
          // Verifica se o usuário já existe
        const existingUser = this.users.find((user) => user.username === username);
        if (existingUser) {
          throw Error("Username already exists");
        }

        const newUser = {
          id: this.users.length + 1,
          username,
          password,
          avatarNumber,
        };
      
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
    },
    updatePassword(userId, newPassword) {
      const userInUsers = this.users.find(user => user.id === userId);
      const userInUser = this.user && this.user.id === userId ? this.user : null;
    
      if (userInUsers) {
        userInUsers.password = newPassword;
      } else {
        console.error(`User with ID ${userId} not found in users.`);
      }
    
      if (userInUser) {
        userInUser.password = newPassword;
      } else {
        console.error(`User with ID ${userId} not found in user.`);
      }
    },
    updateAvatar(userId, newAvatarNumber) {
      const user = this.users.find(user => user.id === userId);
    
      if (user) {
        user.avatarNumber = newAvatarNumber;
      } else {
        console.error(`User with ID ${userId} not found.`);
      }
    },
  },  
  persist: true,
});