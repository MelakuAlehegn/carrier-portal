<template>
  <div class="flex">
    <div
      :class="{
        'w-full transition-all duration-300 ease-in-out': !jobClicked,
        'w-3/4 transition-all duration-300 ease-in-out': jobClicked
      }"
      class="flex flex-col gap-5 py-3 transform origin-left"
    >
      <SingleJob
        v-for="(job, index) in jobs.jobList"
        :key="job._id"
        @jobClick="handleJobClick(index)"
        :isSelected="selectedJob === index"
        :job="job"
      />
    </div>
    <JobDetails
      v-if="jobClicked && selectedJob !== null"
      :job="jobs.jobList[selectedJob]"
      @closeDetails="handleCloseDetails"
    />
  </div>
</template>

<script>
import JobDetails from './JobDetails.vue'
import SingleJob from './SingleJob.vue'
import { useJobStore } from '../../stores/JobStore'

export default {
  components: {
    SingleJob,
    JobDetails
  },
  data() {
    return {
      jobClicked: false,
      selectedJob: null,
      jobs: {}
    }
  },
  async created() {
    const jobStore = useJobStore()
    await jobStore.fetchJobs()
    this.jobs.jobList = jobStore.jobList
  },
  methods: {
    handleJobClick(index) {
      this.jobClicked = true
      this.selectedJob = index
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