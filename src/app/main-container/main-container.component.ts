import { Component, OnInit } from '@angular/core';
import { WordsStorageService } from '../words-storage.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  constructor(private wordStorageService: WordsStorageService) { }

  ngOnInit() {
  }

  onStart() {
    this.wordStorageService.makeWords();
  }
}
