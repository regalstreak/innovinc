<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column>
        <v-carousel>
          <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="slide-x-transition"
              transition="slide-y-transition"
          ></v-carousel-item>
        </v-carousel>

        <info-firm />
        <apply />
        <about />
        <contact />


      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import InfoFirm from "./HomeViewComponents/InfoFirm.vue";
  import Apply from "./HomeViewComponents/Apply.vue";
  import About from "./HomeViewComponents/About.vue";
  import Contact from "./HomeViewComponents/Contact.vue";

  export default {
    data() {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    },

    components: {
      "info-firm": InfoFirm,
      "apply": Apply,
      "about": About,
      "contact": Contact

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
