const list = document.querySelectorAll('.item')
console.log('Number of categories:', list.length);

list.forEach((list) => {
    console.log('Category:', list.firstElementChild.textContent);
    console.log('Elements:', list.lastElementChild.children.length);
})