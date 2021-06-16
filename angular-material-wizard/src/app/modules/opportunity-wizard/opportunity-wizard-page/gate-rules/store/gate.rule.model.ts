
import { Field } from "../../field-set-up/store/field.model";
import { Gate } from "../../stage-settings/store/gate.model";

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