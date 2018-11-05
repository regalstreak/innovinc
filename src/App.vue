<template>
  <v-app>
    <v-toolbar
        app
        flat
        scroll-off-screen
        :color="updateToolbarScrollColor()"

    >
      <v-toolbar-title v-text="title"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat href="/outsource">Outsource</v-btn>
        <v-btn flat href="#Apply">Apply for Jobs</v-btn>
        <v-btn flat href="#WhyUs">Why Us</v-btn>
        <v-btn flat href="#Contact">Contact Us</v-btn>
        <v-btn flat href="#About">About us</v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <router-view/>
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
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  destroy() {
    window.removeEventListener("scroll", this.updateScroll);
  }
};
</script>
