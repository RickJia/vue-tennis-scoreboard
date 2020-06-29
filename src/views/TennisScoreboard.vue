<template>
  <div class="score-board">
    I am tennis scoreboard
    hello
  <MatchScore 
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

export default {
  name: 'TennisScoreboard',
  components: {
    MatchScore,
    GameBoard
  },
  data: function() {
    return {
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
          name: 'Tiffiny',
          sets: [
            0
          ]
        },
        {
          id: '2',
          name: 'Rogerr',
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
    addScore(recordOfThePoint) {
      console.log(recordOfThePoint);
    },
    updateMatch(match) {
      this.match = JSON.parse(JSON.stringify(match));
    },
    addRecord(record) {
      this.matchStatistic.records.push(record);
    },
    changeServer(nextServer) {
      this.currentServerId = nextServer.id;
      console.log(this.currentServerId);
    }
  }
}
</script>