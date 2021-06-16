import { Action, createReducer, on } from '@ngrx/store';
import * as OpportunityActions from './opportunity-action';
import { Opportunity } from './opportunity.model';


export interface State {
  opportunities: Opportunity[];
}

const initialState: State = {
  opportunities: []
};

const _opportunityReducer = createReducer(

  initialState,

  on(
    OpportunityActions.addOpportunity,
    (state, action) => ({
      ...state,
      opportunities: state.opportunities.concat({ ...action.opportunity })
    })
  )

);

export const opportunityReducer = (state: State, action: Action) => {
  return _opportunityReducer(state, action);
};
