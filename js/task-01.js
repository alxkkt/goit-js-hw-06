const categoryItemsRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItemsRef.length}`);

const elementsRef = document.querySelectorAll('h2');
elementsRef.forEach(element => {
    console.log(`Category: ${element.textContent}`);
    console.log(`Elements: ${element.nextElementSibling.children.length}`)
})

