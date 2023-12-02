<template>
    <div class="bg-[url('../assets/trans-pattern.png')] bg-center bg-[#192030] w-full">
        <div> 
            <h3 class="text-[32px] text-white pt-10 px-8 font-black">For Inquiries</h3>
        </div>
      <form class="px-8 pt-6 pb-8 w-full" @submit.prevent="submitForm">
        <div class="flex md:flex-row flex-col justify-between"> 
        <div class="mb-4 mx-2 md:mx-4 py-2">
          <label class="block text-white text-[15px] font-bold mb-2" for="name">
            Your Name
          </label>
          <input v-model="formData.name" class="shadow appearance-none border h-[55px] w-full py-[10px] px-[18px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text">
        </div>
        <div class="mb-4 mx-2 md:mx-4 py-2">
          <label class="block text-white text-[15px] font-bold mb-2" for="email">
            Your Email
          </label>
          <input v-model="formData.email" class="shadow appearance-none border h-[55px] w-full py-[10px] px-[18px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email">
        </div>
        </div>
        <div class="mb-6 mx-2 md:mx-4 py-2">
          <label class="block text-white text-[15px] font-bold mb-2" for="message">
            How can we help?
          </label>
          <textarea v-model="formData.message" class="shadow appearance-none border h-[170px] w-full py-[10px] px-[18px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message"></textarea>
        </div>
        <div class="flex items-center justify-between">
            <button class="bg-orangePrimary text-white text-[16px] w-full flex justify-center m-2 md:m-6 font-poppins py-[15px] px-[35px] hover:bg-opacity-90 transition duration-300">
                        SEND
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Here you can handle the form submission logic, such as sending data to a server
        console.log('Form submitted:', this.formData);
        // For demo purposes, you can clear the form after submission
        this.formData = {
          name: '',
          email: '',
          message: ''
        };
      }
    }
  };
  </script>
  