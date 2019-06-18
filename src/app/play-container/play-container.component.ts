import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WordsStorageService } from '../words-storage.service';
import { ScoreService } from '../score.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';

@Component({
  selector: 'app-play-container',
  templateUrl: './play-container.component.html',
  styleUrls: ['./play-container.component.css']
})
export class PlayContainerComponent implements OnInit {
  input: string;
  isPlaying: boolean;
  subscription: Subscription;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private wordsStorageService: WordsStorageService,
    private scoreService: ScoreService
  ) {
    this.input = '';
    this.subscription = this.ngRedux
    .select<number>('score')
    .subscribe(newScore => (this.isPlaying = newScore > 0));
  }

  ngOnInit() {
    console.log('play-container initial', this.wordsStorageService.getWords());
    this.scoreService.init();
  }

  onEnter(event: KeyboardEvent, value: string) {
    if (event.keyCode === 13 && value !== '') {
      this.wordsStorageService.deleteWord(value);
      this.input = '';
      console.log('after enter', this.wordsStorageService.getWords());
    }
  }

  onRestart() {
    this.scoreService.init();
    this.wordsStorageService.makeWords();
  }

  onStop() {
    this.scoreService.zero();
    this.wordsStorageService.emptyWords();
  }
}
