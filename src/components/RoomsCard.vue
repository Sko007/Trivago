<template>
  <div id="app">
    <!-- <v-app id="inspire"> -->
    <v-container fluid>
      <v-row justify="space-around">
        <v-col cols="5">
         
          <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
          <h1>{{rooms.name}}</h1>

        </v-col>
      </v-row>
    </v-container>
    <!-- </v-app> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ['rooms'],


  computed: {
    ...mapGetters({
      hotels: "getHotels"
    })
  }
};
</script>


<style>
</style>