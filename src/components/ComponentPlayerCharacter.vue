<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <ComponentPlayerCharacterName 
            :myName="playerName"
            @handleChange="playerName = $event"/>
        </div>
        <div class="panel-body">
            ParentInput <input type="text" v-model="playerName" placeholder="Podaj swój nick"/>
            <ComponentPlayerCharacterHealthBar />
        </div>
    </div>
</template>
<script>
import ComponentPlayerCharacterName from './ComponentPlayerCharacterName.vue';
import ComponentPlayerCharacterHealthBar from './ComponentPlayerCharacterHealthBar.vue';
export default {
    name: "ComponentPlayerCharacter",
    data: () => ({
        playerName: '',
    }),
    components: { 
        ComponentPlayerCharacterName,
        ComponentPlayerCharacterHealthBar,
     }
}
</script>
<style>
    .panel {
        box-shadow: 0 0 48px -7px rgba(0,0,0, .7);
    }
</style>