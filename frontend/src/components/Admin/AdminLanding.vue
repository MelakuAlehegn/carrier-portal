<template>
  <div class="container mx-auto my-36">
    <h1>Admin Panel - Jobs</h1>
    
    <div>
  <router-link to="/addjob">
    <button class="p-4 rounded-lg bg-orangePrimary mx-2 my-2 cursor-pointer hover:translate-x-1 shadow-lg">Add New Job</button>
  </router-link>
</div>
    <!-- Add the job form -->
    <div v-if="showEditForm" class="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50 overflow-scroll py-[700px] ">
      <div class="bg-white p-6 rounded shadow w-[700px]">
        <h2 class="text-xl font-bold mb-4">Edit Job</h2>
        <form @submit.prevent="updateJob">
          <label for="jobTitle" class="block mb-2">Title:</label>
          <input v-model="editJobData.title" type="text" id="jobTitle" required class="w-full px-3 py-2 border border-gray-300 rounded mb-4">

          <label for="jobDescription" class="block mb-2">Description:</label>
          <textarea v-model="editJobData.description" id="jobDescription" rows="4" required class="w-full px-3 py-2 border border-gray-300 rounded mb-4"></textarea>

          <label for="jobQualifications" class="block mb-2">Qualifications:</label>
          <input v-model="editJobData.qualifications" type="text" id="jobQualifications" class="w-full px-3 py-2 border border-gray-300 rounded mb-4">

          <label for="jobCreatedBy" class="block mb-2">Created By:</label>
<input v-model="editJobData.createdBy" type="text" id="jobCreatedBy" class="w-full px-3 py-2 border border-gray-300 rounded mb-4" disabled>

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

    <div class="relative" :class="{ 'blur': showEditForm }">
      <table class="min-w-full bg-white">
  <thead>
    <tr>
      <th class="py-3 px-4 font-semibold text-left bg-blue-500 text-white">Job ID</th>
      <th class="py-3 px-4 font-semibold text-left bg-blue-500 text-white">Title</th>
      <th class="py-3 px-4 font-semibold text-left bg-blue-500 text-white">Created By</th>
      <th class="py-3 px-4 font-semibold text-left bg-blue-500 text-white">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="job in jobs" :key="job._id" class="border-b hover:bg-gray-100">
      <td class="py-3 px-4 border-l">{{ job._id }}</td>
      <td class="py-3 px-4 border-l">{{ job.title }}</td>
      <td class="py-3 px-4 border-l">{{ job.createdBy }}</td>

      <td class="py-3 px-4 border-l">
        <button class="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 transition-colors" @click="editJob(job._id)">Edit</button>
        <button class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors" @click="confirmDelete(job._id)">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
    <!-- Pagination links -->
<div class="flex justify-center mt-4">
  <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md mr-2" :disabled="currentPage === 1" @click="fetchJobsByPage(currentPage - 1)">Previous</button>
  <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md mr-2" v-for="page in totalPages" :key="page" :class="{ 'bg-blue-500 text-white': currentPage === page }" @click="fetchJobsByPage(page)">{{ page }}</button>
  <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md" :disabled="currentPage === totalPages" @click="fetchJobsByPage(currentPage + 1)">Next</button>
</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
  return {
    jobs: [],
    showEditForm: false,
    showAddForm: false,
    editJobData: {
      _id: null,
      title: '',
      description: '',
      qualifications: '',
      createdBy: '',
      department: '',
      client: '',
      experience: '',
      contract: '',
      location: '',
      skills: '',
      salary: '',
    },
    jobToDelete: null,
    totalPages: 0,
    currentPage: 1,
  };
},
  mounted() {
    this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      try {
        const response = await axios.get('http://localhost:3000/api/jobs');
        console.log(response.data.records);
        this.jobs = response.data.records;
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    },
    editJob(jobId) {
      // Find the job by ID in the jobs array
      const job = this.jobs.find((j) => j._id === jobId);
      if (job) {
        // Set the editJobData with the job details
        this.editJobData = { ...job };
        this.showEditForm = true; // Show the edit form
      }
    },
    cancelEdit() {
      this.showEditForm = false; // Hide the edit form
    },
    async updateJob() {
      try {
        const response = await axios.put(`http://localhost:3000/api/jobs/${this.editJobData._id}`, this.editJobData);
        console.log(`Job with ID ${this.editJobData._id} updated successfully.`);
        // Find the index of the updated job in the jobs array
        const index = this.jobs.findIndex((job) => job._id === this.editJobData._id);
        if (index !== -1) {
          // Update the job details in the jobs array
          this.jobs[index] = { ...this.editJobData };
        }
        this.showEditForm = false; // Hide the edit form
      } catch (error) {
        console.error(`Error updating job with ID ${this.editJobData._id}:`, error);
      }
    },
    confirmDelete(jobId) {
      this.jobToDelete = jobId; 
      if (confirm('Are you sure you want to delete this job?')) {
        this.deleteJob();
      }
    },
    async deleteJob() {
      try {
        await axios.delete(`http://localhost:3000/api/jobs/${this.jobToDelete}`);
        console.log(`Job with ID ${this.jobToDelete} deleted successfully.`);
        this.jobs = this.jobs.filter((job) => job._id !== this.jobToDelete);
        this.jobToDelete = null;
      } catch (error) {
        console.error(`Error deleting job with ID ${this.jobToDelete}:`, error);
      }
    },
    async fetchJobsByPage(page) {
      this.currentPage = page;
      try {
        const response = await axios.get(`http://localhost:3000/api/jobs?page=${page}`);
        this.jobs = response.data.records;
        this.totalPages = response.data.pages;
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    },
  },
};
</script>

<style>
.blur {
  filter: blur(4px);
}
</style>