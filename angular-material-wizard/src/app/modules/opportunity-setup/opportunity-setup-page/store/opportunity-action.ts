import { createAction, props } from '@ngrx/store';
import { Opportunity } from './opportunity.model';

export const addOpportunity = createAction(
  '[Opportunity] Add Opportunity',
  props<{
    opportunity: Opportunity
  }>()
);

export const updateOpportunity = createAction(
  '[Opportunity] Update Opportunity',
  props<{
    opportunity: Opportunity,
    index: number
  }>()
);

export const deleteOpportunity = createAction(
  '[Opportunity] Delete Opportunity',
  props<{
    index: number
  }>()
);
