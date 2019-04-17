let ourList = new ShoppingList();

function changeCheckedStatus(idx, checkbox) {
  if (checkbox.checked) {
    ourList.items[idx].check();
  } else if (!checkbox.checked) {
    ourList.items[idx].uncheck();
  }
}

function removedItemButtonClicked(idx) {
  ourList.removeItem(ourList.items[idx]);
  showStuff();
}

function showStuff() {
  let listItems = ourList.render();
  content.innerHTML = listItems;
  let checkBoxes = document.getElementsByClassName('check');
  let removeButton = document.getElementsByClassName('rmvButton');

  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('change', function() {
      changeCheckedStatus(i, checkBoxes[i]);
    });
  }

  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', function() {
      removedItemButtonClicked(i);
    });
  }
}

function addToShoppingList(event) {
  let newItem = new ShoppingListItem(title.value, description.value);
  ourList.addItem(newItem);
  showStuff();
}

addShoppingListItemButton.addEventListener('click', addToShoppingList);