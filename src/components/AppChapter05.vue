<template>
    <div class='my-app'>
        <b-container>
            <b-col sm="12">
                <h2>Dodawanie pytania</h2>
                <b-form @submit="onSubmit" @reset="onReset">
                    <b-form-group label="Pytanie:" label-for="question">
                        <b-form-input id="question" type="text" v-model="question" placeholder="Treść pytania"
                            @input="$v.question.$model = $event.trim()"
                            :state="!$v.question.$dirty ? null : !$v.question.$error" />

                        <b-form-invalid-feedback>
                            Podane pytanie jest za krótkie!
                        </b-form-invalid-feedback>

                        <b-form-valid-feedback>
                            Podane pytanie jest ok!
                        </b-form-valid-feedback>


                    </b-form-group>

                    <b-row>

                        <b-alert :show="$v.answers.minLength < 2 || !$v.answers.required" variant="warning">Wymagana
                            liczba
                            odpowiedzi: 2
                        </b-alert>
                        <b-col sm="6" :key="`answ-${index}`" v-for="(answer, index) in answers">

                            <b-form-group :label="`Odpowiedź ${index + 1}`" :label-for="`answer-${index + 1}`">

                                <b-form-input id="`answer-${index+1}`" type="text" v-model.trim="answers[index]"
                                    placeholder="Treść odpowiedzi"
                                    @input="$v.answers.$each[index].$model = $event.trim()"
                                    :state="!$v.answers.$each[index].$dirty ? null : !$v.answers.$each[index].$error" />
                                <b-form-invalid-feedback>
                                    Podana odpowiedź nie spełnia warunków dodania odpowiedzi!
                                </b-form-invalid-feedback>

                                <b-form-valid-feedback>
                                    Podana odpowiedź spełnia warunki dodania odpowiedzi!
                                </b-form-valid-feedback>

                            </b-form-group>

                        </b-col>
                    </b-row>
                    <section class="buttons">
                        <b-button variant="primary" @click="answers.push('')">Dodaj nową odpowiedź</b-button>
                        &nbsp; <b-button variant="danger" @click="answers.pop()" :disabled="this.answers.length <= 0">
                            Usuń
                            ostatnią
                            odpowiedź</b-button>
                        &nbsp; <b-button variant="success" type="submit" :disabled="$v.$invalid">Wyślij</b-button>
                    </section>
                </b-form>
            </b-col>
        </b-container>
    </div>
</template>
  
<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
    data() {
        return {
            question: '',
            answers: ['', '']
        };
    },
    validations: {
        question: {
            required,
            minLength: minLength(10),
        },
        answers: {
            required,
            minLength: minLength(2),
            $each: {
                required,
                minLength: minLength(5),
            }
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            this.$v.$touch();
            if (this.$v.$invalid) {
                alert('Błąd!')
            } else {
                alert('Wysłano!')
            }
        },
        onReset(event) {
            event.preventDefault();
        }
    }
}
</script>
  
<style>
.my-app {
    padding: 50px 0;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
  
<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}

.buttons {
    display: flex;
    gap: 1rem;
}
</style>