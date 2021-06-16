import { CustomAction } from 'src/app/modules/opportunity-wizard/opportunity-wizard-page/action-set-up/store/custom-action.model';
import { Field } from 'src/app/modules/opportunity-wizard/opportunity-wizard-page/field-set-up/store/field.model';
import { GateRule } from 'src/app/modules/opportunity-wizard/opportunity-wizard-page/gate-rules/store/gate.rule.model';

export interface Opportunity {
  name: string;
  active: boolean;
  fields: Field[];
  actions: CustomAction[];
  gateRules: GateRule[];
  lineItems: any[]; // TODO: Create Line Items page and model
  stageSettings: any[]; // TODO: Modify Stage Settings page and create model
}
