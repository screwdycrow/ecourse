export default class Question {

    constructor(options) {
        this.title = options.title;
        this.description = options.description;
        this.option1 = options.option1;
        this.option2 = options.option2;
        this.option3 = options.option3;
        this.option4 = options.option4;
        this.correctAnswer = options.correctAnswer;
        this.questionID = options.questionID;
        this.chapterID = options.chapterID;


    }
}
