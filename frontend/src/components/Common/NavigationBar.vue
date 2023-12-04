<template>
  <div>
    <nav
      :class="{
        'bg-transparent': !scrolled,
        'bg-white shadow-lg': scrolled,
        'text-bluePrimary': scrolled
      }"
      class="fixed w-full top-0 z-50 transition-all duration-300 mb-30"
    >
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <div :class="{ block: !scrolled, 'w-40': !scrolled, hidden: scrolled }" class="pt-4">
            <img src="@/assets/MMCY-Tech-Talent-Logos-1.png" />
          </div>
          <div v-if="scrolled" class="pt-4 w-40">
            <img src="@/assets/MMCY-Tech-Talent-Logos-2.png" />
          </div>
          <div
            :class="{
              'text-bluePrimary': scrolled
            }"
            class="hidden text-white md:flex items-center space-x-8 pt-4"
          >
            <a href="/" class="hover:text-orangePrimary" :class="{ 'text-bluePrimary': scrolled }"
              >Home</a
            >
            <a
              href="/jobs"
              class="hover:text-orangePrimary"
              :class="{ 'text-bluePrimary': scrolled }"
              >Jobs</a
            >
            <a
              href="/login"
              class="bg-orangePrimary py-2 px-4"
              :class="{ 'bg-orangePrimary': scrolled, 'text-white': scrolled }"
              >Login</a
            >
            <a
              href="/register"
              class="bg-orangePrimary py-2 px-4"
              :class="{ 'bg-orangePrimary': scrolled, 'text-white': scrolled }"
              >Register</a
            >
          </div>
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              @click="toggleMobileMenu"
              class="text-gray-600 focus:outline-none focus:text-gray-800 p-2 rounded-full"
              :class="{
                'bg-white': !scrolled,
                'bg-orangePrimary': scrolled,
                'text-white': scrolled
              }"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- Mobile menu -->
        <transition name="slide">
          <div
            v-show="isMobileMenuOpen"
            class="md:hidden bg-white py-2 px-4 shadow-lg fixed top-0 right-0 h-screen w-3/4"
          >
            <div class="flex flex-col items-end">
              <ul class="w-full py-4 px-2">
                <li>
                  <button
                    @click="toggleMobileMenu"
                    class="text-orangePrimary focus:outline-none focus:text-orangePrimary"
                  >
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <a href="/" class="block py-4 flex border-b-2 border-b-lightGrey">Home</a>
                </li>
                <li>
                  <a href="/jobs" class="block py-4 flex border-b-2 border-b-lightGrey">Jobs</a>
                </li>
                <li>
                  <a href="/login" class="block py-4 flex border-b-2 border-b-lightGrey">Login</a>
                </li>
                <li>
                  <a href="/register" class="block py-4 flex">Register</a>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
      isMobileMenuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    }
  }
}
</script>
