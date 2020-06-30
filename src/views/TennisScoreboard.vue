<template>
  <div class="score-board">
  <PlayForm
    v-show="submitted === false"
    @new:players="addPlayers"
  />
  <MatchScore 
    class="margin-bottom"
    :match="match"
    :currentServerId="currentServerId"
  />
  <GameBoard 
    :currentServerId="currentServerId"
    :match="match"
    :currentGame="currentGame"
    @add:score="addScore"
    @update:match="updateMatch"
    @add:record="addRecord"
    @change:server="changeServer"
  />
  </div>
</template>


<script>
import MatchScore from '@/components/MatchScore.vue'
import GameBoard from '@/components/GameBoard.vue'
import PlayForm from '@/components/PlayForm.vue'

export default {
  name: 'TennisScoreboard',
  components: {
    MatchScore,
    GameBoard,
    PlayForm,
  },
  data: function() {
    return {
      submitted: false,
      currentServerId: '1',
      currentGame: [
        {
          playerId: '1',
          point: '0',
        },
        {
          playerId: '2',
          point: '0',
        },
      ],
      match: [
        {
          id: '1',
          name: '',
          sets: [
            0
          ]
        },
        {
          id: '2',
          name: '',
          sets: [
            0
          ]
        }
      ],
      matchStatistic: {
        records: []
      }
    }
  },
  methods: {
    addPlayers(players) {
      this.match[0].name = players.name1;
      this.match[1].name = players.name2;
      this.submitted = true;
    },
    addScore(recordOfThePoint) {
      console.log(recordOfThePoint);
    },
    updateMatch(match) {
      console.log(match);
      this.match = JSON.parse(JSON.stringify(match));
    },
    addRecord(record) {
      this.matchStatistic.records.push(record);
      console.log(this.matchStatistic);
    },
    changeServer(nextServer) {
      this.currentServerId = nextServer.id;
      console.log(this.currentServerId);
    }
  }
}
</script>

<style scoped lang="stylus">
  .margin-bottom
    margin-bottom 65px

</style>