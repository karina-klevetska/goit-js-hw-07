const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients')

const listElement = ingredients.map(ingredient => {
  const itemLi = document.createElement('li');
  itemLi.textContent = ingredient;
  return itemLi;
  
});

list.append(...listElement);