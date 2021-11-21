<template>
  <v-navigation-drawer v-model="isPanelOpen" app fixed>
    <v-toolbar color="primary" flat>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="/logo.png"
          transition="scale-transition"
          width="80"
          :mobile-breakpoint="720"
        />
      </div>
    </v-toolbar>

    <v-divider />

    <v-list-item @click="openDefects">
      Просмотр дефектов
    </v-list-item>

    <v-dialog v-model="isDefectsTableOpen" width="1500px">
      <DefectsTable />
    </v-dialog>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import Map from '@/components/Map.vue'
import DefectsTable from '@/components/DefectsTable.vue'

@Component({
  components: {
    Map,
    DefectsTable,
  },
})
export default class NavigationDrawer extends Vue {
  private isDefectsTableOpen = false

  get isPanelOpen() {
    return this.$store.state.isPanelOpen
  }

  set isPanelOpen(value) {
    this.$store.commit('setPanelOpen', value)
  }

  private openDefects() {
    this.isDefectsTableOpen = true
  }
}
</script>
