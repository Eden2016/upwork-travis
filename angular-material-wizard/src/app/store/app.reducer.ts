import * as fromGate from '../modules/opportunity-wizard/opportunity-wizard-page/stage-settings/store/gate.reducer';
import * as fromField from '../modules/opportunity-wizard/opportunity-wizard-page/field-set-up/store/field.reducer';
import * as fromCustom from '../modules/opportunity-wizard/opportunity-wizard-page/action-set-up/store/custom-action.reducer'
import * as fromGateRule from '../modules/opportunity-wizard/opportunity-wizard-page/gate-rules/store/gate-rule.reducer'

export interface AppState {
  gates: fromGate.State;
  fields: fromField.State;
  customActions: fromCustom.State;
  gateRules: fromGateRule.State;
}
