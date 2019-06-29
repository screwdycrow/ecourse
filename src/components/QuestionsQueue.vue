<template>
        <div class="q-pa-md">
            <q-stepper
                    v-model="step"
                    vertical
                    color="primary"
                    animated
            >
                <q-step
                        v-for="question in questions"
                        :name="1"
                        :title="question.title"
                        icon="settings"
                        :done="step >  1"
                >
                    <q-card>
                        <q-card-section>
                            <q-radio v-model="selectedAnswer" val="1" :label="currentQuestion.option1"/>
                            <q-radio v-model="selectedAnswer" val="2" :label="currentQuestion.option2"/>
                            <q-radio v-model="selectedAnswer" val="3" :label="currentQuestion.option3"/>
                            <q-radio v-model="selectedAnswer" val="4" :label="currentQuestion.option4"/>
                        </q-card-section>
                    </q-card>

                    <q-stepper-navigation>

                        <div v-if="evalueated">
                            You are: {{ this.currentQuestion.correctAnswer === this.selectedAnswer?"Correct":"False"}}
                            Correct Answer: {{this.currentQuestion.correctAnswer}}
                            <q-btn @click="nextQuestion()" color="primary" label="Continue"/>
                        </div>

                        <q-btn v-if="!evalueated" @click="evaluateAnswer()" color="primary" label="Evaluate"/>

                    </q-stepper-navigation>
                </q-step>
            </q-stepper>
        </div>
</template>

<script>
    import Answer from "../models/Answer";
    import store from "../assets/store";

    export default {
        name: "QuestionsQueue",
        data: () => ({
            length: 0,
            step: 0,
            selectedAnswer: null,
            evalueated: false,
            answer: {},
            currentQuestion: null,
            score: 0,
            givenAnswers: [],
            store: store,
            scorePerAnswer: 1
        }),
        props: {
            isRevision: Boolean,
            unitId:Number,
            questions:Array,
        },
        created() {
            this.length = this.questions.length;
            this.currentQuestion = this.questions[0];


        },
        methods: {
            makeAnswer(isCorrect, score) {
                this.answer = new Answer({
                    questionID: this.currentQuestion.questionID,
                    userID: this.store.state.activeUser.userObject.userID,
                    isRevision: this.isRevision,
                    chapterID: this.currentQuestion.chapterID,
                    unitID: this.unitId === undefined ? null : this.unitId,
                    isCorrect: isCorrect,
                    score: score,
                })
            },
            evaluateAnswer() {
                this.evalueated = true;
                if (this.currentQuestion.correctAnswer === this.selectedAnswer) {
                    this.givenAnswers.push(this.makeAnswer(true, this.scorePerAnswer))
                } else {
                    this.givenAnswers.push(this.makeAnswer(true, 0))
                }

                this.score = this.scorePerAnswer++
            },
            nextQuestion() {
                this.evalueated = false;
                if (this.step < this.length) {
                    this.step++;
                    this.currentQuestion = this.questions[this.step]
                } else {
                    this.finishTest();
                }

            },
            finishTest() {
                this.$emit('endOfTest', this.givenAnswers)
            }
        }
    }
</script>

<style scoped>

</style>