let ourList = new ShoppingList();

function addToShoppingList(event) {
  let newItem = new ShoppingListItem(title.value, description.value);
  ourList.addItem(newItem);
  let listItems = ourList.render();
  content.innerHTML = listItems;
}

addShoppingListItemButton.addEventListener('click', addToShoppingList);
