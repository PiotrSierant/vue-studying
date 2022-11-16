<template>
    <div>
        <button v-for="club in clubs" :data-club="club" :key="club" @click="pickClub(club)">{{ club }}</button>
    </div>
</template>

<script>
export default {
    name: 'ProjectPremierLeagueClubs',

    data() {
        return {
            clubs: [
                'Chelsea',
                'Arsenal',
                'Tottenham',
                'Liverpool'
            ]
        };
    },
    props: {
        pickClub: {
            type: Function,
        }
    },
};
</script>

<style lang="scss" scoped>

</style>