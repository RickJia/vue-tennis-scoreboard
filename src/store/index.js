import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state =  {
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

const mutations = {
  addPlayers (state, players) {
    state.match[0].name = players.name1;
    state.match[1].name = players.name2;
    state.submitted = true;
  },
  addRecord(state, record) {
    state.matchStatistic.records.push(record);
  },
  updateMatch(state, match) {
    state.match = JSON.parse(JSON.stringify(match));
  },
  changeServer(state, nextServer) {
    state.currentServerId = nextServer.id;
  },
}

const getters = {
  submitted: (state) => state.submitted,
  currentServerId: (state) => state.currentServerId,
  match: (state) => state.match,
  currentGame: (state) => state.currentGame,
  matchStatistic: (state) => state.matchStatistic
}

export default new Vuex.Store({ state, mutations, getters })
