<template>
    <section>
        <h3>Edit data:</h3>
        <router-link :to="{ name: 'contact-name', params: { naem: $route.params.name}}" tag="button" class="btn btn-danger">Back</router-link>
    </section>
</template>

<script>
export default {
    name: 'ComponentContactEdit',
    props: {
        name: {
            type: String,
            default() {
                return ''
            }
        }
    },
    beforeRouteLeave(to, from, next) {
        if(confirm('Do you want exit?')){
            next()
        }
        next(false)
    }
};
</script>

<style scoped>
    .panel {
        margin-top: 1rem;
        width: 100%;
    }
    .btn {
        padding: 1rem 2rem;
    }
</style>