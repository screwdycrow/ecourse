import testData from "./testData";
import User from "../models/User";
import Answer from "../models/Answer";
import Unit from "../models/Unit";
import Chapter from "../models/Chapter";

export default {
  state: {
    chapters: [],
    units: [],
    users: [],
    questions: [],
    questionsDictionary: {},
    activeUser: {
      userObject: {},
      answers: [],
      chapterScores: {},
      revisionScores: {},
    },
  },

  getChapter(id){
    let index = this.state.chapters.findIndex(chapter => chapter.chapterID === Number(id));
    console.log(index);
    return this.state.chapters[index];
  },
  initializeDataTest() {
    console.log("HI");
    this.setActiveUser(testData.getUsers()[0], []);
    this.setUnits(testData.getUnits());
    this.setChapters(testData.getChapters());
  },


  setChapters(chapters) {
    this.state.chapters =chapters.map(chapter => new Chapter(chapter))
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
    this.state.activeUser.user = new User(user);
    this.state.activeUser.answers = answers.map(answer => new Answer(answer));
    let chapterScores = this.calculateChaptersScores();
    let revisionScores = {};
    this.setChapterScores(chapterScores);
    this.setRevisionScores(revisionScores)
  },

  /**
   *
   * @param scores
   * @returns {{}}
   */
  setRevisionScores(scores) {
    return {}
  },
  /**
   *
   * @param scores
   */
  setChapterScores(scores) {
    this.state.activeUser.chapterScores = scores;
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
  calculateChapterScore(chapterID,) {
    const answers = this.state.activeUser.answers
      .filter((answer) => answer.chapterID === chapterID);

    return {score: answers.reduce((a, b) => a.score + b.score, 0), count: answers.length};
  },

  /**
   *
   * @return {Array}
   */
  calculateChaptersScores() {
    return this.state.chapters;
    const scores = {}
      .foreach((chapter) => {
        const results = this.calculateChapterScore(chapter.chapterID);
        scores[chapter.chapterID] = {};
        scores[chapter.chapterID] = {
          chapterID: chapter.chapte1rID,
          score: results.score,
          count: results.count,
        };
        this.setChapterScores(scores);
      });
  },
  getUnitChapters() {
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
        && this.state.activeUser.chapterScores[chapter.unitID]
        > 0);
    const answersFalse = this.state.answers
      .filter((answer) => answer.isCorrect === false);
    const answersCorrect = this.state.answers
      .filter((answer) => answer.isCorrect === true);
    const difference = questionNumber - answersFalse.length;
    const falseNumber = difference < 0 ? 0 : difference;
    const correctNumber = questionNumber - falseNumber;
    const pickedQuestions = [];
    // pick from false answers pool
    for (let i = 0; i++; i <= falseNumber) {
      let flag = false;
      while (!flag) {
        const index = Math.floor(Math.random() * Math.floor(answersFalse.length));
        if (!pickedQuestions.includes(answersFalse[index].questionID)) {
          pickedQuestions.push(answersFalse[index].questionID);
          flag = true;
        }
      }
    }
    // pick from correct answers pool
    for (let i = 0; i++; i <= correctNumber) {
      let flag = false;
      while (!flag) {
        const index = Math.floor(Math.random() * Math.floor(answersCorrect.length));
        if (!pickedQuestions.includes(answersCorrect[index].questionID)) {
          pickedQuestions.push(answersCorrect[index].questionID);
          flag = true;
        }
      }
    }
    return pickedQuestions;
  },
};
