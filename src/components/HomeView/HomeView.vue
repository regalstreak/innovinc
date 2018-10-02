<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column>
        <v-carousel :style="{ height: windowHeight + 50 + 'px'}">
          <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="slide-x-transition"
              transition="slide-y-transition"
          >
          </v-carousel-item>
        </v-carousel>

        <info-firm/>
        <apply/>
        <why-us />
        <contact/>
        <about/>


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
    return {
      items: [
        {
          src:
            "https://i.pinimg.com/originals/c3/12/16/c31216424b811a9770b5b7dacb06fa3e.jpg"
        },
        {
          src:
            "https://www.desktopbackground.org/download/o/2011/07/30/242366_3d-abstract-wallpapers-hd-free-download-33837-full-hd-wallpapers_1075x720_h.jpg"
        },
        {
          src:
            "https://i2.wp.com/www.deteched.com/wp-content/uploads/2016/11/abstract_pyramids-2560x1440.jpg?fit=2560%2C1440"
        },
        {
          src:
            "https://stmed.net/sites/default/files/abstract-wallpapers-25162-8981309.jpgO"
        }
      ]
    };
  },

  computed: {
    windowHeight() {
      return window.innerHeight;
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
</style>
