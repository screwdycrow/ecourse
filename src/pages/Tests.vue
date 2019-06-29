<template>
    <div class="q-pa-lg">
        <h4> Available Tests for Chapters : </h4>
        <div class="q-pa-md row items-start content-stretch q-gutter-md">
            <q-card  style="width: 350px; " class="my-card" v-for="unit in store.state.units" :key="unit.unitId">
                <q-card-section class=" ">
                    <div class="text-h6">{{unit.title}}</div>
                </q-card-section>
                <q-list>
                    <q-item v-for="chapter in unit.chapters">
                        <q-list-avatar class="q-pa-sm">
                           <q-knob v-model="store.state.activeUser.chapterScores[unit.unitId]"
                                   readonly
                                   show-value
                           >
                               {{store.state.activeUser.chapterScores[unit.unitId]}} %
                           </q-knob>
                        </q-list-avatar>
                        <q-item-section>
                            {{chapter.title}}
                        </q-item-section>
                        <q-list-avatar>
                            <q-btn @click="$router.push({name:'chapterTest', params:{chapterID:chapter.chapterID, unitID:chapter.unitID}})"> take</q-btn>
                        </q-list-avatar>
                    </q-item>
                </q-list>
                <q-separator/>
                <q-card-actions>
                    <q-btn flat>Take the unit test</q-btn>
                </q-card-actions>
            </q-card>
        </div>
    </div>

</template>

<script>
    import store from "../assets/store";

    export default {
        name: "Tests",
        data: () => ({
            store: store,
            value: 50
        }),
        created() {
            store.calculateChaptersScores();
        }

    }
</script>

<style scoped>

</style>
