<template>
  <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-20 rounded-2xl z-40">
    <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
      <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
        <div class="container relative left-0 z-50 flex w-3/4 h-auto h-full">
          <div class="relative flex items-center w-full lg:w-72 h-full group">

            <svg class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
              </path>
            </svg>
            <input type="text" class="block w-full py-2.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input" placeholder="Search"/>
          </div>
        </div>
        <div class="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
          <a href="#" class="block relative">
            <img alt="profil" src="../assets/icons/icon-user.svg" class="mx-auto object-cover rounded-full h-8 w-8 "/>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header.vue"
}
</script>

<style
    scoped>

</style>
