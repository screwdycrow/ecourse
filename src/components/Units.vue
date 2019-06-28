<template>
    <q-list padding class="menu-list">
        <q-item-label header> Units</q-item-label>

        <q-expansion-item
                group="units"
                v-for="unit in store.state.units"
                :key="unit.unitID"
                expand-separator
                icon="school"
                :label="unit.title"

        >
            <q-card class="q-pa-lg">
                <q-card-section>
                    <q-list  class="menu-list" v-for="chapter in unit.chapters">
                        <q-item clickable v-ripple header-intend
                                :to="'/chapter/'+chapter.chapterID">
                            <q-item-section> {{ chapter.title}} </q-item-section>
                        </q-item>
                    </q-list>
                </q-card-section>
            </q-card>
        </q-expansion-item>
    </q-list>
</template>

<script>
    import store from "../assets/store";

    export default {
        name: "Units",
        data: () => ({
            store: store,
            selectedUnit: null
        }),
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>
