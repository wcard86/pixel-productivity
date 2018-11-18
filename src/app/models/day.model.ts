export class Day {
  blocks: number;
  status: StatusTypeUnion;
  padding: boolean;
  constructor(size = 0, status = StatusType.Nothing, padding = false) {
    this.blocks = size;
    this.status = status;
    this.padding = padding;
  }
}

export enum StatusType {
  Completed = 'completed',
  Nothing = 'nothing',
  Vacation = 'vacation',
}

export type StatusTypeUnion = StatusType.Completed | StatusType.Nothing | StatusType.Vacation;
