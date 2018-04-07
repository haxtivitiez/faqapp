import { Injectable } from '@angular/core';
import { Question } from '../model/Question';

@Injectable()
export class DataService {

  questions:Question[];

  constructor() { 
    // this.questions = [
    //   {
    //     text:'What is your name?',
    //     answer:'My name is Anuwat.',
    //     hide:true
    //   },
    //   {
    //     text:'What is your favorite color?',
    //     answer:'My favorite color is Blue.',
    //     hide:true
    //   },
    //   {
    //     text:'What is your favorite language?',
    //     answer:'My favorite language is JAVA.',
    //     hide:true
    //   }
    // ];
  }
  getQuestion(){
    if(localStorage.getItem('question') === null){
      this.questions = [];
    }else{
      this.questions = JSON.parse(localStorage.getItem('question'));
    }
    return this.questions;
  }
  addQuestion(question:Question){
    this.questions.unshift(question);

    let questions = [];

    if(localStorage.getItem('question') === null){
      questions = [];
      questions.unshift(question);
      localStorage.setItem('question',JSON.stringify(questions));
    }else{
      questions = JSON.parse(localStorage.getItem('question'));
      questions.unshift(question);
      localStorage.setItem('question',JSON.stringify(questions));
    }
  }
  removeQuestion(question:Question){
    for(let i=0;i<this.questions.length;i++){
      if(this.questions[i] === question){
        this.questions.splice(i,1);
        localStorage.setItem('question',JSON.stringify(this.questions));
      }
    }
  }
  
}
