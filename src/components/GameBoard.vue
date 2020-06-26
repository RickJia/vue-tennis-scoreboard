<template>
<div class="content">
  <div class="game-group"> 
    <span class="score">
      15
    </span>
    <div>
      <button @click="updateScore('Ace')">Ace</button>
      <button @click="updateScore('Winner')">Winner</button>
      <button @click="updateScore('Fault')">Fault</button>
      <button @click="updateScore('Unforced Error')">Unforced Error</button>
      <button @click="updateScore('Unforced Error')">Unforced Error</button>
    </div>
  </div>

  <div class="game-group"> 
    <span class="score">
      15
    </span>
    <div>
      <button>Ace</button>
      <button>Winner</button>
      <button>Fault</button>
      <button>Unforced Error</button>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'GameBoard',
  props: {
    currentServerId: String
  },
  data: function() {
    return {
      game: [
        
      ]
    }
  },

  methods: {
    updateScore(action) {
      switch (action) {
        case 'Ace':
        case 'Winner':
        case 'Fault':
        case 'Unforced Error': {
          const event = action;
          const recordOfThePoint = {...this.currentServerId, event};
          this.$emit('add:score', recordOfThePoint);
          return;
        }
      }
    }
  },
}
</script>

<style scoped lang="stylus">
  .content
    display flex
    justify-content center

  .score
    font-size 100px
  
  .game-group:nth-child(1)
    margin-right 15px
 
</style>