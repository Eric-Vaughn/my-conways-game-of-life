import { Cell } from "./Cell.js";

const FRAME_RATE = 8; // Frames per second

export class Grid {
  // Constructor
  constructor(rows = 0, cols = 0) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
  }

  // Draws the grid
  draw() {
    // TODO
  }
}
