<template>
  <v-footer color="primary" app>
    <v-icon @click="openThemeManager">settings</v-icon>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Mutation } from 'vuex-class'

const themeManagerNamspace = 'themeManager'

@Component({})
export default class BottomBar extends Vue {
  @Mutation('setPreferencesDrawer', { namespace: themeManagerNamspace })
  private declare setPreferencesDrawer: (value: boolean) => void

  private openThemeManager() {
    this.setPreferencesDrawer(true)
  }
}
</script>
