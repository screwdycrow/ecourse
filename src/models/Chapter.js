import Settings from '../assets/settings'

export default class Chapter{
  get video() {
    return this._video;
  }

  set video(value) {
    this._video = value;
  }
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

  get content() {
    return this._content;
  }

  set content(value) {
    this._content = value;
  }

  constructor(options){

    this._title = options.title;
    this._unitID = options.unitID ;
    this._chapterID = options.chapterID;
    this._content = options.content;
    this._video = options.video;
    this._answers = options.answers;
    this._questions = options.questions;

  }

}
