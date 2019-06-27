export default class Answer{
  get questionID() {
    return this._questionID;
  }
  get userID() {
    return this._userID;
  }

  set userID(value) {
    this._userID = value;
  }

  get unitID() {
    return this._unitID;
  }

  set unitID(value) {
    this._unitID = value;
  }

  get isCorrect() {
    return this._isCorrect;
  }

  set isCorrect(value) {
    this._isCorrect = value;
  }

  get score() {
    return this._score;
  }

  set score(value) {
    this._score = value;
  }

  get isRevision() {
    return this._isRevision;
  }

  set isRevision(value) {
    this._isRevision = value;
  }

  constructor(options){
    this._questionID = options.questionID || null;
    this._userID = options.userID || null;
    this._unitID  = options.unitID || null;
    this._isCorrect = options.isCorrect || null;
    this._score = options.score || null;
    this._isRevision = options.isRevision || null;
  }
}
