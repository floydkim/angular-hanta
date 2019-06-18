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
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from '../store';
import { ScoreActions } from './app.actions';

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
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [ScoreActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
