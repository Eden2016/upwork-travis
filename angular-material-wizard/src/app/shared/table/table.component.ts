import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Gate } from 'src/app/modules/stage-wizard/stage-wizard-page/store/gate.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
  @Input() tableData: Gate[];
  @Input() tableColumns: string[];

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['gateName', 'stage', 'color', 'delAction'];

  constructor() {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource.data = changes.tableData.currentValue;
  }

}
