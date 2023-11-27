<template>
  <div @click="handleClick" class="container mx-auto flex justify-center items-center gap-8">
    <!-- <button
      :class="{ 'bg-orangePrimary': selected }"
      class="w-5 rounded-full h-5 hover:bg-orangePrimary bg-darkerGrey"
    ></button> -->
    <div class="single-job bg-white w-4/5 text-bulePrimary cursor-pointer px-10 py-7 rounded-3xl">
      <div class="flex justify-between">
        <div class="">
          <h2 class="text-bluePrimary font-bold text-lg">.NET Developer</h2>
          <p class="text-gray-400 text-sm">Full-time</p>
        </div>
        <div>
          <h2 class="text-bluePrimary font-medium text-base">Addis Ababa, Ethiopia</h2>
          <div class="flex items-center gap-1">
            <svg
              enable-background="new 0 0 26 26"
              id="Слой_1"
              version="1.1"
              viewBox="0 0 26 26"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              height="14px"
              class="fill-orangePrimary"
            >
              <g>
                <path
                  d="M13,6.1401367c-2.2060547,0-4,1.7944336-4,4s1.7939453,4,4,4s4-1.7944336,4-4   S15.2060547,6.1401367,13,6.1401367z M13,13.1401367c-1.6542969,0-3-1.3457031-3-3s1.3457031-3,3-3s3,1.3457031,3,3   S14.6542969,13.1401367,13,13.1401367z"
                />
                <path
                  d="M13.0136719,1c-0.0107422-0.0004883-0.0195313-0.0004883-0.0302734,0   c-0.0117188-0.0004883-0.0205078-0.0009766-0.0302734,0c-5.0244141,0.0249023-9.1035156,4.1157227-9.1035156,9.1401367   c0,2.3852539,1.0380859,4.3549805,1.9150391,5.5927734c0.0048828,0.0083008,0.0107422,0.0166016,0.0175781,0.0249023   l6.5810547,8.9370117C12.5039063,24.8867188,12.7617188,25,13,25s0.4628906-0.1132813,0.6035156-0.3051758l6.5810547-8.9370117   c0.0068359-0.0083008,0.0126953-0.0166016,0.0175781-0.0249023c0.8769531-1.237793,1.9150391-3.2075195,1.9150391-5.5927734   C22.1171875,5.1157227,18.0380859,1.0249023,13.0136719,1z M18.9677734,14.8808594c0,0.0004883,0,0.0004883,0,0.0004883   l-5.984375,8.1264648l-5.984375-8.1264648c0,0,0,0,0-0.0004883c-0.7529297-1.0585938-1.6494141-2.7402344-1.6494141-4.7407227   c0-4.2075195,3.4228516-7.6313477,7.6337891-7.6401367c4.2109375,0.0087891,7.6337891,3.4326172,7.6337891,7.6401367   C20.6171875,12.140625,19.7207031,13.8222656,18.9677734,14.8808594z"
                />
              </g>
            </svg>
            <p class="text-gray-400 text-sm">Location</p>
          </div>
        </div>
        <div class="flex justify-start items-center flex-col gap-2">
          <!-- <button class="text-white bg-bluePrimary px-4 text-sm py-2 rounded-lg">
            View Details
          </button> -->
          <Button class="!bg-blue-950" @click="handleClick" :text="'View Details'" />
          <p class="text-gray-400 text-sm">5 days ago</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../Common/Button.vue'

export default {
  components: {
    Button
  },
  props: {
    selected: Boolean,
    jobId: Number
  },
  methods: {
    handleClick() {
      this.$emit('jobClick', this.jobId)
    }
  }
}
</script>

<style>
.single-job {
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
}
</style>