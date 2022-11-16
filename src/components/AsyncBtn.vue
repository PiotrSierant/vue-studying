<template>
    <div>
        <button @click="getData">Wczytaj dane</button>
        <span>{{ bestPlayer }}</span>
    </div>
</template>

<script>
export default {
    name: 'ProjectAsyncBtn',

    data() {
        return {
            bestPlayer: null
        };
    },

    methods: {
        async getData() {
            let { data } = await this.$http.get('http://api.icndb.com/jokes/random');
            this.bestPlayer = data.player
        }
    },
};
</script>

<style lang="scss" scoped>

</style>