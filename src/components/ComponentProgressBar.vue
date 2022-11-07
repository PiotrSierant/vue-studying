<template>
    <div class="progress">
            <div class="progress-bar progress-bar-striped" 
            :class="[
                currentHp <= 50 && 'progress-bar-warning', 
                currentHp <= 30 && 'progress-bar-danger',
                currentHp === 100 && 'progress-bar-success'
                ]"
            role="progressbar" 
            aria-valuenow="100" 
            aria-valuemin="0" 
            aria-valuemax="100" 
            :style="{ width: healthBarWidth }"
            >
                {{currentHp}}/{{maxHp}}hp
            </div>
        </div>
</template>
<script>
export default {
    name: 'ComponentProgressBar',
    props: {
        currentHp: {
            type: [Number, String],
            default() {
                return ''
            }
        },
        maxHp: {
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
        }
    }
}
</script>
<style>
    
</style>