<template>
  <label :class="['flex items-center cursor-pointer']">
    <input type="checkbox" v-model="isClicked" class="hidden" />
    <span
      :class="[
        'text-bluePrimary hover:bg-veryLightOrange transition-colors duration-300 text-sm bg-lightGrey text-center px-5 py-1 rounded-2xl',
        { 'bg-veryLightOrange text-bluePrimary': isClicked }
      ]"
    >
      {{ text }}
    </span>
  </label>
</template>
<script>
export default {
  props: ['text'],
  data() {
    return {
      isClicked: false
    }
  },
  methods: {
    handleClick() {
      this.isClicked = !this.isClicked
    }
  }
}
</script>
<style>
</style>