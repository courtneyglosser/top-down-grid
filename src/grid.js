

module.exports = class Grid {
  constructor() {
    this.rows = 4;
    this.cols = 4;
    this.cell = {
      width: 100,
      height: 100,
    };
  }

  draw(ctx) {
    const height = this.cell.height * this.rows;
    const width = this.cell.width * this.cols;
    return ctx.strokeRect(0, 0, width, height);
  }
};
