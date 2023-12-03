<template>
  <button class="bg-orangePrimary text-white px-4 py-2 rounded-md">
    {{ text }}
  </button>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  props: {
    text: String
  }
}
</script>

<style>
</style>