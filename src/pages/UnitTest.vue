<template>
    <questions-queue
            :questions="questions"
            :unit-id="unitID"
            :is-revision="true"
            @endOfTest="endOfTest"
    >
    </questions-queue>
</template>

<script>
    import QuestionsQueue from "../components/QuestionsQueue";
    import store from "../assets/store";
    import Test from "../models/Test";

    export default {
        name: "UnitTest",
        data: () => ({
            store: store,
            questions: [],
            unitID: null,
        }),

        components: {
            QuestionsQueue
        },
        methods: {
            endOfTest(answers, score) {
                console.log(answers);
                let test = new Test({
                    chapterID: null,
                    unitID: this.unitID,
                    score: score,
                    date: new Date().toISOString().slice(0, 19).replace('T', ' ')
                });

                this.store.addAnswers(answers, test)
            },
        },
        created() {
            this.unitID = this.$route.params.unitID;
            this.questions = store.makeRevision(this.unitID, 10 );
        }
    }
</script>

<style scoped>

</style>