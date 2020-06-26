<template>
  <div class="score-board">
    I am tennis scoreboard
    hello
  <MatchScore />
  <GameBoard />
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
  }
}
</script>