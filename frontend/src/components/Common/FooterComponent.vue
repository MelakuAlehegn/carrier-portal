<template>
<footer class="bg-[url('../assets/foot-bg.jpg')] bg-cover py-10 text-[#555555] font-poppins">
  <div class="md:pl-24 md:pr-60">
  <div class="px-0 md:px-6 flex flex-col md:flex-row justify-around pb-4">
    <div class="px-4 pb-4">
      <img src="@/assets/MMCYTech.png" class="w-80 md:w-50 pb-6">
      <p>Follow us on social media to get the latest news and updates</p>
      <ul class="flex flex-row">
        <li class="pr-2">
          <a href="https://www.facebook.com/MMCYTech" target="_blank" class="text-orangePrimary active:text-bluePrimary">
            <i class="fa fa-facebook pt-2 text-xl font-black"></i>
          </a>
        </li>
        <li class="pr-2">
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fmmcytech" target="blank" class="pl-4 text-orangePrimary active:text-bluePrimary">
                <i class="fa fa-twitter pt-2 font-black text-xl"></i>
            </a>
        </li>
      </ul>
    </div>
    <div class="px-4 py-2 text-[#555555]">
      <h1 class="text-[20px] font-bold pb-4">CONTACT INFO</h1>
      <ul class="font-[14px]">
        <li class="pb-4">
          <i class="fa fa-map-o text-orangePrimary pt-2 font-black text-xl"></i>
            <b class="pl-4">Addis Office</b>
          <p class="pl-10">
            Kasanchis, next to Jupiter Hotel Bloomtech bldg, 11th floor<br>
            Addis Ababa, Ethiopia
          </p>
        </li>
        <li class="pb-4">
          <i class="fa fa-phone text-orangePrimary pt-2 font-black text-xl"></i>
          <a href="tel:+251-903-731-001" target="blank" class="pl-4">+251-903-731-001</a>
        </li>
        <li class="pb-4">
          <i class="fa fa-envelope-o text-orangePrimary pt-2 font-black text-xl"></i>
          <a href="mailto:talent@mmcytech.com" class="pt-4 pl-4">talent@mmcytech.com</a>
        </li>
      </ul>
    </div>
    <div class="px-4 py-2 text-[#555555]">
      <h1 class="text-[20px] font-bold pb-4">INFORMATION</h1>
      <ul>
        <li class="flex flex-row">
          <i class="fa fa-chevron-right text-orangePrimary pt-2 font-black text-sm"></i>
          <a href="/" class="block py-2 pl-2 items-start text-sm">Home</a>
        </li>
        <li class="flex flex-row">
          <i class="fa fa-chevron-right text-orangePrimary pt-2 font-black text-sm"></i>
          <a href="/about" class="block py-2 pl-2 items-start text-sm">Jobs</a>
        </li>
        <li v-if="!isLoggedIn" class="flex flex-row">
          <i class="fa fa-chevron-right text-orangePrimary pt-2 font-black text-sm"></i>
          <a href="/login" class="block py-2 pl-2 items-start text-sm">Login</a>
        </li>
        <li v-else class="flex flex-row">
        <i class="fa fa-chevron-right text-orangePrimary pt-2 font-black text-sm"></i>
        <a href="/myAccount" class="block py-2 pl-2 items-start text-sm">My Account</a>                
        </li>
        <li v-if="!isLoggedIn" class="flex flex-row">
          <i class="fa fa-chevron-right text-orangePrimary pt-2 font-black text-sm"></i>
          <a href="/register" class="block py-2 pl-2 items-start text-sm">Register</a>
        </li>
        <li v-else class="flex flex-row"> 
          <i class="fa fa-chevron-right text-orangePrimary pt-2 font-black text-sm"></i>
          <a href="/" @click="logout" class="block py-2 pl-2 items-start text-sm">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</div>
  <div class="border-t-darkerGrey border-t-[0.5px]"> 
    <p class="text-center pt-4">© 2021 MMCY Tech. All Rights Reserved. <a href="https://talent.mmcytech.com/privacy/" class="text-orangePrimary hover:text-orangePrimary"> Privacy Policy,</a> <a href="https://talent.mmcytech.com/terms-and-conditions/" class="text-orangePrimary hover:text-orangePrimary"> Terms & Conditions</a></p>
  </div>
</footer>
</template>


<script> 
import { useAuthStore } from '@/stores/userStore';
export default {
  computed: {
    isLoggedIn() {
      const authStore = useAuthStore();
      return authStore.isLoggedIn; // Assuming isLoggedIn is a boolean in your store
    }
  },
  methods: {
    logout() {
      const authStore = useAuthStore();
      authStore.logout();
    }
  }
}
</script>