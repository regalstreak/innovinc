<template>
  <v-app>
    <v-toolbar app flat scroll-off-screen :color="updateToolbarScrollColor()">
      <v-toolbar-title v-text="title" :to="`${baseUrl}`"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat :href="`${baseUrl}`">Home</v-btn>
        <v-btn flat to="/outsource">Outsource</v-btn>
        <v-btn flat :href="`${baseUrl}#Apply`">Apply for jobs</v-btn>
        <v-btn flat :href="`${baseUrl}#WhyUs`">Why Us</v-btn>
        <v-btn flat :href="`${baseUrl}#Contact`">Contact Us</v-btn>
        <v-btn flat :href="`${baseUrl}#About`">About Us</v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "innovinc",
      scrollPosition: null
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    updateToolbarScrollColor() {
      if (this.scrollPosition >= 630) {
        return "undefined";
      } else {
        return "rgba(0, 0, 0, 0)";
      }
    }
  },
  computed: {
    baseUrl: () => {
      return process.env.BASE_URL;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  destroy() {
    window.removeEventListener("scroll", this.updateScroll);
  }
};
</script>
