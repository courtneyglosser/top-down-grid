const Cell = require('./cell');

module.exports = class Grid {
  constructor() {
    this.rows = 4;
    this.cols = 4;
    this.cell = {
      width: 100,
      height: 100,
    };
    this.map = [0, 0, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 0];
  }

  draw(ctx) {
    const height = this.cell.height * this.rows;
    const width = this.cell.width * this.cols;
    ctx.strokeRect(0, 0, width, height);

    this.map.forEach((cellIdx, mapIdx) => {
      console.log('cellIdx: ', cellIdx);
      console.log('mapIdx: ', mapIdx);

      const cell = new Cell();

      cell.setCoords(mapIdx % 4, Math.floor(mapIdx / 4));

      if (mapIdx % 3 === 1) {
        ctx.fillStyle = 'rgb(200,0,0)';
      } else {
        ctx.fillStyle = 'rgb(0,0,0)';
      }

      cell.draw(ctx);
    });
    return;
  }
};
