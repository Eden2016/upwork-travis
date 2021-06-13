export interface DataSourceModel {
  key: string;
}

export interface ColumnDefinition {
  key: string,
  label: string,
  config?: {
    isAction: boolean,
    actions: string[]
  }
}