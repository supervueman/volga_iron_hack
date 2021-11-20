import { ActionTree } from 'vuex'
import { ThemeManagerState } from './types'
import { RootState } from '../types'

export const actions: ActionTree<ThemeManagerState, RootState> = {
  changePreferencesDrawer({ commit }, preferencesDrawer: boolean) {
    commit('setPreferencesDrawer', preferencesDrawer)
  },
}
