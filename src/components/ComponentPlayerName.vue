<template>
    <div>
        <h3 class="panel-title">Player: {{ myName }}</h3>   
    </div>
</template>
<script>
export default {
    name: 'ComponentPlayer',
    props: {
        myName: {
            type: String,
            default() {
                return ''
            }
        }
    },
    methods: {
        handleChange(e) {
            this.$emit('handleChange', e.target.value)
        }
    }
}
</script>
<style>
</style>