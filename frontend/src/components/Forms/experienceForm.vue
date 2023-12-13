<template>
    <!--Experience-->
 <div class=" flex flex-col space-y-4 py-8 px-6 md:px-36 font-Poppins text-lightBlack">
      <h1 class="text-xl font-bold">Experience</h1>
      <div class="flex flex-col md:flex-row md:justify-normal md:space-x-8"> 
      <div class="bg-transparent flex flex-col w-full md:w-1/2 md:pr-8">
          <!--Company Name-->
      <div class="flex flex-col py-2 m-2">
        <label for="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          v-model="formData.companyName"
          class="rounded-md border border-white p-2 focus:border-orangePrimary focus:outline-none"
        />
      </div>
        <!--Job title-->
        <div class="flex flex-col py-2 m-2">
        <label for="jobTitle">Job Title</label>
        <input
          type="text"
          id="jobTitle"
          v-model="formData.jobTitle"
          class="rounded-md border border-white p-2 focus:border-orangePrimary focus:outline-none"
        />
      </div>
        <!--Reference Name-->
        <div class="flex flex-col py-2 m-2">
        <label for="referenceName">Reference Name</label>
        <input
          type="text"
          id="referenceName"
          v-model="formData.referenceName"
          class="rounded-md border border-white p-2 focus:border-orangePrimary focus:outline-none"
        />
      </div>
        <!--Reference Job Title-->
        <div class="flex flex-col py-2 m-2">
        <label for="referenceJob">Reference Job Title</label>
        <input
          type="text"
          id="referenceJob"
          v-model="formData.referenceJob"
          class="rounded-md border border-white p-2 focus:border-orangePrimary focus:outline-none"
        />
      </div>
    </div>
    <div class="bg-transparent flex flex-col w-full md:w-1/2 md:pr-8"> 
    <!--Work Timeline-->
    <div class="flex flex-col py-2 m-2">
    <label for="workTimeline">Work Timeline</label>
    <div class="flex flex-col md:flex-row">
    <div class="flex flex-col-reverse md:flex-row py-4 md:pr-4"> 
      <input
      type="date"
      id="startDate"
      v-model="startDate"
      class="rounded-md border border-gray-300 p-2 focus:border-orangePrimary focus:outline-none"
    />
    <label for="startDate" class="md:py-2">Start Date</label>
    </div> 
    <div class="flex flex-col-reverse md:flex-row py-4">
    <input
      type="date"
      id="endDate"
      v-model="endDate"
      class="rounded-md border border-gray-300 p-2 focus:border-orangePrimary focus:outline-none"
    />
    <label for="endDate" class="md:py-2">End Date</label>
    </div>
    </div>
    </div>
    <!--reference Phone-->
    <div class="flex flex-col py-2 m-2">
        <label for="referencePhone">Reference Phone</label>
        <input
          type="text"
          id="referencePhone"
          v-model="formData.referencePhone"
          class="rounded-md border border-white p-2 focus:border-orangePrimary focus:outline-none"
        />
      </div>
          <!--reference Email-->
    <div class="flex flex-col py-2 m-2">
        <label for="referenceEmail">Reference Email</label>
        <input
          type="text"
          id="referenceEmail"
          v-model="formData.referenceEmail"
          class="rounded-md border border-white p-2 focus:border-orangePrimary focus:outline-none"
        />
      </div>
    </div>
   </div>
   <!--Responsibility-->
   <div class="flex flex-col py-2 m-2">
        <label for="Responsibility">Responsibility</label>
        <textarea
          id="Responsibility"
          v-model="formData.Responsibility"
          class="rounded-md border border-gray-300 p-2 h-36 focus:border-orangePrimary focus:outline-none"
        ></textarea>
      </div>
   <!--Add Experience-->
   <div class="w-fit py-2 m-2"> 
    <button @click="submitExperience"
    class="mt-[25px] mb-[30px] text-white bg-bluePrimary py-[10px] w-full py-2 px-6 mb-2 bg-5BA4A4 text-white border border-5BA4A4 hover:bg-63BABA transition duration-300 ease-in-out"
    >Add Experience</button>
   </div>
   </div>
</template>

<script> 

export default {
  props: ['formData'],
  // data() {
  //   return {
  //     formData: {
  //       companyName: '',
  //       jobTitle: '',
  //       referenceName: '',
  //       referenceEmail: '',
  //       referenceJob: '',
  //       referencePhone: '',
  //       Responsibility: '',
  //       startDate: '',
  //       endDate: '',

  //     }
  //   };
  // },
  methods: {
    submitExperience() {
      // Emit the experience data to the parent
      this.$emit('experienceSubmit', {
        companyName: this.formData.companyName,
        jobTitle: this.formData.jobTitle,
        referenceName: this.formData.referenceName,
        referenceEmail: this.formData.referenceEmail,
        referenceJob: this.formData.referenceJob,
        referencePhone: this.formData.referencePhone,
        Responsibility: this.formData.Responsibility,
        startDate: this.formData.startDate,
        endDate: this.formData.endDate
      });
    },
  },
};

</script>