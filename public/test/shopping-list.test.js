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

describe('addItem', function(){
  let bar = new ShoppingList();
  it ('Should have a method named addItem', function (){
    expect(bar.addItem).to.be.a('function');
  });
  let sake = new ShoppingListItem('Sake', 'The BEST');
  bar.addItem(sake);
  it ('Invoking addItem method should add item to Shopping List', function (){
    bar.items.should.contain(sake);
  });
});
