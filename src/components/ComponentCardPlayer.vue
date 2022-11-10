<template>
    <b-card :title="fullName" tag="article" style="max-width: 20rem;" class="my-2">
        <b-row class="my-1" v-if="isEditing">
            <b-col sm="12" class="editable--padding-bottom">
                <label for="input-small" class="smaller-text">Imię i nazwisko:</label>

                <b-form-input size="sm" type="text" v-model="names" placeholder="Podaj imie i nazwisko gracza" />
            </b-col>
        </b-row>
        <b-button variant="success" size="sm" v-if="!isEditing" @click="isEditing = true">Edytuj</b-button>
        <b-button variant="primary" size="sm" v-else @click="save">Zapisz</b-button>
        &nbsp;
        <b-button variant="danger" size="sm" @click='remove'>Usuń</b-button>

    </b-card>
</template>
 
<script>
export default {
    data() {
        return {
            names: '',
            isEditing: false
        };
    },
    props: {
        name: {
            type: String,
            required: true,
            default() {
                return ''
            }
        },
        lastName: {
            type: String,
            required: true,
            default() {
                return ''
            }
        },
        nodeId: {
            type: String,
            required: true,
            default() {
                return ''
            }
        }
    },
    computed: {
        fullName() {
            return `${this.name} ${this.lastName}`;
        }
    },
    methods: {
        remove() {
            if (confirm(`Czy na pewno chcesz usunąć gracza ${this.name} ${this.lastName}?`)) {
                this.$emit('delete', this.nodeId);
            }
        },
        save() {
            const names = this.names.split(' ');
            this.$emit('save', {
                name: names.shift(),
                lastName: names.join(' ')
            });
        },
    },
    mounted() {
        this.names = `${this.name} ${this.lastName}`;
    }
};
</script>

<style>
.smaller-text {
    font-size: .95em;
}

.editable--padding-bottom {
    padding-bottom: 10px;
}
</style>