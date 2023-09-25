<template> <!-- app.vue. this is our final stop -->
  <div class="catPicture"></div> 
  <HelloWorld msg="Task 1.3P" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NumberGenerator from './components/NumberGenerator.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    NumberGenerator
}
}
</script>
