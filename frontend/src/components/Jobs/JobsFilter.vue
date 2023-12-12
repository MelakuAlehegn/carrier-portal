<template>
  <div class="container flex mx-auto my-0 w-4/5 justify-between items-center">
    <div class="flex gap-4 justify-between">
      <div class="flex flex-col gap-2">
        <p class="text-md text-bluePrimary font-bold">Job Type</p>
        <Tags
          :text="'Full-time'"
          :selected="filterqueries.contract === 'fulltime'"
          @click="updateFilter('contract', 'fulltime')"
        />
        <Tags
          :text="'Part-time'"
          :selected="filterqueries.contract === 'partime'"
          @click="updateFilter('contract', 'partime')"
        />
        <Tags
          :text="'Short-term'"
          :selected="filterqueries.contract === 'intrim'"
          @click="updateFilter('contract', 'intrim')"
        />
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-md text-bluePrimary font-bold">Location</p>
        <Tags
          :text="'On-Site'"
          :selected="filterqueries.location === 'onsite'"
          @click="updateFilter('location', 'onsite')"
        />
        <Tags
          :text="'Remote'"
          :selected="filterqueries.location === 'remote'"
          @click="updateFilter('location', 'remote')"
        />
        <Tags
          :text="'Hybrid'"
          :selected="filterqueries.location === 'hybrid'"
          @click="updateFilter('location', 'hybrid')"
        />
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-md text-bluePrimary font-bold">Experience</p>
        <Tags
          :text="'Entry Level'"
          :selected="filterqueries.experience === '0 years'"
          @click="updateFilter('experience', '0 years')"
        />
        <Tags
          :text="'Mid-Level'"
          :selected="filterqueries.experience === '2 years'"
          @click="updateFilter('experience', '2 years')"
        />
        <Tags
          :text="'Expert'"
          :selected="filterqueries.experience === '3+ years'"
          @click="updateFilter('experience', '3+ years')"
        />
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-md text-bluePrimary font-bold">Category</p>
        <Tags
          :text="'SDR'"
          :selected="filterqueries.department === 'Representatives'"
          @click="updateFilter('department', 'Representatives')"
        />
        <Tags
          :text="'Software'"
          :selected="filterqueries.department === 'software'"
          @click="updateFilter('department', 'software')"
        />
        <Tags
          :text="'Support'"
          :selected="filterqueries.department === 'support'"
          @click="updateFilter('department', 'support')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Tags from '@/components/Jobs/Tags.vue'
import { useJobStore } from '../../stores/JobStore'

export default {
  components: {
    Tags
  },
  methods: {
    updateFilter(filterKey, filterValue) {
      const jobStore = useJobStore()
      const newFilter = { [filterKey]: filterValue }
      jobStore.setFilterQueries(newFilter)
    }
  },
  computed: {
    filterqueries() {
      const jobStore = useJobStore()
      return jobStore.filterqueries
    }
  }
}
</script>

<style>
</style>