const expect = chai.expect;
const assert = chai.assert;

describe('Shopping Item', function() {
  let foo = new ShoppingListItem('Beer', 'Refreshing Beverage');
  it('ShoppingListItem should be a class', function() {
    expect(foo).to.be.instanceOf(ShoppingListItem);
  });

  it('should have a name property', function() {
    expect(foo).to.haveOwnProperty('name');
  });

  it('should have a description property', function() {
    expect(foo).to.haveOwnProperty('description');
  });

  it('should have a isDone property', function() {
    expect(foo).to.haveOwnProperty('isDone');
  });

  it('should accept a name argument', function() {
    expect(foo.name).to.equal("Beer");
  });

  it('should accept a description argument', function() {
    expect(foo.description).to.equal('Refreshing Beverage');
  });
});
