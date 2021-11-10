import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const listImagesMarup = createListImagesMarkup(galleryItems);



function createListImagesMarkup(images) {
    return images.map(({original, preview, description}) => `
    <li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img 
            class="gallery__image" 
            src=${preview} 
            alt=${description} 
            />
        </a>
    </li>
    `).join('');

}

galleryRef.insertAdjacentHTML('beforeend', listImagesMarup)

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt', 
    captionPosition: 'bottom', 
    captionDelay: 250 
});
