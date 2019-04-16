const expect = chai.expect;
const assert = chai.assert;
//const should = chai.should();

describe('Shopping Item', function() {
  //let ShoppingItem = new ShoppingListItem();
  it('should be a function', function() {
    expect(ShoppingItem).to.be.a('function');
  });

  it('should have a name', function() {
    let beer = new ShoppingItem('Beer');
    beer.name.should.equal('Beer');
  });

  it('should have a description', function() {
    let cabbage = new ShoppingItem('Cabbage', 'Refreshing Beverage');
    cabbage.description.should.equal('Refreshing Beverage');
  });
});
