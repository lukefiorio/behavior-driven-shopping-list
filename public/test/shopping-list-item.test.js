const expect = chai.expect;
const assert = chai.assert;

let foo = new ShoppingListItem('Beer', 'Refreshing Beverage');

describe('Shopping Item', function() {
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
    expect(foo.name).to.equal('Beer');
  });

  it('should accept a description argument', function() {
    expect(foo.description).to.equal('Refreshing Beverage');
  });

  it('should have a function named check', function() {
    expect(foo.check).to.be.a('function');
  });
});

describe('Check Method', function() {
  foo.check();
  it('Check method should set isDone property to true', function() {
    expect(foo.isDone).to.equal(true);
  });
});
