<template>
    <div>
        <header>
            <button 
                @click="animation = !animation" 
                class="btn"
                :class="[animation ? 'btn-secondary' : 'btn-dark']"
                >
                Check animation
            </button>
        </header>
        <section class="border">
            <Transition name="uniq-name" type="transition">
                <h3 class="alert alert-secondary animate__animated animate__slideInDown" v-if="animation" key="1">Jestem super user!</h3>
                <h3 class="alert alert-dark animate__animated animate__slideInDown" v-else key="2">Umiem fajnie animować!</h3>
            </Transition>
        </section>    
    </div>
        
</template>

<script>
export default {
    name: 'ComponentAnimation3',
    data() {
        return ({
          animation: false,  
        });
    },
};
</script>
<style scoped>
.border {
  border-bottom: .1rem dashed darkgray;
  border-top: 1px dashed darkgray;
  margin-bottom: 1rem;
}
.btn-secondary, .alert-secondary {
    color: #818182;
    background-color: #e2e3e5;
    border-color: #d6d8db;
}
.btn-dark, .alert-dark {
    color: #1b1e21;
    background-color: #d6d8d9;
    border-color: #c6c8ca;
}
</style>