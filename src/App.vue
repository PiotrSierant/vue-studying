<template>
  <div>
    <header>    
      <h1>Animated nav-tabs</h1>
      <ul class="nav nav-tabs">
          <li :class="{ active: cmp === 'ComponentHome'}" @click="cmp = 'ComponentHome'"><a href="#">Home</a></li>
          <li :class="{ active: cmp === 'ComponentSecret'}" @click="cmp = 'ComponentSecret'"><a href="#">Secret</a></li>
          <li :class="{ active: cmp === 'ComponentPublic'}" @click="cmp = 'ComponentPublic'"><a href="#">Public</a></li>
      </ul>
      <transition name="slide" mode="out-in">
        <KeepAlive include="ComponentPublic">
          <component :is="cmp" />
        </KeepAlive>
      </transition>
       <!-- <ComponentAnimation />
       <ComponentAnimation2 />
       <ComponentAnimation3 />
       <ComponentAnimation4 /> -->
    </header>
  </div>
</template>

<script>
// import ComponentAnimation from './components/ComponentAnimation.vue';
// import ComponentAnimation2 from './components/ComponentAnimation2.vue';
// import ComponentAnimation3 from './components/ComponentAnimation3.vue';
// import ComponentAnimation4 from './components/ComponentAnimation4.vue';
import ComponentHome from './components/ComponentHome.vue';
import ComponentSecret from './components/ComponentSecret.vue';
import ComponentPublic from './components/ComponentPublic.vue';

export default {
    name: "App",
    components: {
    //   ComponentAnimation,
    //   ComponentAnimation2,
    //   ComponentAnimation3,
    //   ComponentAnimation4,
         ComponentHome,
         ComponentSecret,
         ComponentPublic,
    },
    data: () => ({
      cmp: 'ComponentHome',
    })
}
</script>

<style>
html {
  overflow: hidden;
}
body {
  margin: 0;
  padding: 0;
}
header, section {
  padding: 1rem;
  width: 100%;
}
.btn {
  padding: 1rem 2rem;
}
.slide-enter-active, .slide-leave-active {
        transition: .5s;
    }
    .slice-enter, .slide-leave-to {
        transition: .5s;
        transform: translateX(100%);
    }
    .slide-move {
        transition: transform 1s;
    }
    .slide-leave-active {
        position: absolute;
        width: 100%;
    }
</style>
