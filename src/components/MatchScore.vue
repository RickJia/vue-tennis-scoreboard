<template>
<div class="board">
  <div class="player" v-for="player in mathScoreOfPlayers" :key="player.name">
    <span class="name">{{player.name}}</span>
    <div class="scores">
      <span class="score" v-for="score in player.scoreOfSets" :key="score">{{ score }}</span>
    </div>

  </div>
  
</div>
</template>

<script>

export default {
  name: 'MatchSwefcore',

  data: function() {
    return {
      mathScoreOfPlayers: [
        {
          name: 'P1',
          scoreOfSets: [0 , 0]
        },
        {
          name: 'P2',
          scoreOfSets: [1, 0]
        }
      ]
    }
  },
}
</script>


<style scoped lang="stylus">
  .board
    display flex
    flex-direction column
    font-size 50px
    padding 0 150px

  .player 
    display flex
    justify-content center
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  
  .name
    width 300px
    text-align left

  .score
    margin-right 15px




</style>