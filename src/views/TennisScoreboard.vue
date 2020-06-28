<template>
  <div class="score-board">
    I am tennis scoreboard
    hello
  <MatchScore @change:currentserver="changeServer"/>
  <GameBoard 
    :currentServerId="currentServerId"
    :players="players"
    :currentGame="currentGame"
    @add:score="addScore"
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
      currentServerId: '',
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
      players: [
        {
          id: '1',
          name: 'Tiffiny',
          set: [
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
        records: [
          {
            id: '1',
            set: 1,
            currentServerId: '1',
            gameNumber: 1,
            howtoWin: 'Un', 
            pointWinId: 'playerId',
            pointStatics: [  
              {
                playerId: '1',
                score: 15
              },
              {
                playerId: '2',
                score: 15
              }
            ],
           
            pointDuration: '2020....'
            
          }
        ]

      }
    }
  },
  methods: {
    addScore(recordOfThePoint) {
      console.log(recordOfThePoint);
    },
    changeServer(id) {
      this.currentServerId = id;  
      console.log(id);
    }

  }
}
</script>