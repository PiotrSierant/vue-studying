<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <h2 class="display-3 text-xs-center mb-3">Panel admina</h2>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Logowanie</v-toolbar-title>
                <v-spacer />
                <v-tooltip right>
                  <template>
                    <v-icon large>account_box</v-icon>
                  </template>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form ref="login" v-model="valid">
                  <v-text-field @keyup.enter="submit" :rules="notEmptyRule" v-model="login" prepend-icon="person"
                    name="login" label="Login" type="text"></v-text-field>
                  <v-text-field @keyup.enter="submit" :rules="notEmptyRule" v-model="password" id="password"
                    prepend-icon="lock" name="password" label="Hasło" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="submit" :disabled="!valid">Zaloguj</v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      notEmptyRule: [
        v => !!v || 'To pole jest wymgane'
      ],
      login: null,
      password: null,
      valid: false
    }
  },
  methods: {
    submit() {
      if (this.$refs.login.validate()) {
        localStorage.setItem('loggedIn', this.login)
        this.$router.push("/dashboard")
      }
    }
  }
}
</script>