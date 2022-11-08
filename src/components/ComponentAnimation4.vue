<template>
    <div>
        <header>
            <h1>Animation list, transition group</h1>
            <button class="btn btn-primary">Check animation</button>
        </header>
        <input 
            class="form-control" 
            type="text" 
            v-model="newName" 
            @keyup.enter="add()"
        />
        <transition-group class="list-group" tag="ul" name="slide">
            <li 
                class="list-group-item"
                @click="names.splice(index, 1)" 
                v-for="(name, index) in names"
                :key="name">
                {{name}}
            </li>
        </transition-group>
        
    </div>
</template>

<script>
export default {
    name: 'ComponentAnimation4',

    data() {
        return {
           names: ['Piotr', 'Maciej', 'Paweł', 'Karol'],
           newName: '',
        };
    },
    methods: {
        add() {
            if(this.newName.trim() === '' || this.names.find(element => element.toLowerCase() === this.newName.trim().toLowerCase())){
                return
            }
            this.names.splice(0, 0, this.newName.trim())
            this.newName = ''
        }
    }
};
</script>

<style>
    .slide-enter-active, .slide-leave-active {
        transition: .5s;
    }
    .slice-enter, .slide-leave-to {
        transition: .5s;
        transform: translateX(1rem);
    }
    .slide-move {
        transition: transform 1s;
    }
    .slide-leave-active {
        position: absolute;
        width: 100%;
    }
</style>