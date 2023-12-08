<template>
    <div class="bg-lightGrey min-h-screen flex items-center justify-center py-5">
      <div class="bg-white p-8 rounded w-full mx-40 my-40 border border-orange-600 shadow-xl">
    <form @submit="handleSubmit" class=" border-spacing-1">
      <div class="mb-4">
        <label for="firstName" class="text-sm font-medium">First Name:</label>
        <input type="text" id="firstName" v-model="firstName" class="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md">
      </div>
  
      <div class="mb-4">
        <label for="middleName" class="text-sm font-medium">Middle Name:</label>
        <input type="text" id="middleName" v-model="middleName" class="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md">
      </div>
  
      <div class="mb-4">
        <label for="lastName" class="text-sm font-medium">Last Name:</label>
        <input type="text" id="lastName" v-model="lastName" class="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md">
      </div>
  
      <div class="mb-4">
        <label for="email" class="text-sm font-medium">Email:</label>
        <input type="email" id="email" v-model="email" class="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md">
      </div>
  
      <div v-if="department === 'cvent'" class="mb-4">
        <label for="github" class="text-sm font-medium">GitHub Account:</label>
        <input type="text" id="github" v-model="github" class="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md">
      </div>

      <div v-if="department === 'sdr'" class="mb-4">
        <label for="voiceFile" class="text-sm font-medium">Voice File (Max 10MB):</label>
        <input type="file" id="voiceFile" accept="audio/*" @change="handleVoiceFile" class="mt-1">
      </div>
  
      <div class="mb-4">
        <label for="education" class="text-sm font-medium">Education Qualification:</label>
        <input type="text" id="education" v-model="education" class="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md">
      </div>
  
      <div class="mb-4">
        <label for="experience" class="text-sm font-medium">Experience:</label>
        <input type="text" id="experience" v-model="experience" class="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md">
      </div>
  
      <div class="mb-4">
        <label for="address" class="text-sm font-medium">Address:</label>
        <textarea id="address" v-model="address" class="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md"></textarea>
      </div>
  
      <button type="submit" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
    </form>
  </div>
</div>
  </template>
  
  <script>
  export default {
    name: 'GeneralForm',
    data() {
      return {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        department: '',
        github: '',
        voiceFile: null,
        education: '',
        experience: '',
        address: ''
      };
    },
    methods: {
      handleSubmit(event) {
        event.preventDefault();
  
        // Access form data
        console.log(this.firstName);
        console.log(this.middleName);
        console.log(this.lastName);
        console.log(this.email);
        console.log(this.audioFile);
        console.log(this.education);
        console.log(this.experience);
        console.log(this.address);

        if (this.department === 'cvent') {
        console.log(this.github);
      } else if (this.department === 'sdr') {
        console.log(this.voiceFile);
      }
  
        // Perform form submission actions
        // ...
      },
      handleAudioFile(event) {
        const file = event.target.files[0];
        if (file && file.size <= 10 * 1024 * 1024) {
          this.audioFile = file;
        } else {
          // Handle file size validation error
        }
      }
    }
  }
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>