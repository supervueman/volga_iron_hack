import { VuetifyThemesT } from '@/plugins/vuetify'

export interface Preferences {
  contrast: VuetifyThemesT;
  theme: string;
}

export interface ThemeManagerState {
  preferencesDrawer: boolean;
  preferences: Preferences;
}
