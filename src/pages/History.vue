<template>
    <div class="col xl">
            <q-list>
                <q-item  v-for="test in store.state.activeUser.tests">
                    <q-item-section>
                        {{test.date}}
                    </q-item-section>
                    <q-item-section v-if="test.chapterID">
                        {{ store.getChapter(test.chapterID).title}}
                    </q-item-section>
                    <q-item-section v-if="test.unitID !== null ">
                        Unit {{ test.unitID }}
                    </q-item-section>
                    <q-item-section>
                        <div v-if="test.chapterID">
                            {{test.score}}/{{store.getChapterQuestions(test.chapterID).length}}
                        </div>
                        <div v-if="test.unitID!== null ">
                            {{test.score}}
                        </div>
                    </q-item-section>
                </q-item>
            </q-list>


    </div>
    
</template>

<script>
    import store from "../assets/store";

    export default {
        name: "History",
        data:()=>({
        store:store
    })
    }
</script>

<style scoped>

</style>