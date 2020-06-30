<template>
  <form @submit.prevent="handleSubmit">
  <div class="player-form">
    <div class="player">
      <label for="player1">Player name</label>
      <input type="text" v-model="players.name1" name="player1">
    </div>
    <div class="player">
      <label for="player2">Player name</label>
      <input type="text" v-model="players.name2" name="player2">
    </div>
  </div>
  <button>Ready play</button>
  </form>
</template>

<script>
export default {
  name: 'PlayForm',
  components: {
  },  
  data: function() {
    return {
      players: {
        name1: '',
        name2: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.players);
      this.$emit('new:players', this.players);
    }
  }
}
</script>

<style scoped lang="stylus">
  .player-form
    display flex
    flex-direction column 
  
  .player
    display flex
    justify-content center
  
  .player:nth-child(1)
    margin-bottom 15px

  label
    font-size 25px
    margin-right 15px
  
  button
    background #50bfff
    height 50px
    width 150px
    border 0
    border-radius 5px
    color white
    font-size 19px
    margin-top: 18px
    box-shadow: 0px 6px #3885b2
    &:hover
      background #48abe5
    &:active
      box-shadow: 0px 3px #204c66
      transform: translateY(3px);
</style>
