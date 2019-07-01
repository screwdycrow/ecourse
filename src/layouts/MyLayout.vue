<template>
  <q-layout view="lHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn @click="help=true" > Help </q-btn>
        <q-dialog v-model="help">
          <q-card>
            <q-card-section>
              <div class="text-h6">Help</div>
            </q-card-section>

            <q-card-section>
            <help></help>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" @click="help=false" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
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
        <q-item clickable to="/history" tag="a">
          <q-item-section avatar>
            <q-icon name="file"/>
          </q-item-section>
          <q-item-section>
            <q-item-label> Test History </q-item-label>
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
  import Help from "../components/Help";


  export default {
    name: 'MyLayout',
    data() {
      return {
        leftDrawerOpen: this.$q.platform.is.desktop,
        rightDrawerOpen: this.$q.platform.is.desktop,
        store: {},
        selectedUnit: null,
        help:false
      }
    },
    components: {Units, Help},
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
