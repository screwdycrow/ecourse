<template>
    <div class="q-pa-md row q-gutter-xl ">
        <div class="col-lg-4 col-sm-12 self-center q-pa-xl">
            <q-card>
            <q-stepper
                    v-model="step"
                    vertical
                    color="primary"
                    animated
                    flat
            >
                <q-step
                        v-for="(question,index) in questions"
                        :name="index"
                        :title="question.title"
                        icon="settings"
                        :done="step > index  "
                        :done-color="stepsStyles[index].color"
                        :done-icon="stepsStyles[index].icon"

                >

                    <strong>{{currentQuestion.description}} </strong>
                    <q-btn v-if="showChapter" flat>{{currentQuestion.chapterID}}</q-btn>

                    <q-list>
                        <q-item v-ripple tag="label">
                            <q-item-section avatar>
                                <q-radio v-model="selectedAnswer" :disable="disabled" :val="1"
                                         :label="currentQuestion.option1"/>
                            </q-item-section>
                        </q-item>
                        <q-item v-ripple tag="label">
                            <q-item-section avatar>
                                <q-radio v-model="selectedAnswer" :disable="disabled" :val="2"
                                         :label="currentQuestion.option2"/>
                            </q-item-section>
                        </q-item>
                        <q-item v-ripple tag="label">
                            <q-item-section avatar>
                                <q-radio v-model="selectedAnswer" :disable="disabled" :val="3"
                                         :label="currentQuestion.option3"/>
                            </q-item-section>
                        </q-item>
                        <q-item v-ripple tag="label">
                            <q-item-section avatar>
                                <q-radio v-model="selectedAnswer" :disable="disabled" :val="4"
                                         :label="currentQuestion.option4"/>
                            </q-item-section>
                        </q-item>
                    </q-list>
                    <q-stepper-navigation>
                        <div v-if="evalueated">
                            You are: {{ question.correctAnswer === selectedAnswer?"Correct":"False"}}
                            Correct Answer: {{question.correctAnswer}}
                            <q-btn @click="nextQuestion()" color="primary" label="Continue"/>
                        </div>
                        <q-btn v-if="!evalueated" @click="evaluateAnswer(question)" color="primary" label="Evaluate"/>
                    </q-stepper-navigation>
                </q-step>

            </q-stepper>
                <q-card-section class="bg-black text-white"> <span class="text-weight-bolder"> Your Score: {{score}} / {{questions.length}}</span> </q-card-section>
            </q-card>

        </div>

        <div v-if="done" class="col  q-pa-xl">
            <h3> Sharpdemy's evaluation:</h3>
            <q-chat-message
                    :text="[assess()]"

            />

            <q-list bordered>
                <q-expansion-item
                        v-for="c in wrongChapters" :key="c.chapterID"
                        group="somegroup"
                        :label="c.title"
                        default-opened
                        header-class="text-primary"
                >
                    <q-card>
                        <q-card-section style="max-height: 500px; overflow-y: auto;">
                            <span v-html="c.content"></span>
                        </q-card-section>
                    </q-card>
                </q-expansion-item>

            </q-list>
        </div>

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
            scorePerAnswer: 1,
            disabled: false,
            stepsStyles: {},
            wrongChapters: [],
            slide:null,
            done:false
        }),
        props: {
            isRevision: Boolean,
            unitId: Number,
            questions: Array,
            showChapter: Boolean,
        },
        created() {
            this.length = this.questions.length;
            this.currentQuestion = this.questions[0];
            this.questions.forEach((q, index) => {
                this.stepsStyles[index] = {};
                this.stepsStyles[index].color = 'grey';
                this.stepsStyles[index].icon = 'settings_back';
            })


        },
        methods: {
            makeAnswer(isCorrect, score) {
                return new Answer({
                    questionID: this.currentQuestion.questionID,
                    userID: this.store.state.activeUser.userObject.userID,
                    isRevision: this.isRevision,
                    chapterID: this.currentQuestion.chapterID,
                    unitID: this.unitId === undefined ? null : this.unitId,
                    isCorrect: isCorrect,
                    score: score,
                })
            },
            evaluateAnswer(question) {
                this.disabled = true;
                this.evalueated = true;
                if (question.correctAnswer === this.selectedAnswer) {
                    this.givenAnswers.push(this.makeAnswer(true, this.scorePerAnswer));
                    this.stepsStyles[this.step].color = 'green';
                    this.stepsStyles[this.step].icon = 'done';
                    this.score += this.scorePerAnswer;
                } else {
                    this.givenAnswers.push(this.makeAnswer(false, 0));
                    this.stepsStyles[this.step].color = 'red';
                    this.stepsStyles[this.step].icon = 'close';
                    let chapter = this.store.state.chapters.find(c => c.chapterID === question.chapterID);
                    if (this.wrongChapters.find(c => c.chapterID === question.chapterID) === undefined) {
                        this.wrongChapters.push(chapter);
                        this.slide = this.wrongChapters[0].title
                    }

                }
            },
            assess(){
                let score = this.score;
                if(score!==0){
                     let ratio = this.questions.length / score;
                    if( ratio < 2  && ratio !== 1){
                        return "Good try. It seems that you studied quite a lot. You are going to be a great developer. " +
                            "But nobody is perfect so here some material to study on the questions you got wrong"
                    }
                    if(ratio >= 2 && score !== 0){
                        return "I am sure you did your best, but you can do much better. Let me help you with some recomendations"
                    }
                    if(ratio === 1){
                        return "you are either cheating, or you are a natural talent! There is nothing to recommend you got everything right"
                    }
                }
                if(score === 0 ){
                    return "Come on you are even trying! You might want to revisit the whole course"
                }

            },
            nextQuestion() {
                this.disabled = false;
                this.evalueated = false;
                if (this.step < this.length - 1) {
                    this.step++;
                    this.currentQuestion = this.questions[this.step]
                } else {

                    this.step++;
                    this.done=true;
                    this.finishTest();
                }

            },
            finishTest() {
                this.$emit('endOfTest', this.givenAnswers, this.score)
            }
        }
    }
</script>

<style scoped>

</style>