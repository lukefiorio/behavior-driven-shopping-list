class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem = function(item) {
    if (item instanceof ShoppingListItem) {
      this.items.push(item);
    } else {
      throw new Error('Wrong');
    }
  };
}
