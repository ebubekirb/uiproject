<template>
  <div class="lg:w-3/12 bg-white h-screen text-center">
    <div class="p-4">
      <h4 class="text-xl font-bold">Task Manager</h4>
    </div>
    <hr>
    <div class="flex items-center justify-center pt-6">
      <img class="h-20 w-20 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU" alt="">
    </div>
    <div class="p-4">
      <h4 class="font-bold">John Doe</h4>
      <small class="text-gray-500">john@doe.com</small>
    </div>
    <div class="flex items-center justify-center text-center pt-6">
      <div class="bg-gray-200 py-3 px-4 mr-3 rounded-full">
        <i class="fa fa-envelope"></i>
      </div>
      <div class="bg-gray-200 py-3 px-4 mr-3 rounded-full">
        <i class="fa fa-cog"></i>
      </div>
      <div class="bg-gray-200 py-3 px-4 rounded-full">
        <i class="fa fa-bell"></i>
      </div>
    </div>
    <div class="pt-7 px-3">
      <div class="w-full h-2 bg-gray-200 rounded-full mt-2">
        <div class="w-1/2 h-full text-center text-xs text-white bg-blue-500 rounded-full">
        </div>
      </div>
      <div class="flex py-4">
        <div class="flex-grow">
          <p class="font-bold text-xl">12</p>
          <p>Completed</p>
          <small class="text-gray-500">Tasks</small>
        </div>
        <div class="flex-grow-0">
          <!-- This item will grow -->
        </div>
        <div class="flex-grow">
          <p class="font-bold text-xl">24</p>
          <p>All</p>
          <small class="text-gray-500">Project</small>
        </div>
      </div>
      <hr>
      <div class="px-2 py-5">
        <h3 class="text-xl py-2 font-bold text-left">Projects</h3>
        <div class="flex py-1">
          <img class="w-4 h-4 mr-3" src="../assets/circle.png" alt="">
          <span class="text-left self-center text-sm">Marketing</span>
        </div>
        <div class="flex py-1">
          <img class="w-4 h-4 mr-3" src="../assets/circle.png" alt="">
          <span class="text-left self-center text-sm">Design</span>
        </div>
        <div class="flex py-1">
          <img class="w-4 h-4 mr-3" src="../assets/circle.png" alt="">
          <span class="text-left self-center text-sm">Development</span>
        </div>
        <div class="flex py-1">
          <img class="w-4 h-4 mr-3" src="../assets/circle.png" alt="">
          <span class="text-left self-center text-sm">Management</span>
        </div>
      </div>
      <hr>
      <div class="px-2 py-5">
        <h3 class="text-xl py-2 font-bold text-left">Team</h3>
        <div class="flex items-center justify-center text-center">
          <img class="h-10 w-10 mr-3 rounded-full"
               src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               alt="">
          <img class="h-10 w-10 mr-3 rounded-full"
               src="https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg"
               alt="">
          <img class="h-10 w-10 mr-3 rounded-full"
               src="https://images.unsplash.com/flagged/photo-1574282893982-ff1675ba4900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
               alt="">
          <img class="h-10 w-10 mr-3 rounded-full"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU"
               alt="">
          <img class="h-10 w-10 mr-3 rounded-full"
               src="https://images.unsplash.com/flagged/photo-1574282893982-ff1675ba4900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
               alt="">
          <img class="h-10 w-10 mr-3 rounded-full"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightPanel"
}
</script>

<style
    scoped>

</style>
