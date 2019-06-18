import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class ScoreActions {
  static INIT_SCORE = 'INIT_SCORE';
  static INCREASE_SCORE = 'INCREASE_SCORE';
  static DECREASE_SCORE = 'DECREASE_SCORE';
  static ZERO_SCORE = 'ZERO_SCORE';

  init(): Action {
    return { type: ScoreActions.INIT_SCORE };
  }

  increase(): Action {
    return { type: ScoreActions.INCREASE_SCORE };
  }

  decrease(): Action {
    return { type: ScoreActions.DECREASE_SCORE };
  }

  zero(): Action {
    return { type: ScoreActions.ZERO_SCORE };
  }
}

@Injectable()
export class DifficultyActions {
  static INCREASE_CREATION = 'INCREASE_CREATION';
  static DECREASE_CREATION = 'DECREASE_CREATION';
  static INCREASE_HOP = 'INCREASE_HOP';
  static DECREASE_HOP = 'DECREASE_HOP';
  static INCREASE_MOVE = 'INCREASE_MOVE';
  static DECREASE_MOVE = 'DECREASE_MOVE';

  creationRate = {
    increase(): Action {
      return { type: DifficultyActions.INCREASE_CREATION };
    },
    decrease(): Action {
      return { type: DifficultyActions.DECREASE_CREATION };
    }
  };

  invasionHop = {
    increase(): Action {
      return { type: DifficultyActions.INCREASE_HOP };
    },
    decrease(): Action {
      return { type: DifficultyActions.DECREASE_HOP };
    }
  };

  moveInterval = {
    increase(): Action {
      return { type: DifficultyActions.INCREASE_MOVE };
    },
    decrease(): Action {
      return { type: DifficultyActions.DECREASE_MOVE };
    }
  };
}
