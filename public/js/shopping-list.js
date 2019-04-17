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

  removeItem = function(item) {
    let index = this.items.indexOf(item);
    if (index === -1 || this.items.length === 0) {
      throw new Error('Wrong');
    }
    if (!item) {
      this.items.pop();
    }
    if (!(item instanceof ShoppingListItem) && items.includes(item)) {
      throw new Error('Wrong');
    }

    // let index = this.items.indexOf(item);
    // if(!item && this.items.length >= 1){
    //   items.pop();
    // } else if (index > -1) {
    //   this.items.splice(index,1);
    // }
    // if (!item instanceof ShoppingListItem) {
    //   throw new Error('Wrong');
  };
}
// }
