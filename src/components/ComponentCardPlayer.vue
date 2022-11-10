<template>
    <div>
        <b-card :title="fullName" tag="article" style="max-width: 20rem;" class="my-2">
            <b-card-text>
                <b-row class="my-1" v-if="isEditing">
                    <b-col sm="4">
                        <label for="input-small">Full name:</label>
                    </b-col>
                    <b-col sm="8">
                        <b-form-input v-model="names" size="sm" placeholder="Enter your name"></b-form-input>
                    </b-col>
                </b-row>

            </b-card-text>

            <b-button href="#" size="sm" variant="primary" v-if="!isEditing" @click="isEditing = !isEditing">Edit
            </b-button>
            <b-button href="#" size="sm" variant="success" v-else @click="save">Save</b-button>

            &nbsp;
            <b-button href="#" size="sm" variant="danger" @click="remove">Delete</b-button>&nbsp;

        </b-card>
    </div>
</template>

<script>
export default {
    name: 'ComponentCardPlayer',

    data() {
        return {
            names: '',
            isEditing: false,
        };
    },
    props: {
        name: {
            type: String,
            default() {
                return ''
            }
        },
        lastName: {
            type: String,
            default() {
                return ''
            }
        },
    },
    computed: {
        fullName() {
            return `${this.name} ${this.lastName}`
        },
    },
    methods: {
        remove() {
            if (confirm(`Do you want delete user ${this.fullName}?`)) {
                return console.log(`delete user ${this.fullName}`)
            }
        },
        save() {
            this.isEditing = !this.isEditing;
            const names = names.split(' ');
            this.$emit('save', {
                name: names.shift(),
                lastName: names.join(' '),
            });
        },
    },
    mounted() {
        this.names = `${this.name} ${this.lastName}`;
    },
};
</script>

<style scoped>

</style>