<template>
  <div class="flex justify-center gap-3">
    <button v-show="page > 1" @click="updatePage('previous')">Previous</button>
    <button @click="updatePage('next')">Next</button>
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
  methods: {
    updatePage(direction) {
      const jobStore = useJobStore()
      let newPage = this.page
      if (direction === 'next') {
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
