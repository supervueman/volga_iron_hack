<template>
  <v-app-bar
    app
    flat
    color="primary"
    dark
  >
    <v-btn color="primary" depressed fab small @click="changeIsPanelOpen">
      <v-icon>reorder</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class AppBar extends Vue {
  changeIsPanelOpen() {
    this.$store.commit('setPanelOpen', !this.$store.state.isPanelOpen)
  }
}
</script>
