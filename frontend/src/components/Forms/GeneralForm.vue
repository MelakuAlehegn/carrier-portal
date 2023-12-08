<template>
    <div class="py-36">
    <form @submit="handleSubmit" class="max-w-md mx-auto">
      <div class="mb-4">
        <label for="firstName" class="text-sm font-medium">First Name:</label>
        <input type="text" id="firstName" v-model="firstName" class="mt-1 px-3 py-2 w-full border rounded-md">
      </div>
  
      <div class="mb-4">
        <label for="middleName" class="text-sm font-medium">Middle Name:</label>
        <input type="text" id="middleName" v-model="middleName" class="mt-1 px-3 py-2 w-full border rounded-md">
      </div>
  
      <div class="mb-4">
        <label for="lastName" class="text-sm font-medium">Last Name:</label>
        <input type="text" id="lastName" v-model="lastName" class="mt-1 px-3 py-2 w-full border rounded-md">
      </div>
  
      <div class="mb-4">
        <label for="email" class="text-sm font-medium">Email:</label>
        <input type="email" id="email" v-model="email" class="mt-1 px-3 py-2 w-full border rounded-md">
      </div>
  
      <div class="mb-4">
        <label for="audioFile" class="text-sm font-medium">Audio File (Max 10MB):</label>
        <input type="file" id="audioFile" accept="audio/*" @change="handleAudioFile" class="mt-1">
      </div>
  
      <div class="mb-4">
        <label for="education" class="text-sm font-medium">Education Qualification:</label>
        <input type="text" id="education" v-model="education" class="mt-1 px-3 py-2 w-full border rounded-md">
      </div>
  
      <div class="mb-4">
        <label for="experience" class="text-sm font-medium">Experience:</label>
        <input type="text" id="experience" v-model="experience" class="mt-1 px-3 py-2 w-full border rounded-md">
      </div>
  
      <div class="mb-4">
        <label for="address" class="text-sm font-medium">Address:</label>
        <textarea id="address" v-model="address" class="mt-1 px-3 py-2 w-full border rounded-md"></textarea>
      </div>
  
      <button type="submit" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
    </form>
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
        audioFile: null,
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