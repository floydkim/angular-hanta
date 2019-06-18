import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const INITIAL_SCORE = 5;

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  score: number;

  constructor() {
    this.score = INITIAL_SCORE;
  }

  getScore(): Observable<number> {
    return of(this.score);
  }

  decrease(): void {
    this.score -= 1;
    console.log('LOST SCORE!', this.score);
  }

  increase(): void {
    this.score += 1;
    console.log('GOT SCORE!', this.score);
  }
}
