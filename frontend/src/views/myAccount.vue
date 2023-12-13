<template>
<div> 
    <div class="bg-[url('../assets/MMCY-Tech-Job_section-1.png')] md:bg-left-top bg-center">
      <!-- Banner header -->
     <header class="text-white text-center py-8 h-full space-y-4 justify-items-end">
      <div class="px-4 py-40 md:pt-40 md:pl-30 md:pb-24 md:pr-4">
        <h1 class="md:text-[80px] text-[50px] font-bold">My Account</h1>
      </div>
     </header>
    </div>
    <!--Main content-->
    <div class="bg-white flex flex-col space-y-4 py-8 px-6 md:px-36 font-Poppins text-lightBlack"> 
        <div class="flex flex-col md:flex-row md:justify-normal md:space-x-8"> 
            <div class="bg-transparent flex flex-col w-full md:w-1/4">
                <img src="../assets/placeholder.png" class="max-h-[400px] max-w-[400px]">
            </div>
            <div> 
                <h1 class="md:text-[50px] text-[40px] font-bold">Full Name</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12 py-2">
                    <div class="flex flex-row py-2"> 
                        <label class="text-gray-700 font-bold">Gender:</label>
                        <span class="block ml-3 text-gray-500">Male</span>
                    </div>
                    <div class="flex flex-row py-2 grid-row-start-2"> 
                        <label class="text-gray-700 font-bold">City:</label>
                        <span class="block ml-3 text-gray-500">Addis Ababa</span>
                    </div>
                </div>
                <!--second-->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12 py-2">
                    <div class="flex flex-row grid-row-start-1 py-2"> 
                        <label class="text-gray-700 font-bold">Primary Email:</label>
                        <span class="block ml-3 text-gray-500">abebe@gmail.com</span>
                    </div>
                    <div class="flex flex-row grid-row-start-2 py-2"> 
                        <label class="text-gray-700 font-bold">Secondary Email:</label>
                        <span class="block ml-3 text-gray-500">abebe@gmail.com</span>
                    </div>
                </div>
                <!--info-->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12 py-2">
                    <div class="flex flex-row grid-row-start-1 py-2"> 
                        <label class="text-gray-700 font-bold">Primary Phone:</label>
                        <span class="block ml-3 text-gray-500">+251940000000</span>
                    </div>
                    <div class="flex flex-row grid-row-start-2 py-2"> 
                        <label class="text-gray-700 font-bold">Secondary Phone:</label>
                        <span class="block ml-3 text-gray-500">+251910000000</span>
                    </div>
                </div>
                <!---->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12 py-2">
                    <div class="flex flex-row  py-2"> 
                        <label class="text-gray-700 font-bold">Linkedin:</label>
                        <span class="block ml-3 text-gray-500"></span>
                    </div>
                    <div class="flex flex-row grid-row-start-2 py-2"> 
                        <label class="text-gray-700 font-bold">Address:</label>
                        <span class="block ml-3 text-gray-500"></span>
                    </div>
                </div>
                <!--Skills-->
                <div class="py-4"> 
                    <label class="text-gray-700 font-bold">Skills:</label>
                    <span
                    class="bg-white border border-bluePrimary pl-[20px] pr-[25px] py-[3px] m-2 cursor-pointer"
                    >
                        Skill 
                    </span>
                </div>
                </div>
            </div>
            <!--Education Section-->
            <h2 class="md:text-[40px] text-[30px] font-bold bg-bluePrimary w-full text-white uppercase px-2">Education</h2>
            <div class="flex flex-col md:flex-row w-full"> 
                <div class="flex flex-col md:flex-row w-full">
                    <div class="flex flex-col md:w-1/2 pb-2 border-b-2 md:border-b-0 pt-2"> 
                        <span class="text-gray-700 font-bold text-[20px]">Institution Name</span>
                        <span class="block pt-2 text-gray-500">Field of Study</span>
                        <span class="block pt-2 text-gray-500">Educational Status</span>
                        <span class="block pt-2 text-gray-500">2016 - 2017</span>
                    </div>
                    <div class="flex flex-col pb-2 pt-2"> 
                        <span class="text-gray-700 font-bold text-[20px]">Institution Name</span>
                        <span class="block pt-2 text-gray-500">Field of Study</span>
                        <span class="block pt-2 text-gray-500">Educational Status</span>
                        <span class="block pt-2 text-gray-500">2016 - 2017</span>
                    </div>
                </div>
            </div>
            <div class="w-fit py-2"> 
                <button 
                    class="mt-[25px] mb-[30px] text-white bg-bluePrimary py-[10px] w-full py-2 px-6 mb-2 bg-5BA4A4 text-white border border-5BA4A4 hover:bg-63BABA transition duration-300 ease-in-out">Add Education</button>
            </div>
            <!--Experience-->
            <h2 class="md:text-[40px] text-[30px] font-bold bg-bluePrimary w-full text-white uppercase px-2">Experience</h2>
            <div class="flex flex-col w-full"> 
                <div class="flex flex-col md:flex-row w-full">
                    <div class="flex flex-col md:w-1/2 py-2 border-b-2 md:border-b-0"> 
                        <span class="text-gray-700 font-bold text-[20px]">Job Title</span>
                        <span class="block pt-2 text-gray-500">Comapny Name</span>
                        <span class="block pt-2 text-gray-500">Jun 2022 - Jul 2023</span>
                        <span class="block pt-2 text-gray-500">Responsibility</span>
                        <span class="block pt-2 text-gray-500">Reference Name </span>
                        <span class="block pt-2 text-gray-500">Reference Phone </span>
                        <span class="block pt-2 text-gray-500">Reference Email </span>
                        <span class="block pt-2 text-gray-500">Reference Job Title </span>
                    </div>
                    <div class="flex flex-col py-2"> 
                        <span class="text-gray-700 font-bold text-[20px]">Job Title</span>
                        <span class="block pt-2 text-gray-500">Comapny Name</span>
                        <span class="block pt-2 text-gray-500">Jun 2022 - Jul 2023</span>
                        <span class="block pt-2 text-gray-500">Responsibility</span>
                        <span class="block pt-2 text-gray-500">Reference Name </span>
                        <span class="block pt-2 text-gray-500">Reference Phone </span>
                        <span class="block pt-2 text-gray-500">Reference Email </span>
                        <span class="block pt-2 text-gray-500">Reference Job Title </span>
                    </div>
                </div>
                <div class="w-fit py-2">
                <button
                    class="mt-[25px] mb-[30px] text-white bg-bluePrimary py-[10px] w-full py-2 px-6 mb-2 bg-5BA4A4 text-white border border-5BA4A4 hover:bg-63BABA transition duration-300 ease-in-out"
                >
                    Add Experience
                </button>
                </div>
            </div>
            <!--Jobs-->
            <h2 class="md:text-[40px] text-[30px] font-bold bg-bluePrimary w-full text-white uppercase px-2">Jobs</h2>
            <p>To Apply for a Job please go to the <a href="/jobs" class="text-orangePrimary underline">Job List page</a></p>
            <!--Documents-->
            <h2 class="md:text-[40px] text-[30px] font-bold bg-bluePrimary w-full text-white px-2">Documents</h2>
            <div class="flex flex-col md:flex-row w-full"> 
                <div class="flex flex-col md:flex-row w-full">
                    <div class="flex flex-col md:w-1/2 pb-2"> 
                        <span class="text-gray-700 font-bold text-[20px]">Document Type</span>
                        <span class="block pt-2 text-gray-500">Document</span>
                    </div>
                </div>
            </div>
            <div class="w-fit pb-2"> 
                <button 
                    class="mt-[25px] mb-[30px] text-white bg-bluePrimary py-[10px] w-full py-2 px-6 mb-2 bg-5BA4A4 text-white border border-5BA4A4 hover:bg-63BABA transition duration-300 ease-in-out">Add Document</button>
            </div>
        </div>
    </div>
</template>