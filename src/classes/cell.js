

module.exports = class Cell {
  constructor() {
    this.width = 100;
    this.height = 100;
    this.x = 0;
    this.y = 0;
  }

  setCoords(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    const x = this.x * this.width;
    const y = this.y * this.height;
    console.log(`Drawing at (${x},${y})`);
    return ctx.fillRect(x, y, this.width, this.height);
  }
};
