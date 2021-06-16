import { createAction, props } from '@ngrx/store';
import { Opportunity } from './opportunity.model';

export const addOpportunity = createAction(
  '[Opportunity] Add Opportunity',
  props<{
    opportunity: Opportunity
  }>()
);
