import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NgRedux } from '@angular-redux/store';
import { ScoreActions } from './app.actions';
import { IAppState } from '../store';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  score: number;
  subscription;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: ScoreActions,
  ) {
    this.subscription = ngRedux
      .select<number>('score')
      .subscribe(newScore => (this.score = newScore));
  }

  init() {
    this.ngRedux.dispatch(this.actions.init());
    console.log('SCORE INITIALIZED!', this.ngRedux.getState().score, this.score);
  }

  increase() {
    this.ngRedux.dispatch(this.actions.increase());
    console.log('GOT SCORE!', this.ngRedux.getState().score, this.score);
  }

  decrease() {
    this.ngRedux.dispatch(this.actions.decrease());
    console.log('LOST SCORE!', this.ngRedux.getState().score, this.score);
  }

  zero() {
    this.ngRedux.dispatch(this.actions.zero());
  }
}
