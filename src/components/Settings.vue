<template>
  <v-card fixed right temporary>
    <v-card-title>Settings</v-card-title>
    <v-card-text>
      <v-select v-model="theme" label="color theme" :items="themeOptions" outlined dense />
      <v-select v-model="contrast" label="contrast" :items="contrastOptions" outlined dense />
      <v-switch v-model="$vuetify.theme.dark" />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Action, Mutation } from 'vuex-class'
import { VuetifyThemesT, VuetifyThemesNames } from '@/plugins/vuetify'
import { Preferences } from '@/store/themeManager/types'

type ThemeOptions = {
  text: string
  value: string
}

const namespace = 'themeManager'

@Component({})
export default class Settings extends Vue {
  private themeOptions: ThemeOptions[] = [
    {
      text: 'blue',
      value: 'blue',
    },
    {
      text: 'green',
      value: 'green',
    },
    {
      text: 'mytheme',
      value: 'mytheme',
    },
  ]

  private contrastOptions: ThemeOptions[] = [
    {
      text: VuetifyThemesNames.Dark,
      value: VuetifyThemesNames.Dark,
    },
    {
      text: VuetifyThemesNames.Light,
      value: VuetifyThemesNames.Light,
    },
  ]

  @State('preferencesDrawer', { namespace })
  private readonly declare preferencesDrawer: boolean

  @State('preferences', { namespace })
  private readonly declare preferences: Preferences

  @Mutation('setTheme', { namespace })
  private readonly declare setTheme: (theme: string) => void

  @Mutation('setContrast', { namespace })
  private readonly declare setContrast: (contrast: string) => void

  @Action('changePreferencesDrawer', { namespace })
  private readonly declare changePreferencesDrawer: (value: boolean) => void

  get open(): boolean {
    return this.preferencesDrawer
  }

  set open(value: boolean) {
    this.changePreferencesDrawer(value)
  }

  get theme(): string {
    return this.preferences.theme
  }

  set theme(theme: string) {
    this.setTheme(theme)
  }

  get contrast(): VuetifyThemesT {
    return this.preferences.contrast
  }

  set contrast(contrast: VuetifyThemesT) {
    this.setContrast(contrast)
  }
}
</script>
