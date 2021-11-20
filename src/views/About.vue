<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/">Home page</router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class AboutPage extends Vue {}
</script>
