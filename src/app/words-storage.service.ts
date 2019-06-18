import { Injectable } from '@angular/core';
import { WordComponent } from './word/word.component';
import { interval } from 'rxjs';

import { IWord } from './types-definition';
import { ScoreService } from './score.service';


const dictionary = ['맥북', '한글', '윈도우', '후보', '앵귤러', '사과', '바나나', '수박', '커피', '아이스아메리카노', '자바칩프라푸치노', '리듬', '두뇌', '마술', '피아노', '기타', '베이스', '훈민정음', '이름'];
// const dictionary = ['단', '어'];

const CREATE_RATE = 1000;

@Injectable({
  providedIn: 'root'
})
export class WordsStorageService {
  words: IWord[];
  removeTarget: string;
  id: number;

  constructor(private scoreService: ScoreService) {
    this.id = -1;
    this.words = [];
    const wordMaker = interval(CREATE_RATE);
    const subscription = wordMaker.subscribe(val => {
      this.updateWords();
      if (!this.scoreService.score) {
        subscription.unsubscribe();
        this.words = [];
      }
      console.log(val, '(WSS) interval', this.words, Object.keys(this.words).length);
    });
  }

  getWords() {
    return this.words;
  }

  deleteWord(value: string) {
    for (const word of this.words) {
      if (word.alive && word.text === value) {
        word.alive = false;
        this.scoreService.increase();
        break;
      }
    }
  }

  updateWords() {
    const randomIndex = Math.trunc(dictionary.length * Math.random());
    this.words.push({ id: ++this.id, text: dictionary[randomIndex], alive: true });
  }
}
