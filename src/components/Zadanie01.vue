<template>
    <b-container>
        <h2>Lazy Loading</h2>
        <div class="image-wrapper"
            v-lazyLoad="'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'">
            <div class="d-flex justify-content-center mb-3">
                <b-spinner></b-spinner>
            </div>
        </div>
    </b-container>
</template>

<script>
export default {
    name: 'ProjectZadanie01',
    directives: {
        LazyLoad(element, binding) {
            const img = new Image();
            img.src = binding.value;


            img.onload = () => {
                element.removeChild(element.children[0]);
                element.append(img);
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>