<template>
    <div class="q-pa-lg">
        <h4> Available Tests for Chapters : </h4>
        <div class="q-pa-md row items-start content-stretch q-gutter-md">
            <q-card  style="width: 350px; " class="my-card" v-for="unit in store.state.units" :key="unit.unitId" v-if="rerender">
                <q-card-section class="">
                    <div class="text-h6">{{unit.title}}</div>
                </q-card-section>
                <q-list>
                    <q-item v-for="chapter in unit.chapters">
                        <q-item-section class="q-pa-sm" avatar>
                           <q-knob v-model="store.state.activeUser.chapterScores[chapter.chapterID].score"
                                   readonly
                                   show-value
                                   :max="store.getChapterQuestions(chapter.chapterID).length"
                                   :key="key"
                           >
                               <span :key="key">{{store.state.activeUser.chapterScores[chapter.chapterID].score}} / {{store.getChapterQuestions(chapter.chapterID).length}}</span>
                           </q-knob>
                        </q-item-section  >
                        <q-item-section>
                            {{chapter.title}}
                        </q-item-section>
                        <q-item-section avatar>
                            <q-btn  v-if="store.state.activeUser.chapterScores[chapter.chapterID].count === 0 "
                                    @click="$router.push({name:'chapterTest', params:{chapterID:chapter.chapterID, unitID:chapter.unitID}})"> take</q-btn>

                            <q-btn  v-if="store.state.activeUser.chapterScores[chapter.chapterID].count !== 0 " disabled> Already taken</q-btn>
                        </q-item-section >
                    </q-item>
                    <q-item class="bg-primary text-white">
                        <q-item-section class="q-pa-sm" avatar>
                            <q-knob
                                    v-model="store.state.activeUser.revisionScores[unit.unitID].score"
                                    readonly
                                    show-value
                                    :max="10"
                            >
                                {{store.state.activeUser.revisionScores[unit.unitID].score  }}/10
                            </q-knob>
                        </q-item-section  >
                        <q-item-section>
                            {{unit.title}}
                        </q-item-section>
                        <q-item-section avatar v-if="store.canTakeRevision(unit.unitID)">
                            <q-btn  @click="$router.push({name:'unitTest', params:{unitID:unit.unitID}})"> take</q-btn>
                        </q-item-section >
                    </q-item>
                </q-list>
                <q-card-actions>
                    <q-btn flat @click="reset(unit.unitID)"> Reset tests </q-btn>
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
            value: 50,
            key:1,
            rerender:true
        }),

        methods:{
          reset(id){
              store.resetUnitAnswers(id);
              this.key++;
              this.rerender = false;
              this.rerender = true;
          }
        },
        created() {
            store.calculateChaptersScores();
            store.calculateRevisionsScores()
        }

    }
</script>

<style scoped>

</style>
