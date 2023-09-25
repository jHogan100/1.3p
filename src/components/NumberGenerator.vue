<template>
    <div>
        <!-- this html code shows the rules at first, then displays the results after the button is pressed -->
      <h2>Number Generator Game</h2> 
      <img src= "../assets/d10.png" alt="Dice Image" width="50" height="50" />
      <img src= "../assets/d10.png" alt="Dice Image" width="50" height="50" />
      <h3 v-if="!diceRolled">The dice can roll anything from 1-100<br>55+ to win!</h3>
      <p v-else>Lucky Number: {{ generatedNumber }}</p>
      <button class="buttonStyle" @click="generateNumber" v-if="!diceRolled || generatedNumber !== null">Roll the dice</button>
      <p v-if="diceRolled">{{ getResult() }}</p>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return { // data for our game
      showGame: false,
      generatedNumber: null,
      diceRolled: false
    };
  },
  methods: {
    generateNumber() {
      this.generatedNumber = Math.floor(Math.random() * 100) + 1;
      this.diceRolled = true;
    },
    getResult() {
      if (this.generatedNumber === 100) { //prints a special message for rolling 100s
        return "wow a 100!";
      } else if (this.generatedNumber >= 55) { 
        return "You won! :D ";
      } else {
        return "Ooft, try again :(";
      }
    }
  }
};
</script>