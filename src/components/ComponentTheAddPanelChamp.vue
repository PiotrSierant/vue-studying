<template>
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h4 class="panel-title">Add hero</h4>
        </div>
        <div class="panel-body">
            <div class="input-group margin-bottom">
                <span class="input-group-addon">Name</span>
                <input type="text" class="form-control" placeholder="Name" v-model="name" required/>
            </div>
            <div class="input-group margin-bottom">
                <span class="input-group-addon">Nick</span>
                <input type="text" class="form-control" placeholder="Nick" v-model="nick" required />
            </div>
            <div class="input-group margin-bottom">
                <span class="input-group-addon">Max health</span>
                <input type="number" class="form-control" placeholder="Max hp" v-model="hp" required/>
            </div>
            <div class="input-group margin-bottom">
                <span class="input-group-addon">Max mana</span>
                <input type="number" class="form-control" placeholder="Max mana" v-model="mana" required/>
            </div>
            <button 
                type="button"
                class="btn btn-danger"
                @click="reset()"
            >Reset</button>
            &nbsp;
            <button 
                type="submit"
                class="btn btn-success"
                @click="add()"
                :disabled="cantUseName"
            >Add</button>
            </div>
        
    </div>
</template>
<script>
export default {
    name: 'ComponentTheAddPanelChamp',
    data: () => ({
        name: '',
        nick: '',
        hp: null,
        mana: null,
    }),
    props: {
        names: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        reset() {
            this.name = '';
            this.nick = '';
            this.hp = null;
            this.mana = null;
        },
        add() {
            this.$emit('add', {
                name: this.name,
                nick: this.nick,
                hp: this.hp,
                mana: this.mana,  
            });
            this.reset();
        }
    },
    computed: {
        cantUseName() {
            return this.names.find(v => v === this.name.trim()) !== undefined
        }
    },
}
</script>
<style scoped>
    .input-group-addon {
        width: 100px;
        text-align: left;
    }
    .margin-bottom {
        margin-bottom: 1rem;
    }
</style>