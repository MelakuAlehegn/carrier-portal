import { defineStore } from 'pinia';
import { apiClient } from '../services/service';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isLoggedIn: false,
    user: null,
    userId: null, // New state to store user ID
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await apiClient.post('http://localhost:3000/api/users/login', {
          email: email,
          password: password
        });

        const userData = response.data;

        // Store the token and user data in localStorage
        localStorage.setItem('token', userData.token);
        localStorage.setItem('user', JSON.stringify(userData));

        this.isLoggedIn = true;
        this.user = userData;

        // Fetch user data after login and store it in the user state
        await this.fetchUserData();

        return userData;
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      this.user = null;
      this.userId = null; // Clear the user ID on logout
    },
    async fetchUserData() {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          throw new Error('Token not found');
        }

        const response = await apiClient.get('http://localhost:3000/api/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const userData = response.data;
        this.user = userData;

        // Extract user ID and store it
        this.userId = userData._id;

        localStorage.setItem('user', JSON.stringify(userData));
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
      }
    },
  },
});
