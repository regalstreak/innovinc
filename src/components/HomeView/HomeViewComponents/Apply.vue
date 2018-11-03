<template>
  <div id="fullHeight">
    <v-parallax
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" style="height: 100%">
      <v-layout column align-center justify-center>


        <v-flex md4 style="background-color: aqua" class="text-xs-center">

          <v-card class="elevation-0 transparent ">
            <v-card-title primary-title class="justify-center">
              <div class="headline text-xs-center">Apply for jobs</div>
            </v-card-title>
            <v-card-text>
              We provide many different types of jobs. Some of them are listed below:<br>
              BPO/Call Center, back office, banking industry, <br>
              hospitality, marketing sector, corporate sector, industrial sector. <br>
              If you are interested in getting selected or you want to build your own <br>
              career in these fields, or for any other jobs, <br>
              please click the button below and Apply Now!
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex md2>

        </v-flex>

        <v-flex md1>
          <v-btn @click="testFirm()">
            Apply Now!
          </v-btn>
        </v-flex>

      </v-layout>
    </v-parallax>
  </div>
</template>

<script>
// import ApplyJob from "../../ApplyJob/ApplyJob.vue";

export default {
  name: "Apply",
  methods: {
    testFirm() {}
  }
};
</script>

<style scoped>
#fullHeight {
  height: 100vh;
}
</style>
