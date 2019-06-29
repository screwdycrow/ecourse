
export default class Unit {
  get answers() {
    return this._answers;
  }

  set answers(value) {
    this._answers = value;
  }
  constructor(options) {

    this._unitID = options.unitID;
    this._title = options.title || null;
    this._description = options.description || null;
    this.chapters = options.chapters || [];
    this._answers = options.answers || [];

  }

  /**
   * @description filters an array of answers based on the unit id
   * @param answers
   * @returns {*}
   */
  filterUnitAnswers(answers) {
    if(answers.length === 0 )return;
    if (Answer.prototype.isPrototypeOf(answers[0]) ){
      return answers.filter(item=> item.unitID === this.unitID)
    }
  }

  /**
   *
   * @returns {*}
   */
  get lessons() {
    return this._lessons
  }

  /**
   *
   * @param array
   * @returns {boolean}
   */
  set lessons(array) {
    if (!array.isArray()) return false;
    this._lessons = array
  }

  /**
   *
   * @returns {*}
   */
  get options() {
    return this._options;
  }

  /**
   *
   * @param value
   */
  set options(value) {
    this._options = value;
  }

  /**
   *
   * @returns {*}
   */
  get unitID() {
    return this._unitID;
  }

  /**
   *
   * @returns {*|null}
   */
  get title() {
    return this._title;
  }

  /**
   *
   * @param value
   */
  set title(value) {
    this._title = value;
  }

  /**
   *
   * @returns {*|null}
   */
  get description() {
    return this._description;
  }

  /**
   *
   * @param value
   */
  set description(value) {
    this._description = value;
  }

}
