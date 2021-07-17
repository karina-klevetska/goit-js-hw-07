const renderCollectionButton = document.querySelector('[data-action="render"]');
const clearCollectionButton = document.querySelector('[data-action="destroy"]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');

const collection = [];

const createBoxes = function (amount) {

    amount = input.value;

    let startElementSizeWidth = 20;
    let startElementSizeHeight = 20;

    collection.length = amount;
    
    for (let i = 0; i < collection.length; i += 1) {
        const element = document.createElement('div');
        collection[i] = element;
        
        boxes.append(element);

        element.style.width = (startElementSizeWidth += 10) + 'px';
        element.style.height = (startElementSizeHeight += 10) + 'px';
        
        element.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    };
};

const destroyBoxes = function () {
    while (boxes.firstChild) boxes.removeChild(boxes.firstChild);
    
};

renderCollectionButton.addEventListener('click', createBoxes);
clearCollectionButton.addEventListener('click', destroyBoxes);