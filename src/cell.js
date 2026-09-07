const CELL_WIDTH = 50; // Cells are square, so width is used for height as well

export class Cell {
  constructor(row, col, value = 0) {
    this.row = row;
    this.col = col;
    this.value = value;
    this.isAlive = false;
  }
}
