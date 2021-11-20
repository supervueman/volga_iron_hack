<template>
  <v-navigation-drawer :value="true" app fixed>
    <v-toolbar color="primary">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list-item to="/">
      Home page
    </v-list-item>
    <v-list-item to="/about">
      About page
    </v-list-item>
  </v-navigation-drawer>
</template>
