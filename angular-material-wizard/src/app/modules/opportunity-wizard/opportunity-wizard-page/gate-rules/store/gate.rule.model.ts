import { Gate } from "src/app/modules/stage-wizard/stage-wizard-page/store/gate.model";
import { Field } from "../../field-set-up/store/field.model";

export interface GateRule {
  field: Field,
  gate: Gate,
  logicOperator: Operator,
  mathOperator: Operator,
  stage: string,
  daysCounter: number,
}

interface Operator {
  label: string, 
  value: 'string'
}