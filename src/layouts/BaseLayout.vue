<template>
  <v-app>
    <AppBar />

    <v-main>
      <slot></slot>
    </v-main>

    <NavigationDrawer />
    <BottomBar />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import NavigationDrawer from '@/components/NavigationDrawer.vue'
import BottomBar from '@/components/BottomBar.vue'
import AppBar from '@/components/AppBar.vue'

@Component({
  components: {
    NavigationDrawer,
    BottomBar,
    AppBar,
  },
})
export default class App extends Vue {}
</script>
