<template>
  <div class="q-pa-lg">
    <h4> Available Tests for Units: </h4>

    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" v-for="unit in store.state.units">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">{{unit.title}}</div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat>Take the test</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>
    </div>

    <h4> Available Tests for Chapters : </h4>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" v-for="unit in store.state.units">
        <q-card-section class=" ">
          <div class="text-h6">{{unit.title}}</div>
        </q-card-section>

        <q-separator />
      </q-card>
    </div>


  </div>
    
</template>

<script>
    import store from "../assets/store";

    export default {
        name: "Tests",
        data:()=>({
          store:store
        }),
      created() {
          store.calculateChaptersScores();
      }

    }
</script>

<style scoped>

</style>
