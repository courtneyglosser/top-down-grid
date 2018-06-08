const { expect } = require('chai');

const Grid = require('./grid');

const myGrid = new Grid();

describe('Hello Grid', () => {
  it('Should run tests', () => {
    expect(true).to.equal(true);
  });

  it('Should be an object', () => {
    expect(myGrid).to.be.an.instanceOf(Object);
  });

  it('Should have (a number of) rows', () => {
    expect(myGrid.rows).to.not.equal(undefined);
    expect(typeof myGrid.rows).to.equal('number');
  });

  it('Should have (a number of) columns', () => {
    expect(myGrid.cols).to.not.equal(undefined);
    expect(typeof myGrid.cols).to.equal('number');
  });

  it('Should have a map array for tiles', () => {
    expect(myGrid.map).to.not.equal(undefined);
    expect(myGrid.map).to.be.an.instanceOf(Array);
  });

  it('Should return undefined', () => {
    const myCanvas = document.createElement('CANVAS');
    const ctx = myCanvas.getContext('2d');
    expect(myGrid.draw(ctx)).to.equal(undefined);
  });
});
