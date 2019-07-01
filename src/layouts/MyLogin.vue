<template>
    <q-layout view="lHh LpR fFf">
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
    }
</script>

<style>
</style>
