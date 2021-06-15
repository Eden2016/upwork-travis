import { Field } from "../../field-set-up/store/field.model";

export interface CustomAction {
  field: Field,
  actionName: string,
  dateType: string,
  operator: { label: string, value: 'string' },
  stage: string,
  daysCounter: number
}