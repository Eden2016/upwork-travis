import { createReducer, Action, on } from '@ngrx/store';
import * as FieldActions from './field.actions'
import { Field } from './field.model'

export interface State {
  fields: Field[];
}

const initialState: State = {
  fields: []
}

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
    FieldActions.deleteField,
    (state, action) => ({
      ...state,
      fields: state.fields.filter((
        (_, index) => index != action.index
      ))
    })
  )
);

export const fieldReducer = (state: State, action: Action) => {
  return _fieldReducer(state, action);
}
