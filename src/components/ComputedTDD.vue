<template>
    <div>

    </div>
</template>

<script>
export default {
    name: 'ProjectComputedTDD',

    data() {
        return {

        };
    },
    props: {
        odd: {
            type: Boolean,
            required: true,
        }
    },
    computed: {
        nums() {
            const odds = [];
            const evens = [];

            for (let i = 1; i < 10; i++) {
                if (i % 2 !== 0) {
                    odds.push(i)
                } else {
                    evens.push(i)
                }
            }
            return this.odd ? odds.join(', ') : evens.join(', ');
        }
    }
};
</script>

<style lang="scss" scoped>

</style>