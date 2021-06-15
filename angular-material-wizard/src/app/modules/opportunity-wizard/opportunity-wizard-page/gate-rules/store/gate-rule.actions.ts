import { createAction, props } from '@ngrx/store';
import { GateRule } from './gate.rule.model';

export const addCustomAction = createAction(
  '[Gate Rule] Add Gate Rule',
  props<{
    gateRule: GateRule
  }>()
);