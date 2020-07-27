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
    @update:match="updateMatch"
    @add:record="addRecord"
    @change:server="changeServer"
  />

  <Records 
    :match="match"
    :matchStatistic="matchStatistic"
  />
  <button @click="sendToServer()">Save match</button>
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
    this.$http.get('/api/courses').then(
      (response) => {
        this.match[0].name = response.data;
        console.log(response);
      }, 
      (error) => {
        console.log(error);
      }
    );
    // this.$http.post('/quotes').then(
    //   (res) => console.log(res)
    // );

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
    updateMatch(match) {
      this.match = JSON.parse(JSON.stringify(match));
    },
    addRecord(record) {
      this.matchStatistic.records.push(record);
    },
    changeServer(nextServer) {
      this.currentServerId = nextServer.id;
    },
    sendToServer() {
      const req = {match: this.match, matchStatistic: this.matchStatistic};
      console.log(req);
      this.$http.post('/api/matches', req
        )
        .then(
          (response) => {
            console.log(response);
            console.log('save successful');
          },
          (error) => {
            console.log(error);
          }
        )
    }
  }
}
</script>

<style scoped lang="stylus">
  .margin-bottom
    margin-bottom 20px

</style>