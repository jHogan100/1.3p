<template> <!--this pages showcases @keyframes animation  -->
    <div>
      <button class="buttonStyle" @click="startSpin">click for a secret animation</button>
      <p :class="{ spin: spinning }">Thanks for coming :D </p>
    </div>
  </template>
  
  <style>
  .spin { 
    animation: spin 1.5s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        spinning: false,
      };
    },
    methods: { // enables us to toggle the effect 
      startSpin() {
        this.spinning = !this.spinning;
      },
    },
  };
  </script>