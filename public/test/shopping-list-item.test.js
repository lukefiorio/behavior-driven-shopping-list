const Shop = require('../js/shopping-list-item.js');
const ShoppingItem = Shop.ShoppingListItem;
const chai = require('chai');
const expect = chai.expect;

describe('Shopping Item', function() {
  it('should be a function', function() {
    expect(ShoppingItem).to.be.a('function');
  });

  it('should have a name', function() {
    const beer = new ShoppingItem('Beer');
    beer.name.should.equal('Beer');
  });
});
