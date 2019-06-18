import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class ScoreActions {
  static INCREASE_SCORE = 'INCREASE_SCORE';
  static DECREASE_SCORE = 'DECREASE_SCORE';

  increase(): Action {
    return { type: ScoreActions.INCREASE_SCORE };
  }

  decrease(): Action {
    return { type: ScoreActions.DECREASE_SCORE };
  }
}

@Injectable()
export class DifficultyActions {
  static INCREASE_CREATION = 'INCREASE_CREATION';
  static DECREASE_CREATION = 'DECREASE_CREATION';
  static INCREATE_HOP = 'INCREASE_HOP';
  static DECREASE_HOP = 'DECREASE_HOP';

  creationRate = {
    increase(): Action {
      return { type: DifficultyActions.INCREASE_CREATION }
    },
    decrease(): Action {
      return { type: DifficultyActions.DECREASE_CREATION }
    }
  };

  invasionHop = {
    increase(): Action {
      return { type: DifficultyActions.INCREATE_HOP }
    },
    decrease(): Action {
      return { type: DifficultyActions.DECREASE_HOP }
    }
  }
}