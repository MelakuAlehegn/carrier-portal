<template>
    <div> 
    <div class="bg-[url('../assets/MMCY-Tech-Job_section-1.png')] md:bg-left-top bg-center">
      <!-- Banner header -->
     <header class="text-white text-center py-8 h-full space-y-4 justify-items-end">
      <div class="px-4 py-40 md:pt-40 md:pl-30 md:pb-24 md:pr-4">
        <h1 class="md:text-[80px] text-[50px] font-bold">Fill Out the Form</h1>
      </div>
     </header>
    </div>
    <!--Education-->
    <educationFormVue :formData="formData" @educationSubmit="handleEducationSubmit" />
   <!--Experience-->
   <experienceForm :formData="formData" @experienceSubmit="handleExperienceSubmit" />
 
   <!--Next-->
   <!-- <div class="md:w-full flex flex-col md:flex-row justify-end items-end "> 
    <div class="flex justify-end md:space-x-8 space-x-4 m-2 px-4 md:px-36"> 
    <button @click="goBack"
    class="mt-[25px] mb-[30px] text-white bg-bluePrimary py-[10px] w-full py-2 px-6 mb-2 bg-5BA4A4 text-white border border-5BA4A4 hover:bg-63BABA transition duration-300 ease-in-out"
    >Previous</button>
    <button @click="goToNext"
    class="mt-[25px] mb-[30px] text-white bg-bluePrimary py-[10px] w-full py-2 px-6 mb-2 bg-5BA4A4 text-white border border-5BA4A4  hover:bg-63BABA transition duration-300 ease-in-out"
    >Next</button>
    </div>
   </div> -->

 </div>
</template>

<script>
import educationFormVue from '../components/Forms/educationform.vue';
import experienceForm from '../components/Forms/experienceform.vue';

export default {
  components: {
    educationFormVue,
    experienceForm,
  },
  data() {
    return {
      formData: {
        education: {
          InstitutionName: '',
          studyField: '',
          selectedStatus: '',
          eduStart: '',
          eduEnd: '',
        },
        experience: {
          companyName: '',
          jobTitle: '',
          referenceName: '',
          referenceEmail: '',
          referenceJob: '',
          referencePhone: '',
          Responsibility: '',
          startDate: '',
          endDate: '',
        },
      },
    };
  },
  methods: {
    handleEducationSubmit(educationData) {
      // Update formData.education with the emitted data
      this.formData.education = { ...this.formData.education, ...educationData };
    },
    handleExperienceSubmit(experienceData) {
      // Update formData.experience with the emitted data
      this.formData.experience = { ...this.formData.experience, ...experienceData };
    },
    goBack() {
      this.$router.go(-1); // This will navigate to the previous page in history
    },
    goToNext() {
      this.$router.push('/FormThree'); // Change this to your actual route
    },
  },
};

</script>