<template>
  <div class="flex flex-col w-full pl-0 md:p-6 md:space-y-4">
    <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-3xl z-40">
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
    <div class="overflow-auto h-screen pb-24 pt-2 pr-2 md:pt-0 md:pr-0 md:pl-0">
      <div class="py-6 flex">
        <h2 class="text-2xl font-bold w-full">Dashboard</h2>
        <h4>Default/Dashboard</h4>
      </div>
      <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        <div class="p-5 bg-white rounded-3xl shadow-lg">
          <div class="text-base text-gray-400 ">Total Sales</div>
          <div class="flex items-center pt-1">
            <div class="text-2xl font-bold text-gray-900 ">$9850.90</div>
            <span class="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full mx-auto mr-0">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span>1.8%</span>
                  </span>
          </div>
        </div>
        <div class="p-5 bg-white rounded-3xl shadow-lg">
          <div class="text-base text-gray-400 ">Net Revenue</div>
          <div class="flex items-center pt-1">
            <div class="text-2xl font-bold text-gray-900 ">$7520.50</div>
            <span class="flex items-center px-2 py-0.5 mx-2 text-sm text-red-600 bg-red-100 rounded-full mx-auto mr-0">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span>2.5%</span>
                  </span>
          </div>
        </div>
        <div class="p-5 bg-white rounded-3xl shadow-lg">
          <div class="text-base text-gray-400 ">Customers</div>
          <div class="flex items-center pt-1">
            <div class="text-2xl font-bold text-gray-900 ">1375</div>
            <span class="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full mx-auto mr-0">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span>5.2%</span>
                  </span>
          </div>
        </div>
        <div class="p-5 bg-white rounded-3xl shadow-lg">
          <div class="text-base text-gray-400 ">MRR</div>
          <div class="flex items-center pt-1">
            <div class="text-2xl font-bold text-gray-900 ">$250.00</div>
            <span class="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full mx-auto mr-0">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span>2.2%</span>
                  </span>
          </div>
        </div>
      </div>
      <div class="grid gap-7 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        <div class="col-span-2">
          <div class="rounded-3xl p-4 shadow-lg bg-white">
            <Chart></Chart>
          </div>
        </div>
        <div class="col-span-2">
          <div class="bg-white p-5 shadow-xl rounded-3xl">
            <div class="alert flex flex-row items-center bg-green-200 p-5 rounded-3xl border-b-2 border-green-300 mb-5">
              <div class="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                  <span class="text-green-500">
                    <svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </span>
              </div>
              <div class="alert-content ml-4">
                <div class="alert-title font-semibold text-lg text-green-800">
                  Success
                </div>
                <div class="alert-description text-sm text-green-600">
                  This is an alert message, alert message goes here..!
                </div>
              </div>
            </div>
            <div class="alert flex flex-row items-center bg-green-200 p-5 rounded-3xl shadow-lg border-b-2 border-green-300 mb-5">
              <div class="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                  <span class="text-green-500">
                    <svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </span>
              </div>
              <div class="alert-content ml-4">
                <div class="alert-title font-semibold text-lg text-green-800">
                  Success
                </div>
                <div class="alert-description text-sm text-green-600">
                  This is an alert message, alert message goes here..!
                </div>
              </div>
            </div>
            <div class="alert flex flex-row items-center bg-green-200 p-5 rounded-3xl shadow-lg border-b-2 border-green-300">
              <div class="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                  <span class="text-green-500">
                    <svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </span>
              </div>
              <div class="alert-content ml-4">
                <div class="alert-title font-semibold text-lg text-green-800">
                  Success
                </div>
                <div class="alert-description text-sm text-green-600">
                  This is an alert message, alert message goes here..!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid gap-7 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        <div class="col-span-3">
          <div class="flex items-center">
            <div class='overflow-x-auto w-full shadow-xl rounded-3xl'>

              <!-- Table -->
              <table class='mx-auto w-full whitespace-nowrap bg-white divide-y divide-gray-300 overflow-hidden'>
                <thead>
                <tr class="text-gray-600 text-left">
                  <th class="text-sm uppercase px-6 py-4">Name</th>
                  <th class="text-sm uppercase px-6 py-4">Mail</th>
                  <th class="text-sm uppercase px-6 py-4 text-center">status</th>
                  <th class="text-sm uppercase px-6 py-4 text-center">role</th>
                  <th class="text-sm uppercase px-6 py-4"></th>
                </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4">
                    <div class="flex items-center space-x-3">
                      <div class="inline-flex w-10 h-10">
                        <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU'>
                      </div>
                      <div>
                        <p class="">John Doe</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <p class="text-gray-500 text-sm font-semibold tracking-wide">john@doe.com</p>
                  </td>
                  <td class="px-6 py-4 text-center">
                          <span class="items-center p-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
                            Active
                          </span>
                  </td>
                  <td class="px-6 py-4 text-center text-gray-500">Admin</td>
                  <td class="px-6 py-4 text-center">
                    <a href="#" class="text-blue-800 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4">
                    <div class="flex items-center space-x-3">
                      <div class="inline-flex w-10 h-10">
                        <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU'>
                      </div>
                      <div>
                        <p class="">John Doe</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <p class="text-gray-500 text-sm font-semibold tracking-wide">john@doe.com</p>
                  </td>
                  <td class="px-6 py-4 text-center">
                        <span class="items-center p-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
                            Active
                        </span>
                  </td>
                  <td class="px-6 py-4 text-center text-gray-500">
                    Admin
                  </td>
                  <td class="px-6 py-4 text-center">
                    <a href="#" class="text-blue-800 hover:underline">Edit</a>
                  </td>
                </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="flex items-center justify-center">
            <div class="flex flex-col w-full">
              <div class="py-6 px-14 bg-gradient-to-tr from-blue-400 to-blue-500 rounded-tl-2xl rounded-tr-2xl text-center space-y-8">
                <h4 class="text-white text-center font-bold text-xl">
                  <i class="fa fa-users mr-2 fa-2x"></i>
                </h4>
                <span class="font-bold text-white text-2xl">New Users</span>
              </div>
              <div class="flex flex-col py-6 px-8 space-y-5 bg-white shadow-lg rounded-bl-2xl rounded-br-2xl">
                <p class="text-center text-2xl font-bold">27</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "./Chart";
export default {
  name: "Main",
  components: {
    Chart
  }
}
</script>

<style
    scoped>

</style>
