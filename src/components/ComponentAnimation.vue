<template>
    <div>
        <header>
        <h1>Animation, transition</h1>
        <button @click="display = !display" class="btn" :class="[display ? 'btn-success':'btn-danger']">Check animation</button>
        </header>
        <section class="border">
        <transition name="fade" mode="out-in">
            <h2 v-if="display" class="alert alert-success" key="1">Witaj!</h2>
            <h2 v-else class="alert alert-danger" key="2">Cześć!</h2>
        </transition>
        </section>    
    </div>
</template>

<script>
export default {
    name: 'ComponentAnimation',
    data: () => ({
      display: false,
    }),
};
</script>

<style scoped>
.border {
  border-bottom: .1rem dashed red;
  border-top: 1px dashed red;
  margin-bottom: 1rem;
}
.fade-enter-active {
  transition: .5s;
}
.fade-leave-active {
  transition: .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>