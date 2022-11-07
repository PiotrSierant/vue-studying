<template>
    <div class="healthbar">
        <section class="sectionButton">
            <ComponentButton 
                :function-button="minusHp"
                titleButton="Hit"
                class="btn btn-danger"
                :disabled="currentHp===0"
            />
            <ComponentButton 
                :function-button="potion"
                titleButton="Potion"
                class="btn btn-success"
                :disabled="currentHp===100"
            />
            <ComponentButton 
                :function-button="respawn"
                titleButton="Reset"
                class="btn btn-primary"
            />
        </section>
        <ComponentProgressBar 
            :current-hp=currentHp
            :health-bar-width=healthBarWidth
            :max-hp=maxHp
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
    ComponentProgressBar
},
    data: () => ({
        currentHp: 100,
        maxHp: 100,
        animated: true,
    }),
    methods: {
        minusHp(){
            this.currentHp -= 10;
        },
        potion(){
            this.currentHp += 10;
        },
        respawn(){
            this.currentHp = this.maxHp;
        },
        
    },
    computed: {
        healthBarWidth(){
            return (this.currentHp / this.maxHp) * 100 + '%'
        }
    },
    watch:{
        currentHp(value){
            if(value < 0) {
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