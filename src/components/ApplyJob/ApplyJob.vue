<template>

  <v-container fluid justify-center align-center>
    <v-layout row justify-center fill-height align-center>
      <v-flex md6>
        <br>
        <br>
        <br>

        <div class="text-xs-center">
          <h6 class="headline">Applying for a job?</h6>
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

          <v-text-field
              v-model="phone"
              :error-messages="phoneErrors"
              label="Phone Number"
              solo
              required
              @input="$v.phone.$touch()"
              @blur="$v.phone.$touch()"
          ></v-text-field>

          <v-text-field
              v-model="location"
              :error-messages="locationErrors"
              label="Location"
              solo
              required
              @input="$v.location.$touch()"
              @blur="$v.location.$touch()"
          ></v-text-field>

          <v-text-field
              v-model="comment"
              :error-messages="commentErrors"
              label="Comments"
              solo
              @input="$v.comment.$touch()"
              @blur="$v.comment.$touch()"
          ></v-text-field>

          <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              label="Do you agree with our terms?"
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
              required
          ></v-checkbox>

          <v-btn
              @click="submit"
              :disabled="this.$v.$invalid"
          >submit
          </v-btn>
          <v-btn @click="clear">clear</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { validationMixin } from "vuelidate";
import { alpha, email, required, sameAs } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, alpha },
    email: { required, email },
    comment: {},
    location: { required },
    phone: { required },
    checkbox: { sameAs: sameAs(() => true), required }
  },

  data: () => ({
    name: "",
    email: "",
    comment: "",
    location: "",
    phone: "",
    items: ["Job seeker", "Recruiter"],
    checkbox: false,
    submitStatus: null
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.required && errors.push("You must agree to continue!");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    commentErrors() {
      const errors = [];
      if (!this.$v.comment.$dirty) return errors;
      return errors;
    },
    locationErrors() {
      const errors = [];
      if (!this.$v.location.$dirty) return errors;
      !this.$v.location.required && errors.push("Location is required.");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.required && errors.push("Phone number is required.");
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
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        console.log("submit!");
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.comment = "";
      this.location = "";
      this.phone = "";
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
