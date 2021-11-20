import { MutationTree } from 'vuex'
import { ThemeManagerState } from './types'

import vuetify, { VuetifyThemesT, VuetifyThemesNames } from '@/plugins/vuetify'

import { VuetifyThemeVariant } from 'vuetify/types/services/theme'

export const mutations: MutationTree<ThemeManagerState> = {
  setTheme(state, theme: string) {
    state.preferences.theme = theme
    vuetify.framework.theme.themes.dark = vuetify.userPreset.theme?.themes?.[theme as VuetifyThemesT] as VuetifyThemeVariant
    vuetify.framework.theme.themes.light = vuetify.userPreset.theme?.themes?.[theme as VuetifyThemesT] as VuetifyThemeVariant
  },

  setContrast(state, contrast: VuetifyThemesT) {
    state.preferences.contrast = contrast
    vuetify.framework.theme.dark = contrast === VuetifyThemesNames.Dark
  },

  setPreferencesDrawer(state, preferencesDrawer: boolean) {
    state.preferencesDrawer = preferencesDrawer
  },
}
