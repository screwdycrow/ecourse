<template>
  <q-layout view="lHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu"/>
        </q-btn>

        <q-toolbar-title>
          Sharpdemy
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
        <q-btn
          flat
          dense
          round
          @click="rightDrawerOpen = !rightDrawerOpen"
          aria-label="Menu"
          :breakpoint="1600"
        >
          <q-icon name="menu"/>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      side="left"
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header> Links</q-item-label>
        <q-item clickable to="/" tag="a">
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>
            <q-item-label> Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/tests" tag="a">
          <q-item-section avatar>
            <q-icon name="file"/>
          </q-item-section>
          <q-item-section>
            <q-item-label> Tests </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <Units></Units>
    </q-drawer>

    <q-drawer
      side="right"
      v-model="rightDrawerOpen"
      bordered
      :width="500"
      content-class="bg-grey-2"

    >
      <iframe style="position: fixed" width="100%" height="100%" src="https://dotnetfiddle.net/Widget/CsCons"
              frameborder="0"></iframe>

    </q-drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>


<script>
  import {openURL} from 'quasar'
  import store from '../assets/store'
  import Units from "../components/Units";


  export default {
    name: 'MyLayout',
    data() {
      return {
        leftDrawerOpen: this.$q.platform.is.desktop,
        rightDrawerOpen: this.$q.platform.is.desktop,
        store: {},
        selectedUnit: null
      }
    },
    components: {Units},
    created() {
      this.store = store;
      store.initializeDataTest();
    },
    methods: {
      openURL
    }
  }
</script>

<style>
</style>
