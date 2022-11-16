<template>
    <div></div>
</template>

<script>
export default {
    name: 'ProjectEventEmitter',
    methods: {
        emitEvent() {
            this.$emit('customEvent', {
                name: 'Johny',
                password: 'johny123!@w'
            })
        }
    },
};
</script>

<style lang="scss" scoped>

</style>