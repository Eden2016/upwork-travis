import { createReducer, Action, on } from '@ngrx/store';
import * as GatesActions from './gate.actions';
import { Gate } from './gate.model';

export interface State {
  gates: Gate[];
}

const initialState: State = {
  gates: []
};

const _gateReducer = createReducer(

  initialState,

  on(
    GatesActions.addGate,
    (state, action) => ({
      ...state,
      gates: state.gates.concat({ ...action.gate })
    })
  ),

  on(
    GatesActions.deleteGate,
    (state, action) => ({
      ...state,
      gates: state.gates.filter(
        (_, index) => index !== action.index
      )
    })
  )
);

export const gateReducer = (state: State, action: Action) => {
  return _gateReducer(state, action);
};
