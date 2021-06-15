export const staticOptions = {
  stageList: [
    { value: 'verify', label: 'Verify' },
    { value: 'assign', label: 'Assign' },
    { value: 'track', label: 'Track' },
    { value: 'invoice', label: 'Invoice' },
    { value: 'exception', label: 'Exception' }
  ],
  colors: [
    { value: 'purple', label: 'purple' },
    { value: 'blue', label: 'blue' },
    { value: 'green', label: 'green' },
    { value: 'yellow', label: 'yellow' },
    { value: 'orange', label: 'orange' },
    { value: 'red', label: 'red' }
  ],
  operators: {
    math: [
      { value: 'add', label: '+' },
      { value: 'subtract', label: '-' }
    ],
    logical: [
      { value: 'greater', label: '>' },
      { value: 'less', label: '<' },
      { value: 'equals', label: '=' },
      { value: 'grOrEq', label: '>=' },
      { value: 'lsOrEq', label: '<=' }
    ]
  }
}
