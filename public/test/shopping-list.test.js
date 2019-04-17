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

describe('addItem', function() {
  let bar = new ShoppingList();
  it('Should have a method named addItem', function() {
    expect(bar.addItem).to.be.a('function');
  });
  let sake = new ShoppingListItem('Sake', 'The BEST');
  bar.addItem(sake);
  it('Invoking addItem method should add item to Shopping List', function() {
    bar.items.should.contain(sake);
  });

  it('Should throw error if adding item that is not a Shopping List Item', function() {
    let bar = new ShoppingList();
    expect(bar.addItem.bind('pizza')).to.throw('Wrong');
  });
});

describe('removeItem', function(){
  let bar = new ShoppingList();
  it('Should have a method named removeItem', function(){
    expect(bar.removeItem).to.be.a('function');
  })

  let fruit = new ShoppingListItem('celary', 'sour as hell');
  bar.addItem(fruit);
  bar.removeItem(fruit);
  it('Should remove the the last item in the items list if there is no parameters, else it does nothing', function(){
    expect(bar.items).to.not.contain(fruit);
  });
  
  bar = new ShoppingList();
  bar.items.push('bad thing');
  it('Should throw an error if item is not a ShoppingListItem Object', function(){
    expect(bar.removeItem.bind(bar)).to.throw('Wrong');
  });
})