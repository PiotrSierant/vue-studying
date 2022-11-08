<template>
    <nav>
        <ul class="nav nav-pills ">
            <router-link to="/" active-class="active" exact role="presentation" tag="li"><a>Home</a></router-link>
            <router-link to="/about" active-class="active" role="presentation" tag="li"><a>About</a></router-link>
            <router-link to="/contact/Piotr" active-class="active" role="presentation" tag="li"><a>Contact</a></router-link>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'ComponentNavigation',
}
</script>
<style scoped>
nav {
    border: none;
    width: 100%;
    box-shadow: 0 0 10px 1px black;
    padding: 2rem;
    border-bottom: .3rem solid darkgray;
    display: flex;
    justify-content: center;
    align-items: center;
}
ul {
    max-width: 1366px;
    width: 100%;
}
</style>