export class Gate {
  gateName: string
  stage: string
  color: string

  constructor(gateName: string, stage: string, color: string) {
    this.gateName = gateName
    this.stage = stage
    this.color = color
  }
}