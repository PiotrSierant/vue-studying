<template>
    <div class="healthbar">
        <section class="sectionButton">
            <ComponentButton 
                :function-button="minusHp"
                titleButton="Hit"
                class="btn btn-danger"
                :disabled="health===0"
            />
            <ComponentButton 
                :function-button="potion"
                titleButton="Potion"
                class="btn btn-success"
                :disabled="health===maxHealth"
            />
            <ComponentButton 
                :function-button="respawn"
                titleButton="Reset"
                class="btn btn-primary"
            />
        </section>
        <ComponentProgressBar 
            :health=health
            :health-bar-width=healthBarWidth
            :maxHealth=maxHealth
        />
    </div>
</template>
<script>
import ComponentButton from './ComponentButton.vue';
import ComponentProgressBar from './ComponentProgressBar.vue';
export default {
    name: 'ComponentPlayerCharacterHealthBar',
    components: {
    ComponentButton,
    ComponentProgressBar,
},
    props: {
        health: {
            type: [String, Number],
            default() {
                return 0
            }
        },
        maxHealth: {
            type: [String, Number],
            default() {
                return 100
            }
        },
    },
    data: () => ({
        animated: true,
    }),
    methods: {
        minusHp(){
            this.$emit('changeHp', this.health - 10)
        },
        potion(){
            this.$emit('changeHp', this.health + 10)
        },
        respawn(){
            this.$emit('changeHp', this.maxHealth)
        },
        changeMaxHp() {
            this.$emit('changeMaxHp', this.maxHealth)
        }
    },
    computed: {
        healthBarWidth(){
            return (this.health / this.maxHealth) * 100 + '%'
        }
    },
    watch:{
        health(value){
            if(value < 0 || value > this.maxHealth) {
                this.respawn();
            }
        },
        maxHealth(value) {
            if(value < this.health) {
                this.respawn();
            }
        }
    }
}
</script>
<style>
    .healthbar {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .progress {
        max-width: 500px;
        width: 100%;
    }
    .sectionButton {
        display: flex;
        gap: 1rem;   
        margin-bottom: 1rem;
    }
    .btn {
        padding: .5rem 2rem;
    }
</style>