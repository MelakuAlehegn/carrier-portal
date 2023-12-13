<template>
  <main class="">
    <div class="bg-[url('../assets/MMCY-Tech-Job_section-1.png')] md:bg-left-top bg-center">
      <!-- Banner header -->
      <header class="text-white text-center py-0 h-full space-y-1 justify-items-end">
        <div class="px-4 py-10 md:pt-40 md:pl-30 md:pb-24 md:pr-4">
          <h1 class="md:text-[80px] text-[50px] font-bold">Available Jobs</h1>
        </div>
      </header>
    </div>
    <div
      class="flex container mt-10 mx-auto text-sm justify-between px-3 py-3 rounded-lg bg-white w-2/12"
    >
      <button @click="toggleFilter" class="cursor-pointer font-medium text-[16px]">
        {{ showFilter ? 'Close Filter' : 'Filter Jobs' }}
      </button>
      <button v-if="showFilter" @click="clearAllFilters" class="cursor-pointer">Clear</button>
    </div>
    <div v-if="showFilter" class="container mt-7 mx-auto flex justify-center items-center my-2">
      <div
        class="single-job flex items-start bg-white w-4/5 text-bulePrimary cursor-pointer my-3 px-10 py-6 rounded-3xl"
      >
        <JobsFilter />
      </div>
    </div>
    <!-- <h1 class="text-center">Browse Jobs</h1> -->
    <AllJobs />
  </main>
</template>

<script>
import JobsFilter from '@/components/Jobs/JobsFilter.vue'
import AllJobs from '@/components/Jobs/AllJobs.vue'
import { useJobStore } from '../stores/JobStore'

export default {
  components: {
    JobsFilter,
    AllJobs
  },
  data() {
    return {
      showFilter: false
    }
  },
  methods: {
    toggleFilter() {
      this.showFilter = !this.showFilter
    },
    clearAllFilters() {
      const jobStore = useJobStore()
      jobStore.clearFilters()
    }
  }
}
</script>
