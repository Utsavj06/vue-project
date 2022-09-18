<template>
  <div class="lg:h-screen border-dashed border-2 m-0 p-0 ">
    <!-- <div class="flex flex-col h-4/5 border-dashed border-2 justify-center gap-0.5"> -->
      <ExHead title='Registration' />
      <div class="flex items-center flex-col gap-2">
        <input class="border-2 lg:h-10" type="email" placeholder="Email Address" />
        <input class="border-2 lg:h-10" type="text" placeholder="Name" />
        <input class="border-2 lg:h-10" type="text" placeholder="Password" />
        <input class="border-2 lg:h-10" type="text" placeholder="Confirm Password" />
      </div>
      <router-link to="/">Login ?</router-link>
      <div class="">
        <Buttons buttonName="Register" />
      </div>
    </div>
</template>

<script>
  
    import ExHead from '../components/PageTitle.vue'
    import Buttons from '../components/AllButtons.vue'
    // import { useStore } from 'vuex';
  
    export default {
      name: "App",
      components: {
        ExHead,
        Buttons,
      },
      // setup() {
      //   const login_form = ref({})
      //   const register_form = ref({})
      //   const store = useStore()

      //   return {
      //     login_form,
      //     register_form
      //   }
      // }
     };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  