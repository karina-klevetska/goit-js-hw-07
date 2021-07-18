const images = [
{
url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
alt: 'White and Black Long Fur Cat',
},
{
url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
},
{
url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
alt: 'Group of Horses Running',
},
];

const gallery = document.querySelector('#gallery');

const elementsArr = [];

const makeGallery = function (images) {
    let galleryEl = '';
    for (let { url, alt } of images) {
        galleryEl = `<li><img src = "${url}" alt = "${alt}"></li>`;
        elementsArr.push(galleryEl);
    };

    gallery.insertAdjacentHTML('beforeend', elementsArr.join(''))
}

makeGallery(images);