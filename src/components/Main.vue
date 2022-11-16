<template>
    <div>
        <HelloWorld />
        <UsersList />
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import UsersList from '@/components/UsersList.vue';

export default {
    name: 'ProjectMain',
    components: {
        HelloWorld,
        UsersList,
    }
};
</script>

<style lang="scss" scoped>

</style>