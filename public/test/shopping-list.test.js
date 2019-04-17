let bar = new ShoppingList();

describe('ShoppingList', function() {
  it('ShoppingList should be a class', function() {
    expect(bar).to.be.instanceOf(ShoppingList);
  });
  it('ShoppingList should contain property "items"', function() {
    expect(bar).to.haveOwnProperty('items');
  });

  it('ShoppingList Items should initialize as empty array', function() {
    expect(bar.items).to.be.instanceOf(Array);
    expect(bar.items.length).to.equal(0);
  });
});
