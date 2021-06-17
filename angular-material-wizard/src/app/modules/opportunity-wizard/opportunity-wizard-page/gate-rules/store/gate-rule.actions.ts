import { createAction, props } from '@ngrx/store';
import { GateRule } from './gate.rule.model';

export const addGateRule = createAction(
  '[Gate Rule] Add Gate Rule',
  props<{
    gateRule: GateRule
  }>()
);

export const deleteGateRule = createAction(
  '[Gate Rule] Delete Gate Rule',
  props<{
    index: number
  }>()
);

export const clearGateRuleState = createAction(
  '[Gate Rule] Clear Store'
);
