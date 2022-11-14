<template>
    <div class="my-app">
        <h1>Vuelidate</h1>
        <b-container>
            <h2>Login form</h2>

            <b-form @submit="submit($event, 'login')" @reset="reset($event, 'login')">


                <b-form-group label="Email" label-for="login_email">
                    <b-form-input id="login_email" type="email" v-model="login.email" placeholder="Enter email"
                        @input="$v.login.email.$model = $event.trim()"
                        :state="!$v.login.password.$dirty ? null : !$v.login.password.$error" />
                    <b-form-invalid-feedback>
                        Wystąpił błąd
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback>
                        Wprowadzono poprawne dane
                    </b-form-valid-feedback>
                </b-form-group>


                <b-form-group label="Password" label-for="login_password">
                    <b-form-input id="login_password" type="password" v-model="login.password"
                        placeholder="Enter password" @input="$v.login.password.$model = $event"
                        :state="!$v.login.password.$dirty ? null : !$v.login.password.$error" />
                    <b-form-invalid-feedback>
                        Wystąpił błąd
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback>
                        Wprowadzono poprawne dane
                    </b-form-valid-feedback>
                </b-form-group>

                <b-button @click="reset($event, 'login')" class="btn btn-danger">Reset</b-button>&nbsp;
                <b-button @click="submit($event, 'login')" class="btn btn-success">Wyślij</b-button>


            </b-form>
        </b-container>


        <b-container>
            <h2>Register form</h2>

            <b-form @submit="submit($event, 'register')" @reset="reset($event, 'register')">


                <b-form-group label="Email" label-for="email">
                    <b-form-input id="email" type="email" placeholder="Enter email" v-model.trim="register.email"
                        @input="$v.register.email.$model = $event.trim()"
                        :state="!$v.register.email.$dirty ? null : !$v.register.email.$error" />
                    <b-form-invalid-feedback>
                        Wystąpił błąd
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback>
                        Wprowadzono poprawne dane
                    </b-form-valid-feedback>
                </b-form-group>


                <b-form-group label="Name" label-for="name">
                    <b-form-input id="name" type="text" v-model="register.name" placeholder="Enter name"
                        @input="$v.register.name.$model = $event.trim()"
                        :state="!$v.register.name.$dirty ? null : !$v.register.name.$error" />
                    <b-form-invalid-feedback>
                        Wystąpił błąd
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback>
                        Wprowadzono poprawne dane
                    </b-form-valid-feedback>
                </b-form-group>


                <b-form-group label="Password" label-for="password">
                    <b-form-input id="password" type="password" v-model="register.password" placeholder="Enter password"
                        @input="$v.register.password.$model = $event"
                        :state="!$v.register.password.$dirty ? null : !$v.register.password.$error" />
                    <b-form-invalid-feedback>
                        Wystąpił błąd
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback>
                        Wprowadzono poprawne dane
                    </b-form-valid-feedback>
                </b-form-group>


                <b-form-group label="Repeat password" label-for="repeat_password">
                    <b-form-input id="repeat_password" type="password" v-model="register.repeat_password"
                        placeholder="Enter password" @input="$v.register.repeat_password.$model = $event"
                        :state="!$v.register.repeat_password.$dirty ? null : !$v.register.repeat_password.$error" />
                    <b-form-invalid-feedback>
                        Wystąpił błąd
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback>
                        Wprowadzono poprawne dane
                    </b-form-valid-feedback>
                </b-form-group>

                <b-button @click="reset($event, 'register')" class="btn btn-danger">Reset</b-button>&nbsp;
                <b-button @click="submit($event, 'register')" class="btn btn-success">Wyślij</b-button>
            </b-form>
        </b-container>
    </div>
</template>
<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';
export default {
    name: 'app',
    data: () => ({
        register: {
            name: '',
            email: '',
            password: '',
            repeat_password: '',
        },
        login: {
            email: '',
            password: '',
        }

    }),
    validations: {
        register: {
            name: {
                required,
                minLength: minLength(3),
            },
            email: {
                required,
                email,
            },
            password: {
                required,
                minLength: minLength(8),
            },
            repeat_password: {
                sameAsPassword: sameAs('password'),
            }
        },
        login: {
            email: {
                required,
                email,
            },
            password: {
                required,
                minLength: minLength(8),
            }
        }

    },
    methods: {
        submit(event, form) {
            event.preventDefault();
            this.$v[form].$touch();
            if (this.$v[form].$invalid) {
                alert('Błąd')
            } else {
                alert('Wysłano!')
                this.reset(event, form)
                this.$v[form].$reset();
            }
        },
        reset(event, form) {
            event.preventDefault();
            this[form].name = '';
            this[form].email = '';
            this[form].password = '';
            this[form].repeat_password = '';

            this.$v[form].$reset(); // resetowanie pol do fazy poczatkowej.(po resecie nie wyswietlaja się błędy)
        }
    }
}
</script>
<style scoped>
.btn {
    margin-top: 1rem;
}
</style>