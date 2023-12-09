import { defineStore } from 'pinia';
import { apiClient } from '../services/service'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isLoggedIn: false,
    user: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await apiClient.post('http://localhost:3000/api/users/login', {
          email: email,
          password: password
        });

        // Assuming the response contains user data upon successful login
        const userData = response.data;

        localStorage.setItem('token', userData.token);

        this.isLoggedIn = true;
        this.user = userData;

        return userData; // You can return user data if needed
      } catch (error) {
        // Handle login errors here if needed
        console.error('Login failed:', error);
        throw error; // Rethrow the error to handle it in the component
      }
    },
    logout() {
      // Perform logout logic here
      // Update store state after logout
      localStorage.removeItem('token');
      // Set authentication status in your Vuex store or similar method
      store.dispatch('setLoggedIn', false);
      this.isLoggedIn = false;
      this.user = null;
    },
  },
});
