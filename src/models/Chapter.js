import Settings from '../assets/settings'

export default class Chapter{

  constructor(options){

    this.title = options.title;
    this.unitID = options.unitID ;
    this.chapterID = options.chapterID;
    this.content = options.content;
    this.video = options.video;
    this.answers = options.answers;
    this.questions = options.questions;

  }

}
