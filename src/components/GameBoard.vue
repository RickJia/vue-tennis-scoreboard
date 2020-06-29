<template>
<div class="content">
  <div class="game-group" v-for="game in currentGame" :key="game.playerId"> 
    <span class="score">
      {{game.playerId}}
      {{game.point}}
    </span>
    <div>
      <div class="btn-group">
        <button @click="updateScore('Ace', game.playerId)">Ace</button>
        <button @click="updateScore('Winner', game.playerId)">Winner</button>
        <button @click="updateScore('Opponent Unforced Error', game.playerId)">Opponent Unforced Error</button>
      </div>
      <div class="btn-group">
        <button @click="updateScore('Double Fault', game.playerId)">Double Fault</button>
        <button @click="updateScore('Unforced Error', game.playerId)">Unforced Error</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'GameBoard',
  props: {
    currentServerId: String,
    currentGame: Array,
    match: Array,
  },
  created() {
    console.log(this.currentGame);
  },
  methods: {
    updateScore(howToWin) {
      let record;
      switch (howToWin) {
        case 'Ace':
        case 'Winner':
        case 'Opponent Unforced Error': {    
          record = this.addPoint(this.currentServerId, howToWin);
          break;
        }
        case 'Double Fault':
        case 'Unforced Error': {      
          const game = this.currentGame.find(game => game.playerId !== this.currentServerId);
          record = this.addPoint(game.playerId, howToWin);
          break;
        }
      }
      this.updateMatch(record);
      this.$emit('add:record', record);
    },
    addPoint(playerId, howToWin) {
      const winPointPlayer = this.currentGame.find(game => game.playerId === playerId);
      const notWinPointPlayer = this.currentGame.find(game => game.playerId !== playerId);
      let result;
      const lastSet = this.match[0].sets.length - 1;
      if (this.match[0].sets[lastSet] === 6 && this.match[1].sets[lastSet] === 6) {
        result = this.tieBreak(playerId, howToWin, winPointPlayer, notWinPointPlayer);
      } else {  
        result = this.normalGame(playerId, howToWin, winPointPlayer, notWinPointPlayer);
      }
      return this.getRecord(playerId, howToWin, result.winPointPlayer, result.notWinPointPlayer);
    },
    normalGame(playerId, howToWin, winPointPlayer, notWinPointPlayer) {
      const pointEnum = [ '0', '15' , '30' , '40', 'Ad.', 'Game'];
      const winPoint = pointEnum[pointEnum.indexOf(winPointPlayer.point) + 1]; 
      winPointPlayer.point = winPoint;
      if (winPointPlayer.point === 'Ad.' && notWinPointPlayer.point === 'Ad.') {
        winPointPlayer.point = '40';
        notWinPointPlayer.point = '40';
      }
      if (winPointPlayer.point === 'Ad.' && notWinPointPlayer.point !== '40') {
        winPointPlayer.point = 'Game';
      }
      return { winPointPlayer, notWinPointPlayer };
    },
    tieBreak(playerId, howToWin, winPointPlayer, notWinPointPlayer) {
      const winPoint = parseInt(winPointPlayer.point, 10);
      const notWinpoint = parseInt(notWinPointPlayer.point, 10);
      winPointPlayer.point = winPoint + 1;
      if (winPointPlayer.point + notWinpoint === 1) {
        this.chanageServer();
      } else {
        if ((winPointPlayer.point + notWinpoint - 1) % 2 === 0) {
          this.chanageServer();
        }
      }

      if (winPointPlayer.point > 6 && notWinPointPlayer.point < 6) {
        winPointPlayer.point = 'Game';
        this.chanageServer();
      }

      if (winPointPlayer.point > 5 && notWinPointPlayer.point > 5) {
        if (winPointPlayer.point - notWinPointPlayer.point === 2) {
          winPointPlayer.point = 'Game';
          this.chanageServer();
        }
      }
      return { winPointPlayer, notWinPointPlayer };
    },
    getRecord(playerId, howToWin, winPointPlayer, notWinPointPlayer) {
      const len = this.match[0].sets.length;
      const currentGamePlayer1 = this.match[0].sets[len - 1];
      const currentGamePlayer2 = this.match[1].sets[len - 1];
      const gameNumber = currentGamePlayer1 + currentGamePlayer2 + 1;
      const pointWinnerId = playerId;
      const set = this.match[0].sets.length;
      const notwinPointPlayer = notWinPointPlayer;
      const points = [
        {
          playerId: playerId,
          point: winPointPlayer.point,
        }, 
        {
          playerId: notwinPointPlayer.playerId,
          point: notwinPointPlayer.point,
        }
      ]
      const currentServerId = this.currentServerId;
      const pointStatics = { howToWin, pointWinnerId, points};
      const record = { set, currentServerId, gameNumber, pointStatics };
      return record;
    },
    updateMatch(record) {
      const winnerOfGame = record.pointStatics.points.find(gamePoint => gamePoint.point === 'Game');
      if (winnerOfGame) {
        this.emitMatch(winnerOfGame);
        this.reset();
      }
    },
    emitMatch(winnerOfGame) {
      let playerSet = this.match.find(player => player.id === winnerOfGame.playerId);
      const lastSet = playerSet.sets.length - 1;
      playerSet = playerSet.sets[playerSet.sets.length - 1] += 1;
      const updatePlayerIndex = this.match.findIndex(player => player.id === winnerOfGame.playerId);
      this.match[updatePlayerIndex].sets[lastSet] = playerSet;
      this.chanageServer();
      this.setNewSet();
      this.$emit('update:match', this.match);
    },
    chanageServer() {
      const nextServer = this.match.find(player => player.id !== this.currentServerId);
      this.currentServerId = nextServer.id;
      this.$emit('change:server', nextServer);
    },
    setNewSet() {
      const lastSet = this.match[0].sets.length - 1; 
      if (this.match[0].sets[lastSet] === 7 || this.match[1].sets[lastSet] === 7) {
        this.match[0].sets.push(0);
        this.match[1].sets.push(0); 
        this.$emit('update:match', this.match);
      }
      if (this.match[0].sets[lastSet] === 6 && this.match[1].sets[lastSet] < 5 || 
        this.match[1].sets[lastSet] === 6 && this.match[0].sets[lastSet]
      ) {
        this.match[0].sets.push(0);
        this.match[1].sets.push(0);
      }
    },
    reset() {
      this.currentGame.map(game => game.point = '0');
    },
  },
}
</script>

<style scoped lang="stylus">
  .content
    display flex
    justify-content center

  .score
    font-size 100px
  
  .game-group:nth-child(1)
    margin-right 15px
 
</style>