<template>
  <q-list>
    <q-item-label  header> Units </q-item-label>
    <q-item clickable tag="a" v-for="unit in store.state.units" :key="unit.unitID"  :to="'/unit/'+unit.unitID">
      <q-item-section avatar>
        <q-icon name="school" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{unit.title}}</q-item-label>
        <q-item-label caption>quasar.dev</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
    import store from "../assets/store";

    export default {
        name: "Units",
        data:()=>({
          store: store
        }),
      created(){

      },
      methods:{

      }
    }
</script>

<style scoped>

</style>
