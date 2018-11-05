<template>
  <v-container id="About" fluid style="background-color: #000000">

    <v-layout align-center justify-space-around row>
      <v-flex class="text-xs-center" style="opacity: 0">
        <a href="https://goo.gl/maps/tDv4bHP3ahm" target="_blank">
          <v-icon style="color: whitesmoke">location_on</v-icon>
          <h2 class="no-bold"> CBD Belapur </h2>
          <div class="subheading" style="color: #b2bbc1">
            Navi Mumbai
          </div>
        </a>
      </v-flex>

      <v-flex class="text-xs-center">
        <h1 class="no-bold">About Us </h1>
      </v-flex>

      <v-flex class="text-xs-center" style="opacity: 0">
        <a href="mailto:contact@innovinc.co">
          <v-icon style="color: whitesmoke">mail</v-icon>
          <h2 class="no-bold">contact@innovinc.co </h2>
        </a>
      </v-flex>
    </v-layout>

    <v-layout justify-space-around row class="my-3">
      <v-flex class="text-xs-center">
        <a href="https://goo.gl/maps/tDv4bHP3ahm" target="_blank">
          <v-icon style="color: whitesmoke">location_on</v-icon>
          <h2 class="no-bold"> CBD Belapur </h2>
          <div class="subheading" style="color: #b2bbc1">
            Navi Mumbai
          </div>
        </a>
      </v-flex>

      <v-flex class="text-xs-center">

        <a href="tel:8657380295">
          <v-icon style="color: whitesmoke">phone</v-icon>
          <h2 class="no-bold">+91 86573 80295</h2>
        </a>
      </v-flex>

      <v-flex class="text-xs-center">
        <a href="mailto:contact@innovinc.co">
          <v-icon style="color: whitesmoke">mail</v-icon>
          <h2 class="no-bold">contact@innovinc.co </h2>
        </a>
      </v-flex>


    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.no-bold {
  font-weight: normal;
}

h2 {
  color: #b2bbc1;
}

h1 {
  color: white;
}

a {
  color: black;
  text-decoration: none;
}
</style>
