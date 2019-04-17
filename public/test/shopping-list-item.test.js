const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();



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
  let foo = new ShoppingListItem('Beer', 'Refreshing Beverage');
  foo.check();
  it('Check method should set isDone property to true', function() {
    expect(foo.isDone).to.equal(true);
  });
});

describe('Uncheck Method', function() {
  let foo = new ShoppingListItem('Beer', 'Refreshing Beverage');
  foo.uncheck();
  it('Uncheck method should set isDone property to false', function() {
    expect(foo.isDone).to.equal(false);
  });
});

describe('Render Method', function() {
  let foo = new ShoppingListItem('Tacos', 'Tasty Cat');
  it('Render should be a method', function() {
    expect(foo.render).is.a('function');
  });

  it('Render method will construct and return an HTML formatted string', function() {
    expect(foo.render()).is.equal(`<li class="completed_false"><span>Tacos</span><span>Tasty Cat.</span></li>`);
  });

  it(`Render method should return "completed_true" if isDone is true`, function() {
    foo.check();
    expect(foo.render()).is.equal(`<li class="completed_true"><span>Tacos</span><span>Tasty Cat.</span></li>`);
  });
});
