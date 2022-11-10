<template>
    <div>
        <b-card header-tag="header" footer-tag="footer">
            <h6 slot="header" class="mb-0"> Add user</h6>
            <b-card-text>
                <b-row class="my-1">
                    <b-col sm="2">
                        <label for="input-small">Name:</label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input v-model="name" size="sm" placeholder="Enter your name"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col sm="2">
                        <label for="input-small">Last Name:</label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input v-model="lastName" size="sm" placeholder="Enter your lastname"></b-form-input>
                    </b-col>
                </b-row>
            </b-card-text>
            <div class="footer">
                <b-button href="#" variant="primary" :disabled="!canAdd" @click="add">Add user</b-button>
            </div>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'TheCardAdd',

    data() {
        return {
            name: '',
            lastName: '',
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
                lastName: this.lastName,
            });
        }
    },
};
</script>

<style scoped>

</style>