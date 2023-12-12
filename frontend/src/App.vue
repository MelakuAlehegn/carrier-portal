<script setup>
// import Navbar from '@/components/Jobs/Navbar.vue'
import NavigationBar from '@/components/Common/NavigationBar.vue'
import Navbar from '@/components/Jobs/Navbar.vue'
import FooterComponent from '@/components/Common/FooterComponent.vue'
</script>

<template>
  <div class="pb-3 font-sans">
    <!-- <header> -->
    <!-- <Navbar /> -->
    <NavigationBar />
    <!-- <div class="p-10">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/jobs">Jobs</RouterLink>
        </nav>
      </div> -->
    <RouterView />
    <FooterComponent />
    <!-- </header> -->
  </div>
</template>

