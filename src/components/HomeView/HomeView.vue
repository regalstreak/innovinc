<template>
  <v-slide-y-transition mode="out-in">
    <v-layout column>
      <div style="height: calc( 100vh + 60px )">
        <v-carousel style="height: 100%">

          <!--:src="`${baseUrl}images/carousel/1.jpg`"-->
          <v-carousel-item
              src="https://images.unsplash.com/photo-1535554467849-ca1305c79fc8?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&dl=rawpixel-798700-unsplash.jpg&s=74e811aa48c6602325eea1634416881d"
          >
            <div class="fullHeight">
              <v-layout column class="my-4" justify-center align-center fill-height>
                <v-flex md1 xs1 class="my-3">
                  <div class="text-xs-center carousel-main">
                    <h1>Welcome to Innovinc</h1>
                  </div>
                </v-flex>

                <v-flex md1 xs1 class="my-2 carousel-sub">
                  <div class="text-xs-center">
                    <h6 class="headline carousel-sub-text">Human Resources consultancy services</h6>
                  </div>
                </v-flex>
              </v-layout>
            </div>
          </v-carousel-item>

          <v-carousel-item
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&dl=dylan-gillis-533818-unsplash.jpg&s=4e534b14243805464411ae230a75af3c"
          >
            <div class="fullHeight">
              <v-layout column class="my-4" justify-center align-center fill-height>
                <v-flex md1 xs1 class="my-3">
                  <div class="text-xs-center carousel-main">
                    <h1>Careers with innovinc</h1>
                  </div>
                </v-flex>

                <v-flex md1 xs1 class="my-2 carousel-sub">
                  <div class="text-xs-center">
                    <h6 class="headline carousel-sub-text">Apply now</h6>
                  </div>
                </v-flex>
              </v-layout>
            </div>
          </v-carousel-item>

          <v-carousel-item
              src="https://images.unsplash.com/photo-1514996550219-62672472d03b?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&dl=alvaro-reyes-500037-unsplash.jpg&s=0425c94cb65077fef46ccc1d04524de8"
          >
            <div class="fullHeight">
              <v-layout column class="my-4" justify-center align-center fill-height>
                <v-flex md1 xs1 class="my-3">
                  <div class="text-xs-center carousel-main">
                    <h1>For any enquiry</h1>
                  </div>
                </v-flex>

                <v-flex md1 xs1 class="my-2 carousel-sub">
                  <div class="text-xs-center ">
                    <h6 class="headline carousel-sub-text">Contact us</h6>
                  </div>
                </v-flex>
              </v-layout>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>

      <info-firm />
      <apply />
      <why-us />
      <contact />
      <about />


    </v-layout>
  </v-slide-y-transition>
</template>

<script>
import InfoFirm from "./HomeViewComponents/InfoFirm.vue";
import Apply from "./HomeViewComponents/Apply.vue";
import WhyUs from "./HomeViewComponents/WhyUs.vue";
import About from "./HomeViewComponents/About.vue";
import Contact from "./HomeViewComponents/Contact.vue";

export default {
  data() {
    return {};
  },

  computed: {
    baseUrl: () => {
      return process.env.BASE_URL;
    }
  },

  components: {
    "info-firm": InfoFirm,
    apply: Apply,
    "why-us": WhyUs,
    about: About,
    contact: Contact
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.fullHeight {
  height: 100vh;
}

.carousel-main {
  background-color: whitesmoke;
  padding: 10px 30px 10px 30px;
  opacity: 0.75;
}

.carousel-sub {
  background-color: black;
  padding: 10px 15px 5px 15px;
  opacity: 0.75;
}

.carousel-sub-text {
  color: white;
}
</style>
