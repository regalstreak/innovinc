<template>
  <!-- todo: Font size bada karo-->

  <div id="fullHeight">
      <v-layout column class="my-5" justify-center align-center fill-height>
        <v-flex md1 class="my-3">
          <div class="text-xs-center">
            <h6 class="headline">Innovinc</h6>
            <span class="subheading">
              Lifting your people and business.<br>
            </span>
          </div>
        </v-flex>
        <v-flex md5 class="text-xs-center">
          <v-card class="elevation-0 transparent">
            <v-divider class="mx-5" />
            <v-card-title primary-title class="layout justify-center">
              <div class="headline text-xs-center">Who we are</div>
            </v-card-title>
            <v-card-text>
              We, at <b>Innovinc</b> believe that great businesses succeed because of the people in it.<br>
              We help you ensure that you have the right people with the right skills, <br>
              knowledge, experience and attitude, engaged at the right time <br>
              to carry out those roles and deliver results.

            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
  </div>
</template>

<script>
export default {
  name: "InfoFirm"
};
</script>

<style scoped>
#fullHeight {
  height: 100vh;
}
</style>
