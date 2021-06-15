import { Action, createReducer, on } from '@ngrx/store';
import * as CustomActions from './custom-action.actions';
import { CustomAction } from "./custom-action.model";


export interface State {
  customActions: CustomAction[];
}

const initialState: State = {
  customActions: []
}

const _customActionReducer = createReducer(

  initialState,

  on(
    CustomActions.addCustomAction,
    (state, action) => ({
      ...state,
      customActions: state.customActions.concat({ ...action.customAction })
    })
  )
);

export const customActionReducer = (state: State, action: Action) => {
  return _customActionReducer(state, action);
}