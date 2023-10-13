const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const result = ingredients.map((elem)=> {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = elem;
  return li;
});
list.append(...result);

console.log(list)

// const li = `<li class='item'>'Potatoes'</li>`;
// const li1 = `<li class='item'>'Mushrooms'</li>`;
// const li2 = `<li class='item'>'Garlic'</li>`;
// const li3 = `<li class='item'>'Tomatos'</li>`;
// const li4 = `<li class='item'>'Herbs'</li>`;
// const li5 = `<li class='item'>'Condiments'</li>`;

// list.insertAdjacentElement('beforeend', li, li1, li2, li3, li4, li5)





// const li = document.createElement('li')
// li.textContent = 'Potatoes';
// li.classList.add('item');

// const li1 = document.createElement('li')
// li.textContent = 'Mushrooms';
// li.classList.add('item');

// const li2 = document.createElement('li')
// li.textContent = 'Garlic';
// li.classList.add('item');

// const li3 = document.createElement('li')
// li.textContent = 'Tomatos';
// li.classList.add('item');

// const li4 = document.createElement('li')
// li.textContent = 'Herbs';
// li.classList.add('item');

// const li5 = document.createElement('li')
// li.textContent = 'Condiments';
// li.classList.add('item');

// list.append(li, li1, li2, li3, li4, li5);


// console.log(li1);
