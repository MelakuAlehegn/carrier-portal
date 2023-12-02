<template>
    <div class="flex flex-wrap justify-end w-full">
      <div
        v-for="(item, index) in numbers"
        :key="index"
        class="w-full md:w-1/2 p-4 text-center"
      >
        <div class="text-[30px] font-bold font-Poppins text-white">{{ item.count + '+' }}</div>
        <div class="mt-2 text-[22px] focus:bg-orangePrimary font-Poppins text-white">{{ item.title }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        numbers: [
          { count: 10, targetNumber: 126, title: 'Satisfied Clients' },
          { count: 50, targetNumber: 600, title: 'Hired Employees' },
          { count: 0, targetNumber: 20, title: 'Trusted Advisors' },
          { count: 0, targetNumber: 15, title: 'Years in Operation' }
        ],
        intervalIds: []
      };
    },
    mounted() {
      this.startCounting();
    },
    methods: {
      startCounting() {
        this.numbers.forEach((num, index) => {
          num.intervalId = setInterval(() => {
            if (num.count < num.targetNumber) {
              num.count++;
            } else {
              clearInterval(num.intervalId);
            }
          }, 10); //millisecond
        });
      }
    },
    beforeDestroy() {
      this.numbers.forEach(num => {
        clearInterval(num.intervalId);
      });
    }
  };
  </script>

  