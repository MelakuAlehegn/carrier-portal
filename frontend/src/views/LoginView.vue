<template>
  <div>
    <div class="bg-[url('../assets/MMCY-Tech-Job_section-1.png')] md:bg-left-top bg-center">
      <!-- Banner header -->
      <header class="text-white text-center py-8 h-full space-y-4 justify-items-end">
        <div class="px-4 py-40 md:pt-40 md:pl-30 md:pb-24 md:pr-4">
          <h1 class="md:text-[80px] text-[50px] font-bold">Login</h1>
        </div>
      </header>
    </div>
    <form
      @submit.prevent="loginUser"
      class="flex flex-col items-center max-w-[400px] mx-auto md:my-8 bg-white text-left font-Poppins px-12 py-10 rounded-lg shadow-lg"
    >
      <h2 class="text-3xl text-bluePrimary font-black self-start">Login</h2>
      <p class="text-base self-start my-2">Please login to your account</p>
      <!--Email Section-->
      <div class="relative w-full">
        <input
          type="email"
          placeholder="Email Address"
          required
          v-model="email"
          class="p-2 mt-[15px] bg-lightGrey block w-full border-b border-bluePrimary focus:outline-none mb-[10px] rounded-lg focus:border-orangePrimary"
        />
        <span class="absolute inset-y-0 right-0 flex items-center pr-3">
          <i
            class="fa fa-envelope-o text-orangePrimary font-black text-[20px] pt-2 cursor-pointer"
          ></i>
        </span>
      </div>
      <!--Password Section-->
      <div class="relative w-full">
        <input
          :type="showPassword ? 'text' : 'password'"
          placeholder="Password"
          required
          v-model="password"
          class="p-2 mt-[15px] block bg-lightGrey w-full border-b border-bluePrimary rounded-lg focus:outline-none focus:border-orangePrimary pr-[40px]"
        />
        <span class="absolute inset-y-0 right-0 flex items-center pr-3">
          <i
            @click="showPassword = !showPassword"
            :class="showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'"
            class="text-orangePrimary text-[20px] font-black pt-4 cursor-pointer"
          ></i>
        </span>
      </div>
      <!--Error Message-->
      <p v-if="errorMessage" class="text-red-600 text-[16px] py-2">{{ errorMessage }}</p>
      <!--Button-->
      <button
        type="submit"
        class="mt-[25px] mb-[30px] text-white bg-orangePrimary py-[10px] w-full p-2 mb-2 bg-5BA4A4 text-white border border-5BA4A4 rounded-lg hover:bg-63BABA transition duration-300 ease-in-out"
      >
        Login
      </button>
      <p class="text-center">
        <a href="/register" class="underline">Register</a> |
        <a class="underline">Forgot your Password?</a>
      </p>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/userStore';
import router  from '@/router';
import { intendedDestination } from '@/router/navigationGuard.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      errorMessage: '' // Include errorMessage to display login errors
    }
  },
  methods: {
    async loginUser() {
      try {
        const authStore = useAuthStore();
        const userData = await authStore.login(this.email, this.password);
        console.log(userData)
        localStorage.setItem('token', userData.token);
        // If login successful, userData will contain user information
        // You can proceed with further actions after successful login
        if (intendedDestination) {
          router.push(intendedDestination);
          // Reset the intendedDestination to null after redirection
          intendedDestination = null;
        } else {
          // Redirect to a default route after login if no intended destination is stored
          router.push('/'); 
        }
      } catch (error) {
        this.errorMessage = 'Login failed. Please check your credentials.';
        console.error('Error occurred:', this.errorMessage);
        // console.error('Login failed:', error.response ? error.response.data : error.message);
        // Handle the login error here
        // this.errorMessage = error.response ? error.response.data.message : error.message; // Set the error message
      }
    }
  }
}
</script>


<!-- <script>
import { apiClient } from '../services/service'
import { useAuthStore } from '@/stores/userStore';

export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      errorMessage: '' // Include errorMessage to display login errors
    }
  },
  methods: {
    async loginUser() {
      try {
      //   const store = authStore(); 
      //   await store.login(this.email, this.password);
      // if (store.isAuthenticated) {
      //     this.$router.push({ name: 'FormOne' });
      //     console.log('Login successful');
      //   } else  {
      //     this.errorMessage = 'Login failed. Please check your credentials.';
      //     console.error('Error occurred:', this.errorMessage);
      //   }
        // const response = await apiClient.post('http://localhost:3000/api/users/login', {
        //   email: this.email,
        //   password: this.password
        // })

        // console.log(response.data) // Log the response or perform actions as needed
        // // Check if the response contains a message indicating successful email verification
        // if (response.data.message === 'Email verified successfully. Please log in.') {
        //   // Redirect the user to the profile form page after successful email verification
        //   this.$router.push('/FormOne') // Replace '/profile-form' with the route to your profile form
        // } else {
        //   // Handle login success without email verification here
        //   // For example, store the authentication token or navigate to another page
        //   this.$router.push('/')
        // }
        const authStore = useAuthStore();
        authStore.login(this.email, this.password);
        } catch (error) {
        console.error('Login failed:', error.response.data)
        // Handle the login error here
        this.errorMessage = error.response.data.message // Set the error message
      }
    }
  }
}
</script> -->