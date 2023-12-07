<template>
  <main class="">
    <!-- filters section -->
    <div
      class="flex container mt-56 mx-auto text-sm justify-between px-3 py-2 rounded-lg bg-white w-2/12"
    >
      <button @click="toggleFilter" class="cursor-pointer font-medium">
        {{ showFilter ? 'Close Filter' : 'Filter Jobs' }}
      </button>
      <button v-if="showFilter" class="cursor-pointer">Clear All</button>
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
    }
  }
}
</script>
