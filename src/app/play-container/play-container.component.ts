import { Component, OnInit } from '@angular/core';
import { WordsStorageService } from '../words-storage.service';

@Component({
  selector: 'app-play-container',
  templateUrl: './play-container.component.html',
  styleUrls: ['./play-container.component.css']
})
export class PlayContainerComponent implements OnInit {
  input: string;

  constructor(private wordsStorageService: WordsStorageService) {
    this.input = '';
  }

  ngOnInit() {
    console.log('initial', this.wordsStorageService.getWords());
  }

  onEnter(event: KeyboardEvent, value: string) {
    if (event.keyCode === 13 && value !== '') {
      this.input = value;
      this.wordsStorageService.deleteWord(value);
      this.input = '';
      console.log('after enter', this.wordsStorageService.getWords());
    }
  }

}
