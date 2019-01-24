import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backsound: 'http://www.mariomayhem.com/downloads/sound_tracks/Super_Mario_Bros._1/01-main-theme-overworld.mp3',
    soundOn: true
  },
  mutations: {
    soundOffMutations (state) {
      state.soundOn = false
    }
  },
  actions: {
    soundOff ({ commit }) {
      commit('soundOffMutations')
    }
  }
})
