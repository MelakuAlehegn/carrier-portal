<template>
    <div class="bg-lightGrey pb-0 md:pb-4">
    <div class="bg-[url('../assets/MMCY-Tech-Job_section-1.png')] md:bg-left-top bg-center">
    <!-- Banner header -->
    <header class=" text-white text-center py-8 h-full space-y-4 justify-items-end">
      <div class="px-4 py-40 md:pt-40 md:pl-30 md:pb-24 md:pr-4 ">
        <h1 class="md:text-[80px] text-[50px] font-bold">Register</h1>
      </div>
    </header>
    </div>
    <div v-if="showSuccessMessage" class="bg-green-500 text-white text-center py-2 rounded-lg mb-4">
        Registration Successful. Please confirm your email.
    </div>
    <form @submit.prevent="registerUser" class="flex flex-col items-center max-w-[400px] mx-auto md:my-8 bg-white text-left font-Poppins px-12 py-10 rounded-lg shadow-lg">
      <h2 class="text-3xl text-bluePrimary font-black self-start">Register</h2>
      <p class="text-base self-start my-2">Create an Account</p>
        <!--Email Section-->
      <div class="relative w-full">
      <input type="email" placeholder="Email Address" required v-model="email" class="p-2 mt-[15px] bg-lightGrey block w-full border-b border-bluePrimary focus:outline-none mb-[10px] rounded-lg focus:border-orangePrimary">
      <span class="absolute inset-y-0 right-0 flex items-center pr-3">
        <i class="fa fa-envelope-o text-orangePrimary font-black text-[20px] pt-2 cursor-pointer"></i>
      </span>
      </div>
        <!--Password Section-->
      <div class="relative w-full">
      <input :type="showPassword ? 'text' : 'password'" placeholder="Password" required v-model="password"  @input="toggleConfirmPasswordVisibility" class="p-2 mt-[15px] mb-[10px] block bg-lightGrey w-full border-b border-bluePrimary rounded-lg focus:outline-none focus:border-orangePrimary pr-[40px]">
      <span class="absolute inset-y-0 right-0 flex items-center pr-3">
        <i @click="showPassword = !showPassword" :class="showPassword ? 'fa fa-eye' : 'fa fa-eye-slash' " class="text-orangePrimary text-[20px] font-black pt-4 cursor-pointer"></i>
      </span>
      </div>
      <!-- Confirm Password Section -->
      <div v-if="password !== ''" class="relative w-full">
      <input v-if="showConfirmPassword" :type="showPassword ? 'text' : 'password'" placeholder="Confirm Password" required v-model="confirmPassword" class="p-2 mt-[15px] mb-[10px] block bg-lightGrey w-full border-b border-bluePrimary rounded-lg focus:outline-none focus:border-orangePrimary pr-[40px]">
      <span class="absolute inset-y-0 right-0 flex items-center pr-3">
        <i @click="showPassword = !showPassword" :class="showPassword ? 'fa fa-eye' : 'fa fa-eye-slash' " class="text-orangePrimary text-[20px] font-black pt-4 cursor-pointer"></i>
      </span>
      </div>
        <!--Error Message-->
      <div v-if="showErrorMessage" class="text-red text-left text-[16px] py-2">
        {{ errorMessage }}
      </div>
        <!--Button-->
      <button type="submit" class="mt-[25px] mb-[30px] text-white bg-orangePrimary py-[10px] w-full p-2 mb-2 bg-5BA4A4 text-white border border-5BA4A4 rounded-lg hover:bg-63BABA transition duration-300 ease-in-out">Register</button>
      <p class="text-center underline"><a href="/login">Already have an account? Login</a></p>
    </form>
    </div>
  </template>

<script>
import { apiClient } from '../services/service';

export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      showConfirmPassword: false,
      showSuccessMessage: false,
      showErrorMessage: false, // New property for error message
      errorMessage: '', // Error message content
      confirmPassword: '',
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await apiClient.post('/users', {
          email: this.email,
          password: this.password,
        });
        console.log(response.data);
        this.showErrorMessage = false;
        this.showSuccessMessage = true;

        // Clear the form after successful registration
        this.email = '';
        this.password = '';

        // Redirect the user to a success page or perform any other action
      } catch (error) {
        // Handle registration errors, e.g., show an error message to the user
        console.error('Registration failed:', error.response.data.message);

        this.showSuccessMessage = false;
        this.showErrorMessage = true; // Show error message on failure
        this.errorMessage = error.response.data.message;
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = this.password !== '';
    },
  },
};
</script>
  
  <!-- <script>
  import { authStore } from '@/store/auth';
  //import ErrorModal from '@/components/ErrorModal.vue';
  
  export default {
    components: {
      ErrorModal
    },
    data() {
      return {
        email: '',
        password: '',
        isErrorModalVisible: false,
        errorMessage: ''
      };
    },
    methods: {
      async loginUser() {
        try {
          const store = authStore(); 
          await store.login(this.email, this.password);
        if (store.isAuthenticated) {
            this.$router.push({ name: 'JobsList' });
            console.log('Login successful');
          } else  {
            this.errorMessage = 'Login failed. Please check your credentials.';
            this.isErrorModalVisible = true;
            console.error('Error occurred:', this.errorMessage);
          }
        } catch (error) {
          console.error('Error occurred:', error);
          this.errorMessage = 'An error occurred while processing your request.';
          this.isErrorModalVisible = true;
        }
      },
      closeErrorModal() {
        this.isErrorModalVisible = false;
      }
    }
  };
  </script> -->
  