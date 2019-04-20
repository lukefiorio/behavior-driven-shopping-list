describe('ShoppingList', function() {
  let bar = new ShoppingList();

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

describe('removeItem', function() {
  let bar = new ShoppingList();

  it('Should have a method named removeItem', function() {
    expect(bar.removeItem).to.be.a('function');
  });

  let fruit = new ShoppingListItem('celery', 'sour as hell');
  bar.addItem(fruit);
  bar.removeItem(fruit);

  it('Should remove the the last item in the items list if there is no parameters', function() {
    expect(bar.items).should.not.contain(fruit);
  });

  bar = new ShoppingList();
  bar.items.push('bad thing');

  it('Should throw an error if item is not a ShoppingListItem Object', function() {
    expect(bar.removeItem.bind(bar)).to.throw('Wrong');
  });

  bar = new ShoppingList();
  sake = new ShoppingListItem('Sake', 'The BEST');
  bar.addItem(fruit);
  bar.addItem(sake);

  it('Should remove item from ShoppingList.items if is a ShoppingListItem', function() {
    expect(bar.removeItem(sake)).should.not.contain(sake);
    expect(bar.removeItem(fruit)).should.not.contain(fruit);
  });
});

describe('render', function() {
  let bar = new ShoppingList();

  it('Should return concatenated results of the render function of the shopping list items', function() {
    let vegetables = new ShoppingListItem('celery', 'sour as hell');
    let sake = new ShoppingListItem('Sake', 'The BEST');
    bar.addItem(vegetables);
    bar.addItem(sake);

    expect(bar.render()).to.equal(
      '<ul><li class="completed_false"><span>celery</span><span>sour as hell.</span></li><li class="completed_false"><span>Sake</span><span>The BEST.</span></li></ul>',
    );
  });
});
