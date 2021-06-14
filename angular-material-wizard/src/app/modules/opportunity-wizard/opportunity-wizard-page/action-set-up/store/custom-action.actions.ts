import { createAction, props } from '@ngrx/store';
import { CustomAction } from './custom-action.model';

export const addCustomAction = createAction(
  '[Custom Actions] Add Action',
  props<{
    customAction: CustomAction
  }>()
);