<template>
    <div>
        <header>
            <button 
                @click="animation = !animation" 
                class="btn"
                :class="[animation ? 'btn-primary' : 'btn-warning']"
                >
                Check animation
            </button>
        </header>
        <section class="border">
            <Transition name="fade-bounce" mode="out-in">
                <h3 class="alert alert-info" v-if="animation" key="1">Jestem super user!</h3>
                <h3 class="alert alert-warning" v-else key="2">Umiem fajnie animować!</h3>
            </Transition>
        </section>    
    </div>
        
</template>

<script>
export default {
    name: 'ComponentAnimation2',
    data() {
        return ({
          animation: false,  
        });
    },
};
</script>
<style scoped>
.border {
  border-bottom: .1rem dashed green;
  border-top: 1px dashed green;
  margin-bottom: 1rem;
}
.fade-bounce-enter, .fade-bounce-leave-to {
    opacity: 0;
}
.fade-bounce-enter-active {
    animation: bounce .5s reverse;
    transition: opacity .5s;
}
.fade-bounce-leave-active {
    animation: bounce .5s ;
    transition: opacity .5s;
}

@keyframes bounce {
    0% {
        transform: scale(1);
    }
    
    100% {
        transform: scale(.95);
    }
}
</style>