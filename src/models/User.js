import Settings from '../assets/settings'
export default class User{

  constructor(options){

    this._userID = options.UserID;
    this._firstname =  options._firstname || null ;
    this._lastname = options._lastname || null;
    this._role = options.role|| null ;
    this._username = options.role || null;
    this._answers = options.answers || [];
  }
  get userID (){
    return this._userID;
  }
  get answers(){
    return this._answers;
  }
  set answers(answers){
    this._answers = answers;
  }

  get firstname() {
    return this._firstname;
  }

  set firstname(value) {
    this._firstname = value;
  }

  get lastname() {
    return this._lastname;
  }

  set lastname(value) {
    this._lastname = value;
  }

  get role() {
    return Settings.userTypes[this._role];
  }

  set role(value) {
    this._role = value;
  }

  get username() {
    return this._username;
  }

  set username(value) {
    this._username = value;
  }

}


