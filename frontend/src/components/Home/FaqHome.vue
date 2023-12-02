<template>
    <div class="bg-[url('../assets/map-05-1.png')] bg-cover bg-center bg-[#f7f7f7] md:py-12 py-16 md:px-36 font-Poppins">
        <div class="flex flex-col justify-center items-center py-14"> 
          <h1 class="mt-4 text-black text-[24px] md:text-[42px] text-center font-Poppins font-black leading-tight md:leading-normal">Frequently <span class="text-orangePrimary">Asked Questions</span></h1>
        </div> 
      <div v-for="(item, index) in faqs" :key="index" class="px-6 flex flex-col justify-start items-start bg-white m-4">
        <div class="vc_toggle_title cursor-pointer w-full pt-2 pb-[15px] flex flex-row"  @click="toggleFAQ(index)">
          <span v-if="!item.opened" class="mr-2 text-[30px] text-darkerGrey font-black">+</span>
          <span v-else class="mr-2 text-[30px] text-darkerGrey font-black">-</span>
          <h4 class="text-[20px] font-bold text-[#0a0a0a] font-Poppins md:pt-2 pt-2 px-0">{{ item.question }}</h4>
          <i class="vc_toggle_icon"></i>
        </div>
        <div class="vc_toggle_content" :class="{ 'hidden': !item.opened }">
          <p class="text-[16px] font-Poppins pt-0 px-2 pb-[26px]">{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqs: [
          {
            question: 'Q. Are you a recruitment agency?',
            answer: 'Unlike recruitment agencies or freelance platforms, we provide end-to-end support and management services to ensure you are always satisfied.',
            opened: false,
          },
          {
            question: 'Q. Who are your clients?',
            answer: 'We cater to numerous companies ranging from start-ups to large multi-nationals, financial services to social enterprises.',
            opened: false,
          },
          {
            question: 'Q. Is it a remote job?',
            answer: 'Although our clients are abroad, you will still be required to work from our Addis Ababa office.',
            opened: false,
          },
          {
            question: 'Q. What sort of jobs do you offer?',
            answer: 'We offer a variety of opportunities in all sorts of roles, including Sales, Marketing, Operations, and Software Development.',
            opened: false,
          },
        ],
      };
    },
    methods: {
      toggleFAQ(index) {
        this.faqs.forEach((item, i) => {
          if (i === index) {
            item.opened = !item.opened;
          } else {
            item.opened = false;
          }
        });
      },
    },
  };
  </script>
  
  