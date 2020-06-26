<template>
  <div class="score-board">
    I am tennis scoreboard
    hello
  <MatchScore />
  <GameBoard :currentServerId="'d'" @add:score="addScore"/>
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
  methods: {
    addScore(recordOfThePoint) {
      console.log(recordOfThePoint);
    }
  }
}
</script>