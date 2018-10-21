export class Day {
    blocks: number;
    status: string;
    constructor(size = 0, status = 'nothing') {
      this.blocks = size;
      this.status = status;
    }
  }