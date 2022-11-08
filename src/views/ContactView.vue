<template>
    <div class="author">
        <h1>Kontakt do: {{name}}</h1>
        <button class="btn btn-primary" @click="backToHome">Back</button>
    </div>
</template>

<script>
export default {
    name: 'ContactView',
    data() {
        return {
            name: this.$route.params.name
        }
    },
    methods: {
        backToHome() {
            // this.$router.push('/');
            this.$router.push({ name: 'home'});
        }
    }
}
</script>