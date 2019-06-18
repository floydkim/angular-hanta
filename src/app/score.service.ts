import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgRedux } from '@angular-redux/store';
import { ScoreActions, DifficultyActions } from './app.actions';
import { IAppState } from '../store';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  score: number;
  subscription: Subscription;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: ScoreActions,
    private difficultyActions: DifficultyActions
  ) {
    this.subscription = ngRedux
      .select<number>('score')
      .subscribe(newScore => {
        this.score = newScore;
        if (newScore < 10) {
          this.ngRedux.dispatch(this.difficultyActions.invasionHop.decrease());
        } else if (newScore >= 10) {
          this.ngRedux.dispatch(this.difficultyActions.invasionHop.increase());
        }
      });
  }

  init() {
    this.ngRedux.dispatch(this.actions.init());
  }

  increase() {
    this.ngRedux.dispatch(this.actions.increase());
  }

  decrease() {
    this.ngRedux.dispatch(this.actions.decrease());
  }

  zero() {
    this.ngRedux.dispatch(this.actions.zero());
  }
}
