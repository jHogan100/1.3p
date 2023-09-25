<template> <!-- this is my homepage, everything flows in and out of this page. -->
    <div class="gridContainer">

        <div class="gridItem welcome">
        <h1>{{ msg }}</h1>
        <p> Welcome to my very first vue page <br>
            Here you'll find some examples of what I've learned and acheived this semester </p>
    </div>
    <div class ="gridItem buttons">
        <p> increase or decrease my likes</p>
        <button class="buttonStyle" @click="increase">Like</button>
        <button class="buttonStyle" @click="decrease">Dislike</button>
        <br> <p>likes: {{ count }}</p> <!-- tracks our likes, stored in count -->
        <button class="buttonStyle" @click="toggleGame"> show/hide RNG Game</button> <br>
    </div>
        <div class="gridItem about"><About /> </div>
        <div class ="gridItem rngGame"> <NumberGenerator v-if="showGame" /> </div>
        <div class ="gridItem panelFour"> <PanelFour /> </div>
    </div>
</template>

<script>
import NumberGenerator from './NumberGenerator.vue'
import About from './About.vue'
import PanelFour from './PanelFour.vue'

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            count: 0,
            showGame: false
        };
    },
    methods: {
        increase() { //code for increasing/decreasing the like counter
            this.count++;
        },
        decrease() {
            this.count--;
        },
        toggleGame() {
          this.showGame =! this.showGame;
        },
    },
    components: {
       NumberGenerator,
       About,
       PanelFour
      }
}
</script>