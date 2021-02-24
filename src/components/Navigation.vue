<template>
  <v-navigation-drawer app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> VelvetAnt </v-list-item-title>
        <v-list-item-subtitle> Beats blueant </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="[icon, text] in links" :key="icon" link>
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => ({
    drawer: null,
    links: [
      ['mdi-home', 'Home'],
      ['mdi-briefcase', 'Projects'],
      ['mdi-calendar', 'Calendar'],
      ['mdi-cog', 'Settings']
    ]
  })
})
export default class Navigation extends Vue {}
</script>
