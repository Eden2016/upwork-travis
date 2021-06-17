import { createReducer, Action, on } from '@ngrx/store';
import { FieldListComponent } from '../field-list/field-list.component';
import * as FieldActions from './field.actions'
import { Field } from './field.model'

export interface State {
  fields: Field[];
}

const initialState: State = {
  fields: []
};

const _fieldReducer = createReducer(

  initialState,

  on(
    FieldActions.addField,
    (state, action) => ({
      ...state,
      fields: state.fields.concat({ ...action.field })
    })
  ),

  on(
    FieldActions.editField,
    (state, action) => ({
      ...state,
      fields: state.fields.map(
        ((field, index) => index === action.index ? { ...action.field } : field)
      )
    })
  ),

  on(
    FieldActions.deleteField,
    (state, action) => ({
      ...state,
      fields: state.fields.filter(
        (_, index) => index !== action.index
      )
    })
  ),

  on(
    FieldActions.clearFieldState,
    (state, action) => ({
      ...state,
      fields: []
    })
  )
);

export const fieldReducer = (state: State, action: Action) => {
  return _fieldReducer(state, action);
};
