import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join('');
}

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);


galleryContainer.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target;

  if (!target.classList.contains('gallery__image')) return;


  const imageSrc = target.dataset.source;
  

  const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">
  `);

  instance.show();

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
});

console.log(galleryItems);
