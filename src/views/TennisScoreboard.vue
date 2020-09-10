<template>
  <div class="score-board">
  <PlayForm
    v-show="!getSubmitted"
    @new:players="addPlayers"
  />
  <MatchScore 
    class="margin-bottom"
  />
  <GameBoard
    @update:match="updateMatch"
    @add:record="addRecord"
    @change:server="changeServer"
  />

  <Records />
  <!-- <button @click="sendToServer()">Save match</button> -->
  </div>
</template>

<script>
import MatchScore from '@/components/MatchScore.vue'
import GameBoard from '@/components/GameBoard.vue'
import PlayForm from '@/components/PlayForm.vue'
import Records from '@/components/Records.vue'

export default {
  name: 'TennisScoreboard',
  components: {
    MatchScore,
    GameBoard,
    PlayForm,
    Records,
  },
  mounted: function() {
    // API connection
    // this.$http.get('/api/courses').then(
    //   (response) => {
    //     this.match[0].name = response.data;
    //     console.log(response);
    //   }, 
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // this.$http.post('/quotes').then(
    //   (res) => console.log(res)
    // );
  },
  computed: {
    getSubmitted() {
      return this.$store.getters.submitted;
    }
  },
  methods: {
    addPlayers(players) {
      console.log('te');
      this.$store.commit('addPlayers', players);
    },
    updateMatch(match) {
      this.$store.commit('updateMatch', match);
    },
    addRecord(record) {
      this.$store.commit('addRecord', record);
    },
    changeServer(nextServer) {
      this.$store.commit('changeServer', nextServer);
    },
    // API connection
    // sendToServer() {
    //   const req = {match: this.match, matchStatistic: this.matchStatistic};
    //   console.log(req);
    //   this.$http.post('/api/matches', req
    //     )
    //     .then(
    //       (response) => {
    //         console.log(response);
    //         console.log('save successful');
    //       },
    //       (error) => {
    //         console.log(error);
    //       }
    //     )
    // }
  }
}
</script>

<style scoped lang="stylus">
  .margin-bottom
    margin-bottom 20px

</style>