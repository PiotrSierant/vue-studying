<template>
  <div id="app">
    <ComponentTheAddPanelChamp 
      @add="add"
      :names="namesList"
      />
    <ComponentChampPanel 
      v-for="champion in champions" 
      :key="champion.name"
      :name="champion.name"
      :nick="champion.nick"
      :hp="champion.hp"
      :mana="champion.mana"
      @remove="remove"
      />
  </div>
</template>

<script>
import ComponentTheAddPanelChamp from './components/ComponentTheAddPanelChamp.vue';
import ComponentChampPanel from './components/ComponentChampPanel.vue';
export default {
    name: "App",
    components: { 
      ComponentTheAddPanelChamp,
      ComponentChampPanel,
    },
    data: () => ({
      champions: [{
        name: 'Me', 
        nick: 'haha',
        hp: 100,
        mana: 100,
      },
      {
        name: 'elo', 
        nick: 'haha',
        hp: 100,
        mana: 100,
      },
      ]
    }),
    methods: {
      remove(name) {
          const index= this.champions.findIndex(v => v.name === name);
          this.champions.splice(index, 1);
      },
      add(value){
        this.champions.push(value)
      }
    },
    computed: {
      namesList() {
        return this.champions.map(element => element.name)
      }
    }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
