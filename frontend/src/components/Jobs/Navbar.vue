<template>
  <div class="bg-white">
    <div class="flex container mx-auto w-4/5 justify-between items-center py-5">
      <div class="flex items-center gap-20">
        <img src="../../assets/MMCYTech.png" alt="mmcy logo" class="cursor-pointer h-9" />
        <!-- Search bar -->
        <!-- <div class="pt-2 relative">
          <input
            class="bg-veryLightGrey h-10 px-5 pr-12 w-80 rounded-xl text-sm mb-2 focus:outline-none"
            type="search"
            name="search"
            placeholder="Search for a job"
          />
          <button type="submit" class="absolute rounded-xl bg-orangePrimary right-1.5 mt-1">
            <svg
              class="fill-white h-full w-4 py-2 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              width="400px"
              height="400px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div> -->
      </div>
      <div class="flex gap-5 items-center">
        <router-link to="/">Home</router-link>
        <router-link to="/jobs">Jobs</router-link>
        <Button :text="'Login'" to="/login" />
        <Button :text="'Register'" to="/register" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '../Common/Button.vue'
import { RouterLink } from 'vue-router'
</script>

<style>
.navbar {
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
}
</style>