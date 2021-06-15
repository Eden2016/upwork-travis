import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../store/app.reducer';
import * as GateRuleActions from '../store/gate-rule.actions';
import { ColumnDefinition } from 'src/app/shared/table/table-data.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { map } from 'rxjs/operators';
import { GateRule } from '../store/gate.rule.model';

@Component({
  selector: 'app-gate-rule-list',
  templateUrl: './gate-rule-list.component.html',
  styleUrls: ['./gate-rule-list.component.scss']
})
export class GateRuleListComponent implements OnInit {

  gateRuleList = [];

  gateRuleColumns: ColumnDefinition[] = [
    { key: 'fieldName', label: 'Field Name' },
    { key: 'value', label: 'Value' },
    { key: 'gateName', label: 'Gate' },
    { key: 'stageName', label: 'Stage' },
    { key: 'delete', label: 'Del', config: { isAction: true } }
  ];

  private subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.subscription = this.store
      .select('gateRules')
      .pipe(map(gateRuleState => gateRuleState.gateRules))
      .subscribe((gateRules: GateRule[]) => {
        this.prepareTableData(gateRules);
      })
  }

  onDeleteGateRule(index): void {
    // dispatch delete action
  }

  private prepareTableData(gateRules: GateRule[]): void {
    this.gateRuleList = [];

    gateRules.forEach((gateRule: GateRule) => {
      this.gateRuleList.push(
        {
          fieldName: gateRule.field.fieldName,
          gateName: gateRule.gate.gateName,
          stageName: gateRule.stage,
          value: this.formatGateRuleValue(gateRule)
        }
      )
    })
  }

  private formatGateRuleValue(gateRule: GateRule): string {
    let valueString = `${gateRule.logicOperator.label} Today`

    if (gateRule.daysCounter === 0) {
      return valueString;
    }

    return valueString + ' ' + gateRule.mathOperator.label + ' ' + gateRule.daysCounter;
  }

}
