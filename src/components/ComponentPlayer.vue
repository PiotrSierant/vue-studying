<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <ComponentPlayerName 
                :myName="playerName"
                @handleChange="playerName = $event"/>
            </div>
            <div class="panel-body">
                Your name: <input type="text" v-model="playerName" placeholder="Name"/>
                <ComponentPlayerHealthBar 
                    :health="health"
                    :maxHealth="maxHealth"
                    @changeHp="health = $event"
                    @changeMaxHp="maxHealth = $event"
                />
            </div>
        </div>
        <ComponentPlayerStatsModifier 
            :health="health"
            :maxHealth="maxHealth"
            @changeMaxHp="maxHealth = $event"
            @changeHp="health = $event"
        />
    </div>
</template>
<script>
import ComponentPlayerName from './ComponentPlayerName.vue';
import ComponentPlayerHealthBar from './ComponentPlayerHealthBar.vue';
import ComponentPlayerStatsModifier from './ComponentPlayerStatsModifier.vue';
export default {
    name: "ComponentPlayer",
    data: () => ({
        playerName: '',
        health: 200,
        maxHealth: 200,
    }),
    components: { 
        ComponentPlayerName,
        ComponentPlayerHealthBar,
        ComponentPlayerStatsModifier,
     },
}
</script>
<style>
    .panel {
        box-shadow: 0 0 48px -7px rgba(0,0,0, .7);
    }
</style>