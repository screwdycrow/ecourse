import testData from "./testData";
import User from "../models/User";
import Answer from "../models/Answer";
import Unit from "../models/Unit";
import Chapter from "../models/Chapter";
import Question from "../models/Question";

export default {
    state: {
        chapters: [],
        units: [],
        users: [],
        questions: [],
        questionsDictionary: {},
        tests: [],
        isloggedIn: false,
        activeUser: {
            userObject: {},
            answers: [],
            tests:[],
            chapterScores: {},
            revisionScores: {},
        },
    },
    tryLogin(username, password) {
        if (username === mhtsos && password === 123456) this.isloggedIn = true;
    },
    getChapter(id) {
        let index = this.state.chapters.findIndex(chapter => chapter.chapterID === Number(id));
        console.log(index);
        return this.state.chapters[index];
    },
    initializeDataTest() {
        if(!localStorage.getItem('activeUser')){
            this.setActiveUser(testData.getUsers()[0], []);
        } else{
            this.state.activeUser = JSON.parse(localStorage.getItem('activeUser'))
        }
        this.setUnits(testData.getUnits());
        this.setChapters(testData.getChapters());
        this.setQuestions(testData.getQuestions());
    },

    resetUnitAnswers(unitID) {
        let answers = this.state.activeUser.answers.filter(a => a.unitID !== unitID);
        this.state.activeUser.answers = answers;
        localStorage.setItem('activeUser', JSON.stringify(this.state.activeUser))
    },
    setQuestions(questions) {
        this.state.questions = questions.map(q => {
                let question = new Question(q);
                this.state.questionsDictionary[q.questionID] = {};
                this.state.questionsDictionary[q.questionID] = q;
                return q;
            }
        )
    },
    getChapterQuestions(id) {
        return this.state.questions.filter(q => q.chapterID === id)

    },
    setChapters(chapters) {
        this.state.chapters = chapters.map(chapter => new Chapter(chapter))
        this.calculateChaptersScores();
    },

    setUnits(units) {
        this.state.units = units.map(unit => new Unit(unit))
    },
    /**
     *
     * @param user
     * @param answers
     */
    setActiveUser(user, answers) {

        this.state.activeUser.userObject = new User(user);
        this.state.activeUser.answers = answers.map(answer => new Answer(answer));
        let chapterscores = this.calculateChaptersScores();
        let revisionscores = this.calculateRevisionsScores();

    },


    calculateRevisionScores(unitID) {
        const answers = this.state.activeUser.answers
            .filter((answer) => answer.unitID === unitID && answer.isRevision);
        return {score: this.sumScore(answers), count: answers.length};
    },

    calculateRevisionsScores() {
        const scores = {};
        this.state.units.forEach((unit) => {
            const results = this.calculateRevisionScores(unit.unitID);
            scores[unit.unitID] = {};
            scores[unit.unitID] = {
                unitID: unit.unitID,
                score: results.score,
                count: results.count,
            };
            this.setRevisionScores(scores)
        });
    },
    canTakeRevision(unitID) {
        return this.state.activeUser.answers.filter((c) => c.unitID === unitID).length >= 10;
    },
    /**
     *
     * @param scores
     * @returns {{}}
     */
    setRevisionScores(scores) {
        this.state.activeUser.revisionScores = scores
    },
    /**
     *
     * @param scores
     */
    setChapterScores(scores) {
        this.state.activeUser.chapterScores = scores;
    },
    canTakeUnit(unitID) {
    },

    /**
     * @description calculates the score from an array of answers.
     * @param answers
     * @return {*}
     */
    calculateAnswersScore(answers) {
        return answers.reduce((a, b) => a.score + b.score, 0);
    },
    /**
     *
     * @param chapterID
     * @return {{score: *, count: number}}
     */
    calculateChapterScore(chapterID) {
        const answers = this.state.activeUser.answers
            .filter((answer) => answer.chapterID === chapterID && !answer.isRevision);
        return {score: this.sumScore(answers), count: answers.length};
    },

    sumScore(answers) {
        let sum = 0;
        answers.forEach(a => {
            sum += a.score;
        });
        return sum
    },
    addAnswers(answers, test) {
        this.state.activeUser.answers = this.state.activeUser.answers.concat(answers);
        this.state.activeUser.tests.push(test);
        localStorage.setItem('activeUser', JSON.stringify(this.state.activeUser))
    },

    /**
     *
     * @return {Array}
     */
    calculateChaptersScores() {
        const scores = {};
        this.state.chapters.forEach((chapter) => {
            const results = this.calculateChapterScore(chapter.chapterID);
            scores[chapter.chapterID] = {};
            scores[chapter.chapterID] = {
                chapterID: chapter.chapterID,
                score: results.score,
                count: results.count,
            };
            this.setChapterScores(scores);
        });
    },
    getUnitChapters(unitID) {
        this.state.chapters
            .filter((chapter) =>
                chapter.unitID === unitID);
    },
    /**
     *
     * @param unitID
     * @param questionNumber
     * @return {Array}
     */
    makeRevision(unitID, questionNumber,) {
        const chapters = this.state.chapters
            .filter((chapter) =>
                chapter.unitID === unitID
                && this.state.activeUser.chapterScores[chapter.unitID]);

        const answersFalse = this.state.activeUser.answers
            .filter((answer) => !answer.isCorrect && answer.unitID === unitID);
        const answersCorrect = this.state.activeUser.answers
            .filter((answer) => answer.isCorrect && answer.unitID === unitID);
        const difference = questionNumber - answersFalse.length;
        const falseNumber = difference < 0 ? 0 : difference;
        const correctNumber = questionNumber - falseNumber;
        console.log(correctNumber);
        console.log(falseNumber);
        let picked = [];
        let pickedQuestions = [];
        // pick from false answers pool

        for (let i = 0; i < falseNumber; i++) {

            const index = Math.floor(Math.random() * Math.floor(answersFalse.length));
            pickedQuestions.push(this.state.questionsDictionary[answersFalse[index].questionID]);


        }
        picked = [];
        // pick from correct answers pool
        for (let i = 0; i < correctNumber; i++) {
            const index = Math.floor(Math.random() * Math.floor(answersCorrect.length));
            pickedQuestions.push(this.state.questionsDictionary[answersCorrect[index].questionID]);


        }
        console.log(pickedQuestions);
        return pickedQuestions;
    },
};
