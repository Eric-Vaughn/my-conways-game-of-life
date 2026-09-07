import { Cell } from "./Cell.js";

const FRAME_RATE = 8; // Frames per second

export class Grid {
  // Constructor
  constructor(rows = 10, cols = 10) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = Array.from({ length: rows }, (_, r) => 
                  Array.from({ length: cols }, (_, c) => new Cell(r, c)) );
  }

  // Draws the grid
  draw() {
    // TODO
  }
}
