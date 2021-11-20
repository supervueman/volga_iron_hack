import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import { ThemeOptions } from 'vuetify/types/services/theme'

export type VuetifyThemesT = 'dark' | 'light'

export enum VuetifyThemesNames {
  Dark = 'dark',
  Light = 'light',
}

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#007BFF',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: '#ff4444',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#ff4444',
        info: '#33b5e5',
        success: '#00C851',
        warning: '#ffbb33',
      },
      blue: {
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        primary: '#1976D2',
        secondary: '#424242',
        success: '#4CAF50',
        warning: '#f88C00',
      },
      green: {
        accent: '#CDDC39',
        error: '#ff5722',
        info: '#1976D2',
        primary: '#4caf50',
        secondary: '#009688',
        success: '#1976D2',
        warning: '#ff9800',
      },
      mytheme: {
        accent: '#FFFFFF',
        error: '#ff5722',
        info: '#1976D2',
        primary: '#000000',
        secondary: '#009688',
        success: '#1976D2',
        warning: '#ff9800',
      },
    },
  } as ThemeOptions,
})
