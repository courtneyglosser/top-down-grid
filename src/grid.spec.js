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
});
