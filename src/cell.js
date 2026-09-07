export class Cell {
  constructor(row, col, value = 0) {
    this.row = row;
    this.col = col;
    this.value = value;
    this.isAlive = false; // Example for Game of Life
  }
}
