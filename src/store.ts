import { Action } from 'redux';
import { ScoreActions, DifficultyActions } from './app/app.actions';

export interface IAppState {
  score: number;
  creationRate: number;
  moveInterval: number;
  invasionHop: number;
}

export const INITIAL_STATE: IAppState = {
  score: 5,
  creationRate: 1000,
  invasionHop: 60,
  moveInterval: 1000
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch (action.type) {
    case ScoreActions.INIT_SCORE:
      return INITIAL_STATE;
    case ScoreActions.INCREASE_SCORE:
      return { ...lastState, score: lastState.score + 1 };
    case ScoreActions.DECREASE_SCORE:
      return { ...lastState, score: lastState.score - 1 };
    case ScoreActions.ZERO_SCORE:
      return { ...lastState, score: 0 };

    case DifficultyActions.INCREASE_CREATION:
      return { ...lastState, creationRate: 500 };
    case DifficultyActions.INCREASE_MOVE:
      return { ...lastState, moveInterval: 500 };
    case DifficultyActions.INCREASE_HOP:
      return { ...lastState, invasionHop: 90 };

    case DifficultyActions.DECREASE_CREATION:
      return { ...lastState, creationRate: 2000 };
    case DifficultyActions.DECREASE_MOVE:
      return { ...lastState, moveInterval: 2000 };
    case DifficultyActions.DECREASE_HOP:
      return { ...lastState, invasionHop: 15 };
  }

  return lastState;
}
