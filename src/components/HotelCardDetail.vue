<template>
  <v-app id="inspire">
    <v-card class="mx-auto">
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card color="#385F73" dark>
              <v-row dense>
                <v-col class="padding" cols="4">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="50vh"
                    width="auto"
                  ></v-img>
                </v-col>
                <v-col cols="8">
                  <h1>{{hotel.name}}</h1>
                  <p>{{hotel.description}}</p>
                  <p>distance to venue: {{hotel.distance_to_venue}}</p>
                  <p>price category: {{hotel.price_category}}</p>
                  <p>Rating: {{hotel.rating}}</p>

                  <v-btn>Book now</v-btn>
                </v-col>
              </v-row>
              <RoomsCard v-for="(room, index) in rooms" :key="index" :rooms="rooms"></RoomsCard>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>



<script>
import RoomsCard from "./RoomsCard";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    RoomsCard
  },
  computed: {
    ...mapGetters({
      hotel: "getHotel",
      rooms: "getRooms"
    })
  },

  methods: {
    ...mapActions(["loadHotel", "loadRooms"])
  },

  created() {
    console.log("created is executed");

    this.loadHotel();
    this.loadRooms();
  }
};
</script>