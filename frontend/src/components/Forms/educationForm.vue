<template>
    <!--Education-->
    <div class=" flex flex-col space-y-4 py-8 px-6 md:px-36 font-Poppins text-lightBlack">
      <h1 class="text-xl font-bold">Education</h1>
      <div class="flex flex-col md:flex-row md:justify-normal md:space-x-8"> 
      <div class="bg-transparent flex flex-col w-full md:w-1/2 md:pr-8">
          <!--Institution Name-->
      <div class="flex flex-col py-2 m-2">
        <label for="institutionName">Institution Name</label>
        <input
          type="text"
          id="InstitutionName"
          v-model="formData.InstitutionName"
          class="rounded-md border border-white p-2"
        />
      </div>
        <!--Field of study-->
        <div class="flex flex-col py-2 m-2">
        <label for="studyField">Field of Study</label>
        <input
          type="text"
          id="studyField"
          v-model="formData.studyField"
          class="rounded-md border border-white p-2"
        />
      </div>
    </div>
    <div class="bg-transparent flex flex-col w-full md:w-1/2 md:pr-8"> 
        <!--Educational Status-->
    <div class="flex flex-col py-2 m-2">
    <label for="educationalStatus">Educational Status:</label>
    <select
      v-model="formData.selectedStatus"
      id="educationalStatus"
      class="rounded-md border border-white p-2"
    >
      <option disabled value="">Select Educational Status</option>
      <option value="undergraduate">Undergraduate</option>
      <option value="graduate">Graduate</option>
      <option value="postgraduate">Postgraduate</option>
    </select>
    </div>
    <!--Educational Period-->
    <div class="flex flex-col py-2 m-2">
    <label for="educationalPeriod">Educational Period</label>
    <div class="flex flex-col md:flex-row">
    <div class="flex flex-col-reverse md:flex-row py-4 md:pr-4"> 
      <input
      type="date"
      id="eduStart"
      v-model="eduStart"
      class="rounded-md border border-gray-300 p-2"
    />
    <label for="startDate" class="md:py-2">Start Date</label>
    </div> 
    <div class="flex flex-col-reverse md:flex-row py-4">
    <input
      type="date"
      id="eduEnd"
      v-model="eduEnd"
      class="rounded-md border border-gray-300 p-2"
    />
    <label for="endDate" class="md:py-2">End Date</label>
    </div>
    </div>
    </div>
    </div>
   </div>
   <!--Button-->
   <div class="w-fit py-2 m-2"> 
    <button @click="submitEducation"
    class="mt-[25px] mb-[30px] text-white bg-bluePrimary py-[10px] w-full py-2 px-6 mb-2 bg-5BA4A4 text-white border border-5BA4A4 hover:bg-63BABA transition duration-300 ease-in-out">Add Education</button>
   </div>
 </div>
</template>

<script> 
// import formStore from '../../stores/formStore';

export default {
  props: ['formData'],
  // data() {
  //   return {
  //     formData: {
  //       InstitutionName: '',
  //       studyField: '',
  //       selectedStatus: '',
  //       eduStart: '',
  //       eduEnd: '',

  //     }
  //   };
  // },
  methods: {
    submitEducation() {
      // Emit the education data to the parent
      this.$emit('educationSubmit', {
        InstitutionName: this.formData.InstitutionName,
        studyField: this.formData.studyField,
        selectedStatus: this.formData.selectedStatus,
        eduStart: this.formData.eduStart,
        eduEnd: this.formData.eduEnd
      });
    },
    // addEducation() {
    //   formStore.commit('updateEducationData', this.formData);
    // },
  },
};

</script>