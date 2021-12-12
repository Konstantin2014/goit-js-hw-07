import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContayner = document.querySelector(".gallery");
galleryContayner.insertAdjacentHTML("beforeend", galleryMarkup(galleryItems));

function galleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
	<a class="gallery__link" href='${original}'>
	  <img
		 class="gallery__image"
		 src='${preview}'
		 data-source="large-image.jpg"
		 alt='${description}'
	  />
	</a>
	</div>`;
    })
    .join("");
}

galleryContayner.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  instance.element().querySelector("img").src = e.target.dataset.source;

  instance.show();
});

const instance = basicLightbox.create(`<img src="" />`, {
  onShow: (instance) => ("onShow", instance),
  onClose: (instance) => ("onClose", instance),
});
