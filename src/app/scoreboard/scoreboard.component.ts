import { Component, OnInit } from '@angular/core';

const INITIAL_SCORE = 5;

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  score: number;

  constructor() {
    this.score = INITIAL_SCORE;
  }

  ngOnInit() {
  }

}
