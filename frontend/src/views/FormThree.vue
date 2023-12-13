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
<div class=" flex flex-col space-y-4 py-8 px-6 md:px-36 font-Poppins text-lightBlack">
    <h1 class="text-xl font-bold">Documents</h1>
    <div class="flex flex-col md:flex-row md:justify-normal md:space-x-8"> 
    <div class="bg-transparent flex flex-col w-full md:w-1/2 md:pr-8">
    <!--Educational Status-->
    <div class="flex flex-col py-2 m-2">
    <label for="documentType">Document Type</label>
    <select
      v-model="formData.documentType"
      id="documentType"
      class="rounded-md border border-white p-2"
    >
      <option disabled value="">--Please choose an option--</option>
      <option value="CV">CV</option>
      <option value="Certificate">Certificate</option>
      <option value="Endorsement">Endorsement</option>
      <option value="Degree">Degree</option>
    </select>
    </div>
</div>
<div class="flex flex-col md:flex-row md:justify-normal md:space-x-8"> 
    <!--Document Upload-->
    <div class="flex flex-col items-center mt-8">
    <label for="pdfUpload" class="cursor-pointer">
        Upload PDF only, size not exceeding 700kb. <br><br>
      <span class="py-2 rounded-md font-bold border border-gray-300 p-2 h-36 focus:border-orangePrimary focus:outline-none transition duration-300 ease-in-out">
        Upload PDF Document
      </span>
    </label>
    <input
      type="file"
      id="pdfUpload"
      accept=".pdf"
      class="hidden"
      @change="handleFileUpload"
    />
    <div v-if="selectedFile" class="w-full mt-4 flex justify-start">
      <span class="text-gray-600">Selected File:</span>
      <span class="text-blue-600 font-medium">{{ selectedFile.name }}</span>
    </div>
  </div>
  </div>
</div>
    <!--Add Document-->
    <div class="w-fit py-2 m-2"> 
    <button @click="submitForm"
    class="mt-[25px] mb-[30px] text-white bg-bluePrimary py-[10px] w-full py-2 px-6 mb-2 bg-5BA4A4 text-white border border-5BA4A4 hover:bg-63BABA transition duration-300 ease-in-out"
    >Add Document</button>
   </div>
   <!--Next-->
   <!-- <div class="md:w-full flex flex-col md:flex-row justify-end items-end "> 
    <div class="flex justify-end md:space-x-8 m-2"> 
    <button @click="goBack"
    class="mt-[25px] mb-[30px] text-white bg-bluePrimary py-[10px] w-full py-2 px-6 mb-2 bg-5BA4A4 text-white border border-5BA4A4 hover:bg-63BABA transition duration-300 ease-in-out"
    >Previous</button>
    <button 
    class="mt-[25px] mb-[30px] text-white bg-bluePrimary py-[10px] w-full py-2 px-6 mb-2 bg-5BA4A4 text-white border border-5BA4A4  hover:bg-63BABA transition duration-300 ease-in-out"
    >Submit</button>
    </div>
   </div> -->
</div>
</div>        
</template>


<script> 

export default {
  data() {
    return {
      formData: {
        documentType: '',
        selectedFile: null,

      }
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1); 
    },
    submitForm() {
      this.$emit('documentSubmit', this.formData);
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
        // Handle the file as needed, e.g., upload to server, etc.
      }
    },
  },
};

</script>