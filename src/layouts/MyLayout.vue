<template>
    <q-layout view="lHh Lpr lFf">
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
            </q-toolbar>
        </q-header>

        <q-drawer
                v-model="leftDrawerOpen"
                bordered
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
            </q-list>
            <Units></Units>
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
