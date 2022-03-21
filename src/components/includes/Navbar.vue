<template>
  <div class="bg-gray-700 p-5 md:flex md:items-center md:justify-between">
    <div class="flex-1 min-w-0">
      <h2 @click="goTo('home')" class="cursor-pointer	 text-left text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">Back End Developer</h2>
    </div>
    <div class="mt-4 flex md:mt-0 md:ml-4">
      <button @click="goTo('signIn')" type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">Sign In</button>
      <button @click="goTo('signUp')" type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">Sign Up</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavbarLayout',
  methods: {
    goTo(e) {
      this.$router.push({name: e});
    },
  },
}
</script>