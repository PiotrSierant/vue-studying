<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <ComponentPlayerCharacterName 
                :myName="playerName"
                @handleChange="playerName = $event"/>
            </div>
            <div class="panel-body">
                Your name: <input type="text" v-model="playerName" placeholder="Name"/>
                <ComponentPlayerCharacterHealthBar 
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
import ComponentPlayerCharacterName from './ComponentPlayerCharacterName.vue';
import ComponentPlayerCharacterHealthBar from './ComponentPlayerCharacterHealthBar.vue';
import ComponentPlayerStatsModifier from './ComponentPlayerStatsModifier.vue';
export default {
    name: "ComponentPlayerCharacter",
    data: () => ({
        playerName: '',
        health: 200,
        maxHealth: 200,
    }),
    components: { 
        ComponentPlayerCharacterName,
        ComponentPlayerCharacterHealthBar,
        ComponentPlayerStatsModifier,
     },
}
</script>
<style>
    .panel {
        box-shadow: 0 0 48px -7px rgba(0,0,0, .7);
    }
</style>