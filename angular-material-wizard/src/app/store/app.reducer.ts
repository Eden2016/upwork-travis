import * as fromGate from '../modules/stage-wizard/stage-wizard-page/store/gate.reducer';
import * as fromField from '../modules/opportunity-wizard/opportunity-wizard-page/field-set-up/store/field.reducer'

export interface AppState {
  gates: fromGate.State;
  fields: fromField.State
}
