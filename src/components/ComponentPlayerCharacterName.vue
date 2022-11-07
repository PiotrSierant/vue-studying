<template>
    <div>
        <h3 class="panel-title">Player: {{ myName }}</h3>   
        ChildrenInput <input type="text" @change="handleChange" :value="myName" placeholder="Podaj swój nick"/>
    </div>
</template>
<script>
export default {
    name: 'ComponentPlayerCharacter',
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