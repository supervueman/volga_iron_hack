import Vue from 'vue'
import Vuex from 'vuex'

import { RootState } from './types'

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  state: {
    version: '1.0.0',
    isPanelOpen: true,
  },
  mutations: {
    setPanelOpen(state, isOpen: boolean) {
      state.isPanelOpen = isOpen
    },
  },
  actions: {},
  modules: {},
})
