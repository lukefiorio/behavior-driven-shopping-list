const expect = chai.expect;
const assert = chai.assert;

describe('Shopping Item', function() {
  let foo = new ShoppingListItem();
  it('ShoppingListItem should be a class', function() {
    expect(foo).to.be.instanceOf(ShoppingListItem);
  });

  it('should have a name property', function() {
    expect(foo).to.haveOwnProperty('name');
  });

  it('should have a description property', function() {
    expect(foo).to.haveOwnProperty('description');
  });
});
