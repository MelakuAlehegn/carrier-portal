<template>
  <label :class="['flex items-center cursor-pointer']">
    <input type="checkbox" @click="handleClick" class="hidden" />
    <span
      :class="[
        'text-bluePrimary hover:bg-veryLightOrange transition-colors duration-300 text-sm bg-lightGrey text-center px-5 py-1 rounded-2xl',
        { 'bg-orange-300 text-white': isSelected }
      ]"
    >
      {{ text }}
    </span>
  </label>
</template>

<script>
export default {
  props: ['text', 'selected'],
  data() {
    return {
      isSelected: false
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  },
  watch: {
    selected: {
      immediate: true,
      handler(newValue) {
        this.isSelected = newValue
      }
    }
  }
}
</script>

<style>
</style>
