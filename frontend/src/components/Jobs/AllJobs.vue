<template>
  <div class="flex">
    <div
      :class="{
        'w-full transition-all duration-300 ease-in-out': !jobClicked,
        'w-3/4 transition-all duration-300 ease-in-out': jobClicked
      }"
      class="flex flex-col gap-5 py-3 transform origin-left"
    >
      <SingleJob @jobClick="handleJobClick" :selected="selectedJob === 1" :jobId="1" />
      <SingleJob @jobClick="handleJobClick" :selected="selectedJob === 2" :jobId="2" />
      <SingleJob @jobClick="handleJobClick" :selected="selectedJob === 3" :jobId="3" />
      <SingleJob @jobClick="handleJobClick" :selected="selectedJob === 4" :jobId="4" />
      <SingleJob @jobClick="handleJobClick" :selected="selectedJob === 5" :jobId="5" />
      <SingleJob @jobClick="handleJobClick" :selected="selectedJob === 6" :jobId="6" />
      <SingleJob @jobClick="handleJobClick" :selected="selectedJob === 7" :jobId="7" />
      <SingleJob @jobClick="handleJobClick" :selected="selectedJob === 8" :jobId="8" />
      <SingleJob @jobClick="handleJobClick" :selected="selectedJob === 9" :jobId="9" />
    </div>
    <JobDetails v-if="jobClicked" @closeDetails="handleCloseDetails" />
  </div>
</template>

<script>
import JobDetails from './JobDetails.vue'
import SingleJob from './SingleJob.vue'

export default {
  components: {
    SingleJob,
    JobDetails
  },
  data() {
    return {
      jobClicked: false,
      selectedJob: null
    }
  },
  methods: {
    handleJobClick(jobId) {
      this.jobClicked = true
      this.selectedJob = jobId
    },
    handleCloseDetails() {
      this.jobClicked = false
      this.selectedJob = null
    }
  }
}
</script>

<style>
</style>