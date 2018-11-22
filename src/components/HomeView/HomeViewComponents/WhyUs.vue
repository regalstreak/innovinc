<template>
  <div id="WhyUs">
    <div id="fullHeight">
      <v-layout column align-center wrap justify-center fill-height>
        <v-flex md1>
          <div class="text-xs-center">
            <h6 class="headFont">Why us?</h6>
            <span class="paraFont">
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
                  <v-card-text class="paraFont">
                    At Innovinc, we understand what the client needs. We swiftly find the matching talent
                    and focus on quality. Our industry-savvy recruiters and our knack to accurately counsel high-profile 
                    industry talent, enables us to create a strong impression. 
                    This makes us their natural choice when they look for reliable partners. At the end of the day, we’re all about “people”.
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
                  <v-card-text class="paraFont">
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
                  <v-card-text class="paraFont">
                    We help candidates grow themselves personally as well as professionally. (Expertise, Knowledge) <br>
                    We use the latest and cutting edge technology to handpick the best available talent on board. 
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </div>
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

.paraFont {
  font-size: 2.7vh;
}

.headFont {
  font-size: 5vh;
  font-weight: normal;
}
</style>
