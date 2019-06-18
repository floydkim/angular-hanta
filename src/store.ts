import { Action } from 'redux';
import { ScoreActions, DifficultyActions } from './app/app.actions';

export interface IAppState {
  score: number;
  creationRate: number;
  invationHop: number;
}

export const INITIAL_STATE: IAppState = {
  score: 5,
  creationRate: 1000,
  invationHop: 60
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch (action.type) {
    case ScoreActions.INIT_SCORE:
      return INITIAL_STATE;
    case ScoreActions.INCREASE_SCORE:
      return {
        score: lastState.score + 1,
        creationRate: lastState.creationRate,
        invationHop: lastState.invationHop
      };
    case ScoreActions.DECREASE_SCORE:
      return {
        score: lastState.score - 1,
        creationRate: lastState.creationRate,
        invationHop: lastState.invationHop
      };
    case ScoreActions.ZERO_SCORE:
      return {
        score: 0,
        creationRate: lastState.creationRate,
        invationHop: lastState.invationHop
      };
    case DifficultyActions.INCREASE_CREATION:
      return {
        score: lastState.score,
        creationRate: lastState.creationRate * 1.1,
        invationHop: lastState.invationHop
      };
  }

  return lastState;
}
