import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  score$: Observable<number>;
  score: number;

  constructor(public scoreService: ScoreService) {
  }

  ngOnInit() {
  }
}
