let bar = new ShoppingList();

describe('ShoppingList', function(){
  it ('ShoppingList should be a class', function(){
    expect(bar).to.be.instanceOf(ShoppingList);
  })
})