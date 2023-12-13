<template>
    <div>
    <div>
        <FormOne v-if="currentPage == 1" :formData="formData" :email="userEmail" @formSubmit="handleFormOneSubmit" />
        <FormTwo :formData="formData" @educationSubmit="handleEducationSubmit" @experienceSubmit="handleExperienceSubmit" v-if="currentPage === 2"/>
        <FormThree :formData="formData.documents" @documentSubmit="handleDocumentSubmit" v-if="currentPage === 3" />
    </div>
    <div class="md:w-full flex flex-col md:flex-row justify-end items-end "> 
    <div class="flex justify-end md:space-x-8 space-x-4 m-2 px-4 md:px-36"> 
    <button @click="previousPage" v-if="currentPage !== 1"
    class="mt-[25px] mb-[30px] text-white bg-bluePrimary py-[10px] w-full py-2 px-6 mb-2 bg-5BA4A4 text-white border border-5BA4A4 hover:bg-63BABA transition duration-300 ease-in-out"
    >Previous</button>
    <button @click="nextPage" v-if="currentPage !== 3"
    class="mt-[25px] mb-[30px] text-white bg-bluePrimary py-[10px] w-full py-2 px-6 mb-2 bg-5BA4A4 text-white border border-5BA4A4  hover:bg-63BABA transition duration-300 ease-in-out"
    >Next</button>
    <button @click="handleFormSubmit" v-if="currentPage == 3"
    class="mt-[25px] mb-[30px] text-white bg-bluePrimary py-[10px] w-full py-2 px-6 mb-2 bg-5BA4A4 text-white border border-5BA4A4  hover:bg-63BABA transition duration-300 ease-in-out"
    >Submit</button>
    </div>
   </div> 
</div>
</template>

<script>
import FormOne from './FormOne.vue';
import FormTwo from './FormTwo.vue';
import FormThree from './FormThree.vue';
import axios from 'axios';
import { useAuthStore } from '../stores/userStore';

export default {
    components: {
    FormOne,
    FormTwo,
    FormThree,
  },
  data() {
    return {
      currentPage: 1, // Initial page (FormOne)
      formData: {
          fullName: "",
          gender: "",
          city: "",
          phone: "",
          address: "",
          imageSrc: "../assets/placeholder.png",
          skills: [],
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
        documents: {
          documentType: '',
          selectedFile: null,
          // Add other fields related to documents
        },
      }, // Empty data object
      user: undefined, // Initially undefined user
    };
  },
  methods: {
    handleFormOneSubmit(formData) {
      // Update the form data received from FormOne
      this.formData = { ...this.formData, ...formData };
    },
    handleEducationSubmit(educationData) {
      this.formData.education = { ...this.formData.education, ...educationData };
    },
    handleExperienceSubmit(experienceData) {
      this.formData.experience = { ...this.formData.experience, ...experienceData };
    },
    handleDocumentSubmit(documentData) {
      this.formData.documents = { ...this.formData.documents, ...documentData };
    },
    previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    } else {
      // Handle reaching the first page (e.g., display confirmation message)
    }
  },

  nextPage() {
    if (this.currentPage < 3) {
      this.currentPage++;
    } else {
      // Handle reaching the last page (e.g., submit the form)
    }
  },

   async handleFormSubmit(formData) {
        const userId = useAuthStore().userId;
        this.formData = Object.assign({}, this.formData, formData);
        // this.currentPage++; // Update current page based on form submission
        axios
        .put(`/api/users/${userId}`, this.formData)
        .then((response) => {
          // Handle the successful response here if needed
          console.log('User updated:', response.data);
        })
        .catch((error) => {
          // Handle errors
          console.error('Error updating user:', error);
        });
    
        console.log(this.formData)
    },
  },
  computed: {
    currentForm() {
      switch (this.currentPage) {
        case 1: return 'FormOne';
        case 2: return 'FormTwo';
        case 3: return 'FormThree';
        default: return 'FormOne';
      }
    },
    userEmail() {
      return useAuthStore().user ? useAuthStore().user.email : ''; // Access user email from the store
    }
  },
//   mounted() {
//     // Fetch existing user data from your API if needed
//     axios.get('/api/users')
//       .then((response) => {
//         this.user = response.data;
//       })
//       .catch((error) => {
//         // Handle error
//       });
//   },
};

</script>
