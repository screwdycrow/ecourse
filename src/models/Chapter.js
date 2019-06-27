import Settings from '../assets/settings'

export default class Chapter{
  get answers() {
    return this._answers;
  }

  set answers(value) {
    this._answers = value;
  }
  get questions() {
    return this._questions;
  }

  set questions(value) {
    this._questions = value;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get unitID() {
    return this._unitID;
  }

  set unitID(value) {
    this._unitID = value;
  }

  get chapterID() {
    return this._chapterID;
  }

  set chapterID(value) {
    this._chapterID = value;
  }

  get chapterFormat() {
    return Settings[this._chapterFormat];
  }

  set chapterFormat(value) {
    this._chapterFormat = value;
  }

  get content() {
    return this._content;
  }

  set content(value) {
    this._content = value;
  }

  constructor(options){

    this._title = options.title || null;
    this._unitID = options._unitID || null;
    this._chapterID = options._chapterID || null;
    this._chapterFormat = options._chapterFormat || null;
    this._content = options.content || null;
    this._answers = options.answers || null;
    this._questions = options.questions || null;

  }

}
