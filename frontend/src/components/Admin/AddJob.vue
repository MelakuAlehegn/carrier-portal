<template>
    <div class="bg-lightGrey min-h-screen flex items-center justify-center py-5">
      <div class="bg-white p-8 rounded w-full mx-40 my-40 border border-orange-600 shadow-xl">
        <h2 class="text-2xl font-bold mb-4">Add Job</h2>
        <form @submit.prevent="submitJob">
          <div class="mb-4">
            <label for="title" class="block text-gray-800">Title:</label>
            <input type="text" id="title" v-model="job.title" required
              class="w-full border border-gray-300 rounded px-3 py-2">
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-800">Description:</label>
            <textarea id="description" v-model="job.description" required
              class="w-full border border-gray-300 rounded px-3 py-2"></textarea>
          </div>
          <div class="mb-4">
      <label for="qualifications" class="block font-medium">Qualification:</label>
      <input type="text" id="qualifications" v-model="qualificationInput" @keyup.enter="addQualification" class="border border-gray-300 rounded-md px-3 py-2 w-full">
      <ul class="mt-1">
        <li v-for="qualification in job.qualifications" :key="qualification" class="text-gray-600">{{ qualification }}</li>
      </ul>
      <button type="button" @click="addQualification" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Add Qualification</button>
    </div>
          <div class="mb-4">
            <label for="createdBy" class="block text-gray-800">Created By:</label>
            <input type="text" id="createdBy" v-model="job.createdBy"
              class="w-full border border-gray-300 rounded px-3 py-2">
          </div>
          <div class="mb-4">
          <label for="department" class="block text-gray-800">Department:</label>
          <select id="department" v-model="job.department"
            class="w-full border border-gray-300 rounded px-3 py-2">
            <option value="sdr">SDR</option>
            <option value="developer">Developer</option>
            <option value="general">General</option>
          </select>
        </div>
          <div class="mb-4">
            <label for="client" class="block text-gray-800">Client:</label>
            <input type="text" id="client" v-model="job.client"
              class="w-full border border-gray-300 rounded px-3 py-2">
          </div>
          <div class="mb-4">
            <label for="experience" class="block text-gray-800">Experience:</label>
            <input type="text" id="experience" v-model="job.experience"
              class="w-full border border-gray-300 rounded px-3 py-2">
          </div>
          <div class="mb-4">
            <label for="contract" class="block text-gray-800">Contract:</label>
            <input type="text" id="contract" v-model="job.contract"
              class="w-full border border-gray-300 rounded px-3 py-2">
          </div>
          <div class="mb-4">
            <label for="location" class="block text-gray-800">Location:</label>
            <input type="text" id="location" v-model="job.location"
              class="w-full border border-gray-300 rounded px-3 py-2">
          </div>
          <div class="mb-4">
      <label for="skills" class="block font-medium">Skill:</label>
      <input type="text" id="skills" v-model="skillInput" @keyup.enter="addSkill" class="border border-gray-300 rounded-md px-3 py-2 w-full">
      <ul class="mt-1">
        <li v-for="skill in job.skills" :key="skill" class="text-gray-600">{{ skill }}</li>
      </ul>
      <button type="button" @click="addSkill" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Add Skill</button>
    </div>
          <div class="mb-4">
            <label for="salary" class="block text-gray-800">Salary:</label>
            <input type="text" id="salary" v-model="job.salary"
              class="w-full border border-gray-300 rounded px-3 py-2">
          </div>
  
          <button type="submit"
            class="bg-bluePrimary text-white font-bold py-2 px-4 rounded hover:bg-orangePrimary">Submit</button>
        </form>
        <div v-if="isJobSubmitted" class="text-green-600 mt-4">Job successfully added!</div>
        <div v-if="isJobNotSubmitted" class="text-red-600 mt-4">Job is not successfully added!</div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AddJob',
    data() {
      return {
        job: {
          title: '',
          description: '',
          qualifications: [],
          createdBy: '',
          department: 'general',
          client: '',
          experience: '',
          contract: '',
          location: '',
          skills: [],
          salary: '',
        },
        isJobSubmitted: false,
        isJobNotSubmitted: false,
      };
    },
    methods: {
        async submitJob() {
    try {
      const response = await axios.post('http://localhost:3000/api/jobs', this.job);
      console.log(response.data);
      this.isJobSubmitted = true;
      // Handle success, e.g., show a success message
    } catch (error) {
      console.error(error);
      this.isJobNotSubmitted = true;
      // Handle error, e.g., show an error message
    }
  },
  addQualification() {
  if (this.qualificationInput) {
    const qualifications = this.qualificationInput.split(',').map(qualification => qualification.trim());
    this.job.qualifications.push(...qualifications);
    this.qualificationInput = ''; // Clear the input field after adding the tools
  }
},
addSkill() {
  if (this.skillInput) {
    const skills = this.skillInput.split(',').map(skill => skill.trim());
    this.job.skills.push(...skills);
    this.skillInput = ''; // Clear the input field after adding the tools
  }
},
    },
  };
  </script>