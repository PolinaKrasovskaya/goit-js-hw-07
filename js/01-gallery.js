import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const listImagesMarup = createListImagesMarkup(galleryItems);

function createListImagesMarkup(images) {
    return images.map(({original, preview, description}) => `
    <div class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
            />
        </a>
    </div>
    `).join('');

}

galleryRef.insertAdjacentHTML('beforeend', listImagesMarup)

galleryRef.addEventListener('click', onOpenLargeImage);

function onOpenLargeImage (event) {
    event.preventDefault();

    if(event.target.className !== 'gallery__image') {
        return;
    }

    const imageLarge = event.target.dataset.source;

    const instance = basicLightbox.create(`
        <img src=""/>
    `)

    instance.element().querySelector('img').src = imageLarge;
    instance.show();

    document.addEventListener('keydown', (event) => {
        if(event.key === 'Escape') {
            instance.close();
        }
    })
}