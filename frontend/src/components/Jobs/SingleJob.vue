<template>
  <div @click="handleClick" class="container mx-auto flex justify-center items-center gap-8">
    <div class="single-job bg-white w-4/5 text-bulePrimary cursor-pointer px-10 py-7 rounded-3xl">
      <div class="flex justify-between">
        <div class="w-1/3">
          <h2 class="text-bluePrimary capitalize font-bold text-lg">{{ job.title }}</h2>
          <p class="text-gray-400 capitalize text-sm">{{ job.contract }}</p>
        </div>
        <div class="w-1/3 flex justify-center">
          <div>
            <h2 class="text-bluePrimary capitalize font-medium text-base">{{ job.location }}</h2>
            <div class="flex items-start gap-1">
              <p class="text-gray-400 text-sm">Location</p>
            </div>
          </div>
        </div>
        <div class="w-1/3 flex justify-end">
          <div class="flex items-center flex-col gap-2">
            <Button class="!bg-blue-950" @click="handleClick" :text="'View Details'" />
            <p class="text-gray-400 text-sm">{{ fromNow(job.createdAt) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../Common/Button.vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
export default {
  components: {
    Button
  },
  props: {
    selected: Boolean,
    jobId: Number,
    job: Object
  },
  methods: {
    handleClick() {
      this.$emit('jobClick', this.jobId)
    },
    fromNow(date) {
      return dayjs(date).fromNow()
    }
  }
}
</script>

<style>
.single-job {
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
}
.bg-lightOrange {
  background-color: #4ea832;
}
</style>