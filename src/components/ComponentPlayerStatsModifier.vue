<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">Modifying a player's stats</h4>
        </div>
        <div class="panel-body">
            Health: 
            <input type="number" :value="health" @change="$emit('changeHp', $event.target.value)">
        </div>
        <div class="panel-body">
            Max health:
            <input type="number" :value="maxHealth" @change="$emit('changeMaxHp', $event.target.value)">
        </div>
    </div>
</template>
<script>
export default {
    name: "ComponentPlayerStatsModifier",
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
                return 0
            },
        }
    },
}
</script>
<style lang="">
    
</style>