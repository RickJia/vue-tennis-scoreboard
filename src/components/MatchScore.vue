<template>
<div class="board">
  <div class="player" v-for="player in match" :key="player.id">
    <div class="serve">
      <i v-if="player.id === currentServerId" class="icon-serve"></i>
      <span v-else class="empty-block"></span>
    </div>
    <div class="flex">
      <span class="name">{{player.name}}</span>
      <div class="scores">
        <span class="score" v-for="game in player.sets" :key="game">{{ game }}</span>
      </div>
    </div>

  </div>
  
</div>
</template>

<script>
export default {
  name: 'MatchSwefcore',
  props: {
    match: Array,
    currentServerId: String
  }
}
</script>

<style scoped lang="stylus">
  .board
    display flex
    flex-direction column
    font-size 25px

  .player 
    display flex
    justify-content center
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  
  .name
    text-align left
    flex 1
    
  .scores
    display flex

  .score
    display flex
    align-items center
    margin-right 15px

  .empty-block
    width 58.182px

  .serve
    width 30px
    height 30px
    align-items center
    display flex
    flex-basis: inherit;
  
  .flex
    display flex
    flex-grow 1

</style>