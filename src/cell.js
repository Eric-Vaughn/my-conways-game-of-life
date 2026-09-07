const CELL_WIDTH = 50; // In pixels
const CELL_PADDING = 2; // in pixels

export class Cell {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.isAlive = false;
  }

  // Flips a dead cell into an alive cell and vice versa
  flipState() {
    this.isAlive ? (this.isAlive = false) : (this.isAlive = true);
  }
}
