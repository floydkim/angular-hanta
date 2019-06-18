import { Action } from 'redux';
import { ScoreActions } from './app/app.actions';

export interface IAppState {
  score: number;
}

export const INITIAL_STATE: IAppState = {
  score: 5,
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch (action.type) {
    case ScoreActions.INCREASE_SCORE:
      return { score: lastState.score + 1 };
    case ScoreActions.DECREASE_SCORE:
      return { score: lastState.score - 1 };
  }

  return lastState;
}