<template>
    <div>
        <div class="input-group margin-bottom">
                <span class="input-group-addon">Hidden secret information</span>
                <input type="text" class="form-control" placeholder="****" v-model="secret" />
            </div>
    </div>
</template>

<script>
export default {
    name: 'ComponentSecret',

    data() {
        return {
            secret: '',
        };
    },
};
</script>

<style lang="scss" scoped>

</style>