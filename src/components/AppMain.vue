<template>
  <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl relative h-screen overflow-hidden relative">
    <div class="flex items-start justify-between">
      <div class="h-screen hidden lg:block shadow-lg relative w-44">
        <div class="bg-white h-full dark:bg-gray-700">
          <Sidebar></Sidebar>
        </div>
      </div>
      <Main></Main>
      <RightPanel></RightPanel>
    </div>
  </main>
</template>

<script>
import Sidebar from "./Sidebar";
import RightPanel from "./RightPanel";
import Main from "./Main";

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export default {
  components: {
    Sidebar,
    RightPanel,
    Main
  },
};
</script>

<style>
.wrapper {
  @apply flex justify-center items-center h-screen text-center text-emerald-500 bg-gray-100;
}
.card {
  @apply rounded-lg border border-emerald-300 bg-emerald-100 p-10 shadow-lg;
}
</style>
