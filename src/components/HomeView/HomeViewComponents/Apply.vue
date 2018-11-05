<template>
  <div id="Apply">
    <div id="fullHeight">
      <v-parallax
          src="https://images.unsplash.com/photo-1538731838746-2fc9e5819830?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&dl=rawpixel-1087170-unsplash.jpg&s=8e677f1591938f7ff8f932d115019a01"
          style="height: 100%">
        <v-layout column align-center justify-center>


          <v-flex md4 class="text-xs-center parallax-main">

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
            <v-btn @click="testFirm()" dark>
              Apply Now!
            </v-btn>
          </v-flex>

        </v-layout>
      </v-parallax>
    </div>
  </div>
</template>

<script>
// import ApplyJob from "../../ApplyJob/ApplyJob.vue";

// todo: Name, number, email, field and work experience, describe job u want (job description)

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

.parallax-main {
  background-color: whitesmoke;
  padding: 10px 30px 10px 30px;
  opacity: 0.95;
}
</style>
