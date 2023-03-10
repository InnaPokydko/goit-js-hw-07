import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const itemsEl = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemsEl);
galleryContainer.addEventListener("click", onImgClickCreateModal);

function createGalleryItems(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onImgClickCreateModal(evn) {
  evn.preventDefault();
}
  
    const lightbox = new SimpleLightbox(".gallery a", {
        captionDelay: 250,
        captionsData: "alt",
    })


console.log(galleryItems);
