import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { NgRedux } from '@angular-redux/store';
import { ScoreActions } from './app.actions';
import { IAppState } from '../store';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  score: number;
  subscription: Subscription;
  message: string;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: ScoreActions,
  ) {
    this.subscription = ngRedux
      .select<number>('score')
      .subscribe(newScore => (this.score = newScore));
    this.message = '';
  }

  init() {
    this.message = '';
    this.ngRedux.dispatch(this.actions.init());
    console.log('SCORE INITIALIZED!', this.ngRedux.getState().score, this.score);
  }

  increase() {
    this.message = '득점';
    this.ngRedux.dispatch(this.actions.increase());
    console.log('GOT SCORE!', this.ngRedux.getState().score, this.score);
  }

  decrease() {
    this.message = '감점';
    this.ngRedux.dispatch(this.actions.decrease());
    console.log('LOST SCORE!', this.ngRedux.getState().score, this.score);
  }

  zero() {
    this.message = '';
    this.ngRedux.dispatch(this.actions.zero());
  }
}
