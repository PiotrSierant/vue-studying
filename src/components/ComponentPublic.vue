<template>
    <div>
        <div class="input-group margin-bottom">
                <span class="input-group-addon">Public information</span>
                <input type="text" class="form-control" placeholder="Public information" v-model="publicInfo" />
            </div>
    </div>
</template>

<script>
export default {
    name: 'ComponentPublic',

    data() {
        return {
            publicInfo: '',
        };
    },
};
</script>

<style lang="scss" scoped>

</style>