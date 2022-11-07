<template>
    <div class="progress">
            <div class="progress-bar progress-bar-striped" 
            :class="[
                health <= maxHealth / 2 && 'progress-bar-warning', 
                health <= maxHealth / 4 ? 'progress-bar-danger' : 'progress-bar-success'
                ]"
            role="progressbar" 
            aria-valuenow="100" 
            aria-valuemin="0" 
            aria-valuemax="100" 
            :style="{ width: healthBarWidth }"
            >
                {{health}}hp / {{maxHealth}}hp
            </div>
        </div>
</template>
<script>
export default {
    name: 'ComponentProgressBar',
    props: {
        health: {
            type: [Number, String],
            default() {
                return ''
            }
        },
        maxHealth: {
            type: [Number, String],
            default() {
                return ''
            }
        },
        healthBarWidth: {
            type: [Number, String],
            default() {
                return ''
            }
        },
    }
}
</script>
<style>
    
</style>