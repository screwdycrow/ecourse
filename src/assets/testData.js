export default {
  getUnits() {
    return [
      {
        unitID:0,
        title:'General concepts in C# ',
        description:'In this unit we will see how to use classes and objects'
      },{
        unitID:1,
        title:'Operators and data types in c#',
        description:'in this section we will get to know about operators and datatypes.'
      },{
        unitID:2,
        title:'OOP principles in c#',
        description:'In this unit we will see how to use classes and objects'
      },
    ]
  },
  getChapters() {
    return [
      {
        chapterID:0,
        title:'',
        unitID:0,
        chapterFormat:2,
        content: 'https://www.youtube.com/embed/pSiIHe2uZ2w'
      }
    ]
  },
  getQuestions() {
    return [
      {
        title:'question 1',
        description: 'what is c#',
        option1:'a framework',
        option2:'a slung for people who cannot see sharp',
        option3:'a fancy spaceship made by microsoft',
        option4:'programming language',
        correctAnswer:4,
        chapterID: 0
      },
      {
        title:'question 2',
        description: 'what is Monodevelop?',
        option1:'a framework',
        option2:'a slung for people who cannot see sharp',
        option3:'a fancy spaceship made by microsoft',
        option4:'an IDE for writing code stuff ',
        chapterID:0
      },
      {
        title:'question 3',
        description: 'What are you?',
        option1:'a dinosaur escaped from a google chrome',
        option2:'a framework',
        option3:'a fancy spaceship made by microsoft',
        option4:'i am a noob hooman.',
        chapterID:0
      }
    ]
  },
  getAnswers() {
    return [

    ]
  },
  getUsers() {
    return [
      {
        userID: 0,
        firstname: 'Dimitris',
        lastname: 'Tzilivakis',
        role: 2,
        username: 'screwdycrow'

      }
    ]
  }

}


