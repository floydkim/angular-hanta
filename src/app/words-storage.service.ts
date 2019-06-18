import { Injectable } from '@angular/core';
import { WordComponent } from './word/word.component';
import { interval } from 'rxjs';

import { Word } from './types-definition';


// const dictionary = ['맥북', '한글', '윈도우', '후보', '앵귤러', '사과', '바나나', '수박', '커피', '아이스아메리카노', '자바칩프라푸치노', '리듬', '두뇌', '마술', '피아노', '기타', '베이스', '훈민정음', '이름'];
const dictionary = ['단', '어'];

const CREATE_RATE = 1000;

@Injectable({
  providedIn: 'root'
})
export class WordsStorageService {
  words: Word[];
  removeTarget: string;
  id: number;

  constructor() {
    this.id = -1;
    this.words = [];
    const wordMaker = interval(CREATE_RATE);
    const subscribe = wordMaker.subscribe(val => {
      this.updateWords();
      console.log(val, '(WSS) interval', this.words, Object.keys(this.words).length);
    });
  }

  getWords() {
    return this.words;
  }

  deleteWord(value: string) {
    // console.log('(WSS) delete ', value, Object.keys(this.words).length);
    // const targetIndex = this.words.indexOf(value);
    // if (targetIndex > -1) {
    //   this.words.splice(targetIndex, 1);
    // }
    // this.removeTarget = value;
  }

  updateWords() {
    const randomIndex = Math.trunc(dictionary.length * Math.random());
    this.words.push({ id: ++this.id, text: dictionary[randomIndex], alive: true });
  }
}
