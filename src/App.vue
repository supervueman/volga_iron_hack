<template>
  <component :is="$route.meta.layout || 'div'">
    <router-view />
  </component>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  created() {
    this.$vuetify.theme.dark = true
  }
}
</script>
