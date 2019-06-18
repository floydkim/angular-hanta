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
      // TODO: 서비스로부터 단어 어레이를 폴링하고있는데
      // 대신 서비스에서 주기적으로 emit하는 단어를 받아볼 수 있을까?
      // 단어 생성 인터벌이 어차피 돌고있으니까.
    });
  }

}
