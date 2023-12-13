<template>
  <div class="flex justify-center gap-3 m-10">
    <button v-show="page > 1" @click="updatePage('previous')">Previous</button>
    <span
      class="text-white h-4 w-4 p-3 rounded-full bg-orange-400 flex justify-center items-center"
    >
      {{ page }}</span
    >
    <button v-show="showNextButton" @click="updatePage('next')">Next</button>
  </div>
</template>

<script>
import { useJobStore } from '../../stores/JobStore'

export default {
  data() {
    return {
      page: 1
    }
  },
  computed: {
    showNextButton() {
      const jobStore = useJobStore()
      return jobStore.hasNextPage
    }
  },
  methods: {
    updatePage(direction) {
      const jobStore = useJobStore()
      let newPage = this.page
      if (direction === 'next' && this.showNextButton) {
        newPage += 1
      } else if (direction === 'previous' && newPage > 1) {
        newPage -= 1
      }

      const newFilter = { page: newPage }
      jobStore.setFilterQueries(newFilter)
      this.page = newPage
    }
  }
}
</script>

<style>
</style>
