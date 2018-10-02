<template>
  <div id="fullHeight">
    <v-layout column class="my-5" align-center style="height: 100%">
      <v-flex xs12 sm4 class="my-3">
        <div class="text-xs-center">
          <h6 class="headline">Innovinc</h6>
          <span class="subheading">
            A tagline because they're awesome!<br>
        </span>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-flex xs12 class="text-xs-center">
          <v-card class="elevation-0 transparent">
            <v-divider class="mx-5" />
            <v-card-title primary-title class="layout justify-center">
              <div class="headline text-xs-center">Who we are</div>
            </v-card-title>
            <v-card-text>
              Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.<br>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas.<br>
              Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse
              potenti.
            </v-card-text>
          </v-card>
        </v-flex>
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
