import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';

import { Word } from '../types-definition';

const INVADE_INTERVAL = 1000;
const INVADE_HOP = 60;
@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit, OnDestroy {

  @Input() word: Word;

  xpos: number;
  ypos: number;
  alive: boolean;
  invadeSubscrption: Subscription;

  constructor() {
    this.xpos = Math.trunc(Math.random() * 350); // 랜덤 x위치
    this.ypos = 0;
    this.alive = true;
  }

  ngOnInit() {
    this.invade();
  }

  ngOnDestroy() {
    this.alive = false;
    this.invadeSubscrption.unsubscribe();
    console.log('WORD DESTROYED!!!', this.word, this.alive, this.ypos);
  }

  invade() {
    const move = interval(INVADE_INTERVAL);
    this.invadeSubscrption = move.subscribe(i => {
      if (this.ypos >= 350) {
        // TODO: ypos말고 렌더된 엘리먼트의 바닥 좌표를 계산해서 기준삼아야함
        // 아니면 선 넘어가도 안보이게 잘 가리던지
        this.ngOnDestroy();
      }
      this.ypos += INVADE_HOP;
    });
  }

}
