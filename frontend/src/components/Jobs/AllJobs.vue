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
        v-for="(job, index) in jobs"
        :key="job._id"
        @jobClick="handleJobClick(index)"
        :isSelected="selectedJob === index"
        :job="job"
      />
    </div>
    <JobDetails
      v-if="jobClicked && selectedJob !== null"
      :job="jobs[selectedJob]"
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
  async mounted() {
    const jobStore = useJobStore()
    await jobStore.fetchJobs(jobStore.filterqueries)
    this.jobs = jobStore.jobList

    this.$watch(
      () => jobStore.filterqueries,
      async (newFilterQueries) => {
        await jobStore.fetchJobs(newFilterQueries)
        this.jobs = jobStore.jobList
      }
    )
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