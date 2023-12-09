<template>
    <div class="flex flex-col space-y-4">
      <h1 class="text-xl font-bold">Personal Information</h1>
      <progress-bar :progress="pageProgress" />
      <div class="flex flex-row md:flex-col"> 
      <div class="flex flex-col">
        <!--Full Name-->
      <div class="flex flex-col py-2 m-2">
        <label for="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          v-model="formData.fullName"
          class="rounded-md border border-gray-300 p-2"
        />
      </div>
      <!--Gender-->
      <div class="flex flex-col py-2 m-2">
        <label for="fullName">Gender</label>
        <select v-model="gender" required>
          <option disabled value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <!--Email Address-->
      <div class="flex flex-col py-2 m-2">
        <label for="email">Email Address</label>
        <input
          type="text"
          id="email"
          v-model="formData.email"
          class="rounded-md border border-gray-300 p-2"
        />
      </div>
    </div>  
    </div>
  
      <div class="flex flex-col">
        <label for="about">Write about yourself:</label>
        <textarea
          id="about"
          v-model="formData.about"
          class="rounded-md border border-gray-300 p-2 h-24"
        ></textarea>
      </div>
  
      <label for="skills">Skills:</label>
      <select
        id="skills"
        v-model="formData.skills"
        class="rounded-md border border-gray-300 p-2"
        multiple
      >
        <option v-for="skill in skills" :key="skill.id">{{ skill.name }}</option>
      </select>
  
      <button @click="nextPage" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Next
      </button>
    </div>
  </template>
  
  <script>
//   import ProgressBar from "./ProgressBar.vue";
  
  export default {
    // components: { ProgressBar },
    data() {
      return {
        pageProgress: 0,
        formData: {
          fullName: "",
          gender: "",
          city: "",
          email: "",
          phone: "",
          address: "",
          // ... other form data fields
          skills: [],
        },
        skills: [
          { id: 1, name: "Web Development" },
          // ... other skills
        ],
      };
    },
    methods: {
      nextPage() {
        if (this.formData.fullName && this.formData.email) {
        //   this.pageProgress += 33.33;
          this.$emit("next-page", this.formData); // Emit data to parent component
        } else {
          // Show error message or validation
        }
      },
    },
  };
  </script>
  
  <style>
  /* Tailwind CSS styles for your form & progress bar */
  </style>
  