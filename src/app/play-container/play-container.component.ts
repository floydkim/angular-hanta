import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WordsStorageService } from '../words-storage.service';
import { ScoreService } from '../score.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';

@Component({
  selector: 'app-play-container',
  templateUrl: './play-container.component.html'
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
  }

  ngOnInit() {
    this.subscription = this.ngRedux
      .select<number>('score')
      .subscribe(newScore => (this.isPlaying = newScore > 0));
    this.scoreService.init();
  }

  onEnter(event: KeyboardEvent, value: string) {
    if (event.key === 'Enter' && value !== '') {
      this.wordsStorageService.deleteWord(value);
      this.input = '';
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
