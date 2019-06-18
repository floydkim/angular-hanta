import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { NgRedux } from '@angular-redux/store';
import { ScoreActions } from './app.actions';
import { IAppState } from '../store';
import { IWord } from './types-definition';
import { ScoreService } from './score.service';
import { dictionary } from './word-dictionary';

@Injectable({
  providedIn: 'root'
})
export class WordsStorageService {
  words: IWord[];
  id: number;
  isPlaying: boolean;
  subscription: Subscription;

  constructor(
    private scoreService: ScoreService,
    private ngRedux: NgRedux<IAppState>,
    private actions: ScoreActions
    ) {
    this.id = -1;
    this.words = [];

    // this.makeWords();

    this.subscription = ngRedux
      .select<number>('score')
      .subscribe(newScore => (this.isPlaying = newScore > 0));
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
    if (this.isPlaying) {
      const randomIndex = Math.trunc(dictionary.length * Math.random());
      this.words.push({ id: ++this.id, text: dictionary[randomIndex], alive: true });
    }
  }

  makeWords() {
    const CREATION_RATE = this.ngRedux.getState().creationRate;
    this.isPlaying = this.ngRedux.getState().score > 0;

    const wordMaker = interval(CREATION_RATE);
    const subscription = wordMaker.subscribe(val => {
      if (!this.isPlaying) {
        this.words.forEach(word => {
          console.log('flushing....', word);
          word.alive = false;
        });
        this.emptyWords();
        subscription.unsubscribe();
      }
      this.updateWords();
      console.log(val, '(WSS) interval', this.words, Object.keys(this.words).length);
    });
  }

  emptyWords() {
    this.words = [];
  }
}
