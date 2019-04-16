const expect = chai.expect;
const assert = chai.assert;

describe('Shopping Item', function() {
  let foo = new ShoppingListItem();
  it('ShoppingListItem should be a class', function() {
    expect(foo).to.be.instanceOf(ShoppingListItem);
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
