import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ScoreService } from '../score.service';
import { NgRedux } from '@angular-redux/store';
import { DifficultyActions } from '../app.actions';
import { IAppState } from '../../store';
import { IWord } from '../types-definition';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit, OnDestroy {

  @Input() word: IWord;

  xpos: number;
  ypos: number;
  invadeSubscrption: Subscription;
  subscription: Subscription;

  constructor(
    public scoreService: ScoreService,
    private ngRedux: NgRedux<IAppState>,
    private actions: DifficultyActions,
  ) {
    this.xpos = Math.trunc(Math.random() * 310);
    this.ypos = 0;
  }

  ngOnInit() {
    console.log('워드컴포넌트 초기화 !!!');
    this.invade();
  }

  ngOnDestroy() {
    this.word.alive = false;
    this.invadeSubscrption.unsubscribe();
    console.log('WORD DESTROYED!!!', this.word);
  }

  invade() {
    const MOVE_INTERVAL = this.ngRedux.getState().moveInterval;
    const INVASION_HOP = this.ngRedux.getState().invasionHop;

    const move = interval(MOVE_INTERVAL);
    this.invadeSubscrption = move.subscribe(() => {
      const score = this.ngRedux.getState().score;
      if (score < 0) {
        this.ngOnDestroy();
      }
      if (this.ypos >= 350) {
        this.ngOnDestroy();
        this.scoreService.decrease();
      }
      this.ypos += INVASION_HOP;
    });
  }

}
