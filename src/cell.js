const CELL_WIDTH = 50; // In pixels
const CELL_PADDING = 2; // in pixels

export class Cell {
  constructor(row, col, value = 0) {
    this.row = row;
    this.col = col;
    this.isAlive = false;
  }
}
