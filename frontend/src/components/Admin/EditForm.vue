<template>
    <div class="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50 overflow-scroll py-[700px]">
      <div class="bg-white p-6 rounded shadow ">
        <h2 class="text-xl font-bold mb-4">Edit Job</h2>
        <form @submit.prevent="updateJob">
          <!-- Form fields -->
          <label for="jobTitle" class="block mb-2">Title:</label>
          <input v-model="editJobData.title" type="text" id="jobTitle" required class="w-full px-3 py-2 border border-gray-300 rounded mb-4">

          <label for="jobDescription" class="block mb-2">Description:</label>
          <textarea v-model="editJobData.description" id="jobDescription" rows="4" required class="w-full px-3 py-2 border border-gray-300 rounded mb-4"></textarea>

          <label for="jobQualifications" class="block mb-2">Qualifications:</label>
          <input v-model="editJobData.qualifications" type="text" id="jobQualifications" class="w-full px-3 py-2 border border-gray-300 rounded mb-4">

          <label for="jobCreatedBy" class="block mb-2">Created By:</label>
          <input v-model="editJobData.createdBy" type="text" id="jobCreatedBy" class="w-full px-3 py-2 border border-gray-300 rounded mb-4">

          <label for="jobDepartment" class="block mb-2">Department:</label>
          <input v-model="editJobData.department" type="text" id="jobDepartment" class="w-full px-3 py-2 border border-gray-300 rounded mb-4">

          <label for="jobClient" class="block mb-2">Client:</label>
          <input v-model="editJobData.client" type="text" id="jobClient" class="w-full px-3 py-2 border border-gray-300 rounded mb-4">

          <label for="jobExperience" class="block mb-2">Experience:</label>
          <input v-model="editJobData.experience" type="text" id="jobExperience" class="w-full px-3 py-2 border border-gray-300 rounded mb-4">

          <label for="jobContract" class="block mb-2">Contract:</label>
          <input v-model="editJobData.contract" type="text" id="jobContract" class="w-full px-3 py-2 border border-gray-300 rounded mb-4">

          <label for="jobLocation" class="block mb-2">Location:</label>
          <input v-model="editJobData.location" type="text" id="jobLocation" class="w-full px-3 py-2 border border-gray-300 rounded mb-4">

          <label for="jobSkills" class="block mb-2">Skills:</label>
          <input v-model="editJobData.skills" type="text" id="jobSkills" class="w-full px-3 py-2 border border-gray-300 rounded mb-4">

          <label for="jobSalary" class="block mb-2">Salary:</label>
          <input v-model="editJobData.salary" type="text" id="jobSalary" class="w-full px-3 py-2 border border-gray-300 rounded mb-4">

          <div class="flex justify-end">
            <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded-md mr-2">Update</button>
            <button @click="cancelEdit" class="px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: {
      jobData: {
        type: Object,
        required: true,
      },
    },
    methods: {
      cancelEdit() {
        this.$emit('cancelEdit'); // Emit the cancelEdit event to the parent component
      },
      async updateJob() {
        try {
          // Update job logic
        } catch (error) {
          console.error('Error updating job:', error);
        }
      },
    },
  };
  </script>
  
  <style>
  /* Styles for the EditJobForm component */
  </style>