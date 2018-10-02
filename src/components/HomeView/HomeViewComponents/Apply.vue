<template>
  <v-parallax
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <v-layout column align-center justify-center >


        <v-flex md4 style="background-color: aqua" class="text-xs-center" >

              <v-card class="elevation-0 transparent ">
                <v-card-title primary-title class="justify-center">
                  <div class="headline text-xs-center">Want a job?</div>
                </v-card-title>
                <v-card-text>
                  Apply for jobs here because vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.<br>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                  turpis egestas.
                </v-card-text>
              </v-card>
        </v-flex>

        <v-flex md2>

        </v-flex>

        <v-flex md1 >
          <v-btn >
            Apply Now!
          </v-btn>
        </v-flex>

    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  name: "Apply"
};
</script>

<style scoped>
</style>
