<template>
  <div id="fullHeight">
    <v-layout column align-center wrap justify-center fill-height>
      <v-flex md1>
        <div class="text-xs-center">
          <h6 class="headline">Why us?</h6>
          <span class="subheading">
            We are a firm based in Mumbai, CBD<br>
        </span>
        </div>
      </v-flex>
      <v-flex md1>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="purple--text text--lighten-2">favorite</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">The best consultation</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                  turpis egestas.
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse
                  potenti.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="purple--text text--lighten-2">flash_on</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">We're Fast!</div>
                </v-card-title>
                <v-card-text>
                  We, at Innovinc provide you with your career and jobs as quickly as possible.
                  We prioritise you and value you as our candidate. We are committed at
                  providing you with the best jobs in a short period of time.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="purple--text text--lighten-2">settings</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Fully customised</div>
                </v-card-title>
                <v-card-text>
                  We help candidates grow themselves personally as well as professionally. (Expertise, Knowledge)
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
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
  wrap-option: true;
}
</style>
