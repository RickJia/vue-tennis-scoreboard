<template>
<div class="board">
  <div class="player" v-for="player in match" :key="player.id">
    <div class="serve">
      <span v-if="player.id === currentServerId">dot</span> 
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
  },
  created: function () {
    this.currentServer();
  },
  methods: {
    currentServer() {
      this.$emit('change:currentserver', this.currentServerId);
    }
  }
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

  .empty-block
    width 58.182px

  .serve
    margin-right 15px
    width 70px
  
  .flex
    display flex

</style>