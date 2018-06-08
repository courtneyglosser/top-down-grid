const { expect } = require('chai');

const Cell = require('./cell');

const myCell = new Cell();

describe('Hello Cell', () => {
  it('Should run tests', () => {
    expect(true).to.equal(true);
  });

  it('Should be an object', () => {
    expect(myCell).to.be.an.instanceOf(Object);
  });

  it('Should have (a number of) heigth pixels', () => {
    expect(myCell.height).to.not.equal(undefined);
    expect(typeof myCell.height).to.equal('number');
  });

  it('Should have (a number of) width pixels', () => {
    expect(myCell.width).to.not.equal(undefined);
    expect(typeof myCell.width).to.equal('number');
  });

  it('Should set x and y coords', () => {
    myCell.setCoords(1, 1);
    expect(myCell.x).to.equal(1);
    expect(myCell.y).to.equal(1);
  });

  it('Should return undefined', () => {
    const myCanvas = document.createElement('CANVAS');
    const ctx = myCanvas.getContext('2d');
    expect(myCell.draw(ctx)).to.equal(undefined);
  });
});
