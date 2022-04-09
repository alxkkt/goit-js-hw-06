const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');

// const ingredientItemEl = document.createElement('li');
// ingredientItemEl.classList.add('item');
// ingredientItemEl.textContent = ingredient;

const createIngredientEl = function (ingredient) {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.classList.add('item');
  ingredientItemEl.textContent = ingredient;
  
  return ingredientItemEl;
}

const createIngredientMarkup = ingredients.map(createIngredientEl);
ingredientsListRef.append(...createIngredientMarkup);