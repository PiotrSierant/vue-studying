<template>
    <b-card title="Podaj dane gracza" header-tag="header" footer-tag="footer">
        <h6 slot="header" class="mb-0">Dodawanie gracza</h6>
        <b-card-text>
            <b-row class="my-1">
                <b-col sm="2">
                    <label for="input-small">Imię:</label>
                </b-col>
                <b-col sm="10">
                    <b-form-input size="sm" type="text" v-model="name" placeholder="Podaj imię gracza" />
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="2">
                    <label for="input-small">Nazwisko:</label>
                </b-col>
                <b-col sm="10">
                    <b-form-input size="sm" type="text" v-model="lastName" placeholder="Podaj nazwisko gracza" />
                </b-col>
            </b-row>
        </b-card-text>

        <div slot="footer">
            <b-button variant="primary" :disabled="!canAdd" @click="add">Dodaj</b-button>
        </div>
    </b-card>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            lastName: ''
        };
    },
    computed: {
        canAdd() {
            return this.name.trim().length >= 3 && this.lastName.trim().length >= 3;
        }
    },
    methods: {
        add() {
            this.$emit('add', {
                name: this.name,
                lastName: this.lastName
            });
        }
    }
};
</script>