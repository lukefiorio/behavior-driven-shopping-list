let ourList = new ShoppingList();

function addToShoppingList(event) {
  let newItem = new ShoppingListItem(title.value, description.value);
  ourList.addItem(newItem);
  let listItems = ourList.render();
  content.innerHTML = listItems;

  let checkBoxes = document.getElementsByClassName('check');

  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('change', changeCheckedStatus);
  }
}

function changeCheckedStatus(idx, checkbox) {
  console.log('changed');
}

addShoppingListItemButton.addEventListener('click', addToShoppingList);
