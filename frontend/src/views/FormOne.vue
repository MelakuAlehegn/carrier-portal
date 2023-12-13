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
    <div class="bg-white flex flex-col space-y-4 py-8 px-6 md:px-36 font-Poppins text-lightBlack">
      <h1 class="text-xl font-bold">Basic Information</h1>
      <div class="flex flex-col md:flex-row md:justify-normal md:space-x-8"> 
      <div class="flex flex-col w-full md:w-1/2 md:pr-8">
        <!--Full Name-->
      <div class="flex flex-col py-2 m-2">
        <label for="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          @input="updateFormData"
          v-model="formData.fullName"
          class="rounded-md border border-gray-300 p-2 focus:border-orangePrimary focus:outline-none"
        />
      </div>
      <!--Gender-->
      <div class="flex flex-col py-2 m-2">
        <label for="fullName">Gender</label>
        <div class="flex flex-row justify-normal space-x-8 py-2"> 
        <label>
          <input type="radio" v-model="gender" value="male" required />
          Male
        </label>
        <label>
          <input type="radio" v-model="gender" value="female" required />
          Female
        </label>
        </div>
      </div>
      <!--Email Address-->
      <div class="flex flex-col py-2 m-2">
        <label for="email">Email Address</label>
        <input
          type="text"
          id="email"
          @input="updateFormData"
          :value="email"
          disabled
          class="rounded-md border border-gray-300 p-2 focus:border-orangePrimary focus:outline-none"
        />
      </div>
      <!--Phone-->
      <div class="flex flex-col py-2 m-2">
        <label for="email">Phone Number</label>
        <input
          type="text"
          id="phone"
          v-model="formData.phone"
          @input="updateFormData"
          class="rounded-md border border-gray-300 p-2 focus:border-orangePrimary focus:outline-none"
        />
      </div>
      <!--Photo-->
      <div class="flex flex-col py-2 m-2">
        <label for="photoInput" class="inline-block">Upload photo:</label>
        <div class="flex flex-row space-x-4 py-4"> 
          <img
          :src="imageSrc"
          alt="User's Image"
          style="max-width: 200px; max-height: 200px;"
        />
        <input
          type="file"
          accept="image/*"
          id="photoInput"
          v-on="selectedFile"
        />
        </div>
      </div>
    </div>
    <!--Second Section-->
      <div class="flex flex-col md:w-1/2 md:pr-8">
        <!--city-->
      <div class="flex flex-col py-2 m-2">
        <label for="city">City</label>
        <input
          type="text"
          id="city"
          @input="updateFormData"
          v-model="formData.city"
          class="rounded-md border border-gray-300 p-2 focus:border-orangePrimary focus:outline-none"
        />
      </div>
      <!--Address-->
      <div class="flex flex-col py-2 m-2">
        <label for="address">Address</label>
        <input
          type="text"
          id="address"
          v-model="formData.address"
          @input="updateFormData"
          class="rounded-md border border-gray-300 p-2 focus:border-orangePrimary focus:outline-none"
        />
      </div>
      <!--Secondary Email Address-->
      <div class="flex flex-col py-2 m-2">
        <label for="secondaryEmail">Secondary Email Address</label>
        <input
          type="text"
          id="secondaryEmail"
          v-model="formData.secondaryEmail"
          @input="updateFormData"
          class="rounded-md border border-gray-300 p-2 focus:border-orangePrimary focus:outline-none"
        />
      </div>
      <!--Secondary Email Address-->
      <div class="flex flex-col py-2 m-2">
       <label for="secondaryPhone">Secondary Phone Number</label>
        <input
          type="text"
          id="secondaryPhone"
          v-model="formData.secondaryPhone"
          @input="updateFormData"
          class="rounded-md border border-gray-300 p-2 focus:border-orangePrimary focus:outline-none"
        />
      </div>
      <!--Linkedin-->
      <div class="flex flex-col py-2 m-2">
       <label for="linkedin">Linkedin</label>
        <input
          type="text"
          id="linkedin"
          v-model="formData.linkedin"
          @input="updateFormData"
          class="rounded-md border border-gray-300 p-2 focus:border-orangePrimary focus:outline-none"
        />
      </div>
    </div>
    </div>  
 
      <div class="flex flex-col py-2 m-2">
        <label for="about">Write about yourself:</label>
        <textarea
          id="about"
          v-model="formData.about"
          @input="updateFormData"
          class="rounded-md border border-gray-300 p-2 h-36 focus:border-orangePrimary focus:outline-none" placeholder="Write something about you...."
        ></textarea>
      </div>

      <div class="flex flex-col py-2 m-2"> 
      <label for="skills">Skills:</label>
      <select
        id="skills"
        v-model="formData.skills"
        class="rounded-md border border-gray-300 p-2 focus:border-orangePrimary focus:outline-none"
        multiple
      >
        <option v-for="skill in skills" :key="skill.id">{{ skill.name }}</option>
      </select>
    </div>
  
    <!-- <div class="md:w-full flex flex-col md:flex-row justify-end items-end ">
    <button @click="nextPage"
    class="mt-[25px] mb-[30px] text-white bg-bluePrimary py-[10px] w-full py-2 px-6 mb-2 bg-5BA4A4 text-white border border-5BA4A4  hover:bg-63BABA transition duration-300 ease-in-out"
    >Next</button>
    </div> -->
    </div>
  </div>
  </template>
  
  <script>
import formStore from '../stores/formStore';
import { mapState } from 'vuex';
  
  export default {
    props: ['formData'],
    data() {
      return {
        // pageProgress: 0,
        // formData: {
        //   fullName: "",
        //   gender: "",
        //   city: "",
        //   phone: "",
        //   address: "",
        //   imageSrc: "../assets/placeholder.png",
        //   skills: [],
        //   secondaryEmail: '',
        //   secondaryPhone: '',
        //   about: '',
        //   linkedin: '',
        // },
        gender: "",
        skills: [
          { id: 1, name: "Web Development" },
          // ... other skills
        ],
      };
    },
    computed: {
    ...mapState({
      formData: state => state.formOneData, // Map formOneData from Vuex store to formData
    }),
  },
    methods: {
      updateFormData() {
      // Emit an event to update the parent's form data
      this.$emit('formSubmit', {
        fullName: this.formData.fullName,
        city: this.formData.city,
        address: this.formData.address,
        phone: this.formData.phone,
        secondaryPhone: this.formData.secondaryPhone,
        secondaryEmail: this.formData.secondaryEmail,
        skills: this.formData.skills,
        gender: this.gender,
        about: this.formData.about,
        linkedin: this.formData.linkedin,
      });
    },
      nextPage() {
        this.formData.gender = this.gender;
        if (this.formData.fullName && this.gender && this.formData.city && this.formData.phone) {
          this.$emit('formSubmit', {
          fullName: this.formData.fullName,
          gender: this.gender,
          city: this.formData.city,
          phone: this.formData.phone,
          address: this.formData.address,
          secondaryPhone: this.formData.secondaryPhone,
          secondaryEmail: this.formData.secondaryEmail,
          skills: this.formData.skills,
          about: this.formData.about,
         linkedin: this.formData.linkedin,
        });
      } else {
          // Show error message or validation
        }
      },
      handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.imageSrc = URL.createObjectURL(file);
      } else {
        // Handle case when no file is selected
        this.imageSrc = '../assets/placeholder.png'; // Reset to placeholder image
      }
    }
    },
  };
  </script>

  