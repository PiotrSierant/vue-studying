<template>
  <div class="my-app">
    <h1>Vuelidate</h1>
    <b-container>
      <b-form @submit="submit" @reset="reset">
        <b-form-group label="email" label-for="email">
          <b-form-input id="email" type="mail" v-model.trim="email" placeholder="Enter email"
            @input="$v.email.$model = $event.trim()" :state="!$v.email.$dirty ? null : !$v.email.$error" />
          <b-form-invalid-feedback>
            Wystąpił błąd
          </b-form-invalid-feedback>
          <b-form-valid-feedback>
            Wprowadzono poprawne dane
          </b-form-valid-feedback>
        </b-form-group>


        <b-form-group label="name" label-for="name">
          <b-form-input id="name" type="text" v-model.trim="name" placeholder="Enter name"
            @input="$v.name.$model = $event.trim()" :state="!$v.name.$dirty ? null : !$v.name.$error" />
          <b-form-invalid-feedback>
            Wystąpił błąd
          </b-form-invalid-feedback>
          <b-form-valid-feedback>
            Wprowadzono poprawne dane
          </b-form-valid-feedback>
        </b-form-group>


        <b-form-group label="password" label-for="password">
          <b-form-input id="password" type="password" v-model.trim="password" placeholder="Enter password"
            @input="$v.password.$model = $event" :state="!$v.password.$dirty ? null : !$v.password.$error" />
          <b-form-invalid-feedback>
            Wystąpił błąd
          </b-form-invalid-feedback>
          <b-form-valid-feedback>
            Wprowadzono poprawne dane
          </b-form-valid-feedback>
        </b-form-group>

        <b-button @click="reset">Reset</b-button>
      </b-form>
    </b-container>
  </div>
</template>
<script>
import { required, minLength, email } from 'vuelidate/lib/validators';
export default {
  name: 'app',
  data: () => ({
    name: '',
    email: '',
    password: '',
  }),
  validations: {
    name: {
      required,
      minLength: minLength(5),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    }
  },
  methods: {
    submit(event) {
      event.preventDefault();
    },
    reset() {
      this.name = '',
        this.email = '',
        this.password = ''
    }
  }
}
</script>
<style scoped>

</style>