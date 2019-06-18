import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { interval } from 'rxjs';
import { WordsStorageService } from '../words-storage.service';
import { WordComponent } from '../word/word.component';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {

  wordArray: any[];

  @ViewChildren(WordComponent) wordChildren: QueryList<WordComponent>;

  constructor(private wordStorageService: WordsStorageService) {
  }

  ngOnInit() {
    this.getWordInterval();
  }

  getWordInterval() {
    const wordGetter$ = interval (1000);
    wordGetter$.subscribe(i => {
      this.wordArray = this.wordStorageService.getWords();
      // this.wordChildren.forEach(element => {
      //   console.log('', element.word);
      // });
    });
  }

}
