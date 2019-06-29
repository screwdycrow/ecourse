export default class Question {
  get correctAnswer() {
    return this._correctAnswer;
  }

  set correctAnswer(value) {
    this._correctAnswer = value;
  }
  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get option1() {
    return this._option1;
  }

  set option1(value) {
    this._option1 = value;
  }

  get option2() {
    return this._option2;
  }

  set option2(value) {
    this._option2 = value;
  }

  get option3() {
    return this._option3;
  }

  set option3(value) {
    this._option3 = value;
  }

  get option4() {
    return this._option4;
  }

  set option4(value) {
    this._option4 = value;
  }

  get chapterID() {
    return this._chapterID;
  }

  set chapterID(value) {
    this._chapterID = value;
  }

  constructor(options) {
    this._title = options.title || null;
    this._description = options.description || null;
    this._option1 = options.option1 || null;
    this._option2 = options.option2 || null;
    this._option3 = options.option3 || null;
    this._option4 = options.option4 || null;
    this._correctAnswer = options.correctAnswer || null;
    this._chapterID = options.chapterID;


  }
}
