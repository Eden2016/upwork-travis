import { Gate } from "src/app/modules/stage-wizard/stage-wizard-page/store/gate.model";
import { Field } from "../../field-set-up/store/field.model";

export interface GateRule {
  field: Field,
  gate: Gate,
  logicOperator: string,
  mathOperator: string,
  stage: string,
  daysCounter: number,
}