let bar = new ShoppingList();

describe('ShoppingList', function(){
  it ('ShoppingList should be a class', function(){
    expect(bar).to.be.instanceOf(ShoppingList);
  })
  it ('ShoppingList should contain property "items"', function(){
    expect(bar).to.haveOwnProperty('items');
  })
})