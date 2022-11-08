<template>
    <div class="panel panel-primary">
        <div class="panel-heading">Panel {{name}}</div>
        <div class="panel-body">Description</div>
        <router-link 
            :to="`/contact/${$route.params.name}/edit`" 
            tag="button" 
            class="btn btn-success">Edit data</router-link>
    </div>
</template>

<script>
export default {
    name: 'ComponentContactDetails',
    props: {
        name: {
            type: String,
            default() {
                return ''
            }
        }
    }
};
</script>

<style scoped>
    .panel {
        margin-top: 1rem;
        width: 100%;
    }
    .btn {
        margin-left: 1rem;
        margin-bottom: 1rem;
    }
</style>