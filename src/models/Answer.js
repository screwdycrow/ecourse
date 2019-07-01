export default class Answer{
  constructor(options){
    this.answerID = options.answer;
    this.questionID = options.questionID;
    this.userID = options.userID;
    this.unitID  = options.unitID;
    this.isCorrect = options.isCorrect;
    this.score = options.score;
    this.isRevision = options.isRevision;
    this.chapterID = options.chapterID;
  }
}
