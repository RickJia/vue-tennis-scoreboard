<template>
<div class="content">
  <div class="game-group" v-for="game in currentGame" :key="game.playerId"> 
    <span class="score">
      {{game.playerId}}
      {{game.point}}
    </span>
    <div>
      <div class="btn-group">
        <button @click="updateScore('Ace', game.playerId)">Ace</button>
        <button @click="updateScore('Winner', game.playerId)">Winner</button>
        <button @click="updateScore('Opponent Unforced Error', game.playerId)">Opponent Unforced Error</button>
      </div>
      <div class="btn-group">
        <button @click="updateScore('Double Fault', game.playerId)">Double Fault</button>
        <button @click="updateScore('Unforced Error', game.playerId)">Unforced Error</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'GameBoard',
  props: {
    currentServerId: String,
    currentGame: Array,
    players: Array,
  },
  methods: {
    updateScore(action, playerId) {
      switch (action) {
        case 'Ace':
        case 'Winner':
        case 'Opponent Unforced Error':
        case 'Double Fault':
        case 'Unforced Error': {
          const event = action;
          const currentServerId = this.currentServerId;
          const recordOfThePoint = {currentServerId, event, playerId};
          this.addPoint(playerId);
          this.$emit('add:score', recordOfThePoint);
          return
        }
      }
    },
    addPoint(playerId) {
      const pointEmun = [ 0, 15 , 30 , 40, 'Deuce', 'Ad.', 'Game'];


      const player = this.currentGame.find(game => game.playerId === id);
      const id = 

      
      
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