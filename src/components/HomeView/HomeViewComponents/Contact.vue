<template>

  <div id="Contact">
    <div id="fullHeight">
      <v-parallax
          src="https://images.unsplash.com/photo-1532526338225-bc66ea49a9f2?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&dl=annie-spratt-752789-unsplash.jpg&s=2ed0e84f2fc86a917f89b1f0cb606dff"
          style="height: 100%">
        <v-container justify-center fluid>
          <v-layout row justify-center fill-height align-center>
            <v-flex md6>

              <div class="text-xs-center">
                <h6 class="headline">Want to get in touch?</h6>
              </div>

              <br><br>

              <form>
                <v-text-field
                    v-model="name"
                    :error-messages="nameErrors"
                    label="Name"
                    solo
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                ></v-text-field>
                <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="E-mail"
                    solo
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                ></v-text-field>

                <v-select
                    v-model="select"
                    :items="items"
                    :error-messages="selectErrors"
                    label="Your position"
                    required
                    solo
                    @change="$v.select.$touch()"
                    @blur="$v.select.$touch()"
                ></v-select>

                <v-text-field
                    v-model="description"
                    :error-messages="descriptionErrors"
                    label="Description"
                    solo
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                ></v-text-field>

                <v-checkbox
                    v-model="checkbox"
                    :error-messages="checkboxErrors"
                    label="Do you agree with our terms?"
                    required
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                ></v-checkbox>

                <v-btn @click="submit">submit</v-btn>
                <v-btn @click="clear">clear</v-btn>
              </form>
            </v-flex>
          </v-layout>
        </v-container>
      </v-parallax>
    </div>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { alpha, email, required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, alpha },
    email: { required, email },
    description: { required },
    select: { required },
    checkbox: { required }
  },

  data: () => ({
    name: "",
    email: "",
    description: "",
    select: null,
    items: ["Job seeker", "Recruiter"],
    checkbox: false
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.required && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Reason is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.required && errors.push("Description is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.description = "";
      this.select = null;
      this.checkbox = false;
    }
  }
};
</script>

<style scoped>
#fullHeight {
  height: 100vh;
}
</style>
