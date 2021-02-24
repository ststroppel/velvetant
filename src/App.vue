<template>
  <v-app id="inspire">
    <Navigation />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue'; // @ is an alias to /src
import Home from '@/views/Home.vue';

@Component({
  components: {
    Navigation,
    Home
  }
})
export default class App extends Vue {}
</script>
