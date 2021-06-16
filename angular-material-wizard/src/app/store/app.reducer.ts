import * as fromGate from '../modules/opportunity-wizard/opportunity-wizard-page/stage-settings/store/gate.reducer';
import * as fromField from '../modules/opportunity-wizard/opportunity-wizard-page/field-set-up/store/field.reducer';
import * as fromCustomAction from '../modules/opportunity-wizard/opportunity-wizard-page/action-set-up/store/custom-action.reducer';
import * as fromGateRule from '../modules/opportunity-wizard/opportunity-wizard-page/gate-rules/store/gate-rule.reducer';
import * as fromOpportunity from '../modules/opportunity-setup/opportunity-setup-page/store/opportunity-reducer';

export interface AppState {
  opportunities: fromOpportunity.State;
  gates: fromGate.State;
  fields: fromField.State;
  customActions: fromCustomAction.State;
  gateRules: fromGateRule.State;
}
