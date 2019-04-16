const Shop = require('../js/shopping-list-item.js');
const ShoppingItem = Shop.ShoppingListItem;
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

describe('Shopping Item', function() {
  it('should be a function', function() {
    expect(ShoppingItem).to.be.a('function');
  });

  it('should have a name', function() {
    let beer = new ShoppingItem('Beer');
    beer.name.should.equal('Beer');
  });

  it('should have a description', function() {
    let cabbage = new ShoppingItem('Cabbage', 'Refreshing Beverage');
    cabbage.description.should.equal('Refreshing Beverage')
  })
});
