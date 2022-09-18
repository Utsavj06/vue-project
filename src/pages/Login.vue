<template>
    <div class="flex flex-col h-5/6 justify-center gap-0.5">
      <ExHead title="Login" />
      <div class="flex items-center flex-col gap-2">
        <input class="border-2 lg:h-10" type="text" placeholder="UserName" />
        <input class="border-2 lg:h-10" type="text" placeholder="Password" />
      </div>
      <router-link to="/register">Register ?</router-link>
      <div class="login-button">
        <Buttons buttonName="Login" />
      </div>
    </div>
</template>
  
  <script>
  
    import ExHead from '../components/PageTitle.vue';
    import Buttons from '../components/AllButtons.vue';
  
    export default {
      name: "App",
      components: {
        ExHead,
        Buttons,
      }
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
  