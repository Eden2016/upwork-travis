import * as fromGate from '../modules/stage-wizard/stage-wizard-page/store/gate.reducer';
import * as fromField from '../modules/opportunity-wizard/opportunity-wizard-page/field-set-up/store/field.reducer';
import * as fromCustomActions from '../modules/opportunity-wizard/opportunity-wizard-page/action-set-up/store/custom-action.reducer'

export interface AppState {
  gates: fromGate.State;
  fields: fromField.State;
  customActions: fromCustomActions.State;
}
