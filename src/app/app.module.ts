import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { PlayContainerComponent } from './play-container/play-container.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { WordComponent } from './word/word.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    PlayContainerComponent,
    GameScreenComponent,
    ScoreboardComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
