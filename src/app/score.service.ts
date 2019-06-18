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

  increase(): void {
    this.ngRedux.dispatch(this.actions.increase());
    console.log('GOT SCORE!', this.ngRedux.getState().score, this.score);
  }

  decrease(): void {
    this.ngRedux.dispatch(this.actions.decrease());
    console.log('LOST SCORE!', this.ngRedux.getState().score, this.score);
  }
}
