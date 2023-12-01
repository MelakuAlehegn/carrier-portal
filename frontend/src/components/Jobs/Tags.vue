<template>
  <button
    :class="[
      'text-bluePrimary cursor-pointer hover:bg-orange-300 transition-colors duration-300 hover:text-white text-sm bg-white text-center px-5 py-1 rounded-2xl',
      { 'bg-orange-300 text-white': isClicked }
    ]"
    @click="handleClick"
  >
    {{ text }}
  </button>
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