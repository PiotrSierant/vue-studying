<template>
    <div class="author">
        <h1>This is a contact page</h1>
        <button class="btn btn-danger" @click="backToHome">Go Home!</button>
        <button class="btn btn-primary" @click="redirect('Piotr')">Piotr</button>
        <button class="btn btn-primary" @click="redirect('Janek')">Janek</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'ContactView',
    methods: {
        backToHome() {
            // this.$router.push('/');
            this.$router.push({ name: 'home'});
        },
        redirect(name) {
            this.$router.push(`/contact/${name}`)
        }
    }
}
</script>
<style scoped>
    .btn {
        padding: 1rem 2rem;
        margin-right: 1rem;
    }
    .author {
        width: 100%;
        max-width: 1366px;
    }
</style>