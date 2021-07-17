const categories = document.querySelectorAll('.item');

console.log(`В списке ${categories.length} категории.`);

categories.forEach(category => console.log(`Категория: ${category.firstElementChild.textContent}. Количество элементов: ${category.querySelectorAll('li').length}`))