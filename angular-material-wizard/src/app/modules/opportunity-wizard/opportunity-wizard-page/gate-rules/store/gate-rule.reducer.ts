import { Action, createReducer, on } from '@ngrx/store';
import * as GateRuleActions from './gate-rule.actions';
import { GateRule } from './gate.rule.model';

export interface State {
  gateRules: GateRule[];
}

const initialState: State = {
  gateRules: []
}

const _gateRuleReducer = createReducer(

  initialState,

  on(
    GateRuleActions.addGateRule,
    (state, action) => ({
      ...state,
      gateRules: state.gateRules.concat({ ...action.gateRule })
    })
  ),

  on(
    GateRuleActions.deleteGateRule,
    (state, action) => ({
      ...state,
      gateRules: state.gateRules.filter(
        (_, index) => index !== action.index)
    })
  ),

  on(
    GateRuleActions.clearGateRuleState,
    (state, action) => ({
      ...state,
      gateRules: []
    })
  )
);

export const gateRuleReducer = (state: State, action: Action) => {
  return _gateRuleReducer(state, action);
}