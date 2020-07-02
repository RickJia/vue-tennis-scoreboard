<template>
<div class="board">
  <div class="player" v-for="(record, index) in matchStatistic.records" :key="index">
    <span>{{getRecordStatement(record)}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'MatchSwefcore',
  props: {
    match: Array,
    matchStatistic: Object,
  },
  methods: {
    getRecordStatement: function(record) {
      const statements = 'the point with';
      const serverName = this.match.find(player => player.id === record.currentServerId).name;
      const winOrLose = record.currentServerId === record.pointStatics.pointWinnerId ? 'win' : 'lose';
      const serverPoint = record.pointStatics.points.find(player => player.playerId === record.currentServerId).point;
      const opponentPoint = record.pointStatics.points.find(player => player.playerId !== record.currentServerId).point;
      return `${serverName} ${winOrLose} ${statements} ${record.pointStatics.howToWin} ${serverPoint} - ${opponentPoint}`;
    }
  },
}

</script>

<style scoped lang="stylus">
  .board
    display flex
    flex-direction: column-reverse;

  .player
    display flex
    margin-left 30px

  .add-point
    color #229954
  
  .lose-point
    color #c70039

  span
    text-align left

</style>