<template>
    <questions-queue
            :questions="questions"
            :unit-id="unitID"
            :is-revision="false"
    >
    </questions-queue>
</template>

<script>
    import QuestionsQueue from "../components/QuestionsQueue";
    import store from "../assets/store";

    export default {
        name: "Test",
        data:()=>({
            store:store,
            questions:[],
            unitID: null,
            chapterID:null
        }),

        components:{
          QuestionsQueue
        },
        created() {
            this.unitID = this.$route.params.unitID;
            this.chapterID = this.$route.params.chapterID;
            this.questions =  store.getChapterQuestions(this.chapterID);

        }
    }
</script>

<style scoped>

</style>