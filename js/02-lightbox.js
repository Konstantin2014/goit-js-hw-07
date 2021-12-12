import { galleryItems } from "./gallery-items.js";
// Change code below this line
// знаю что натупил, но понять где не могу

console.log(galleryItems);

const galleryContayner = document.querySelector(".gallery");
galleryContayner.classList.add(".gallery__item");

const galleryMarkup = galleryMarkup(galleryItems);
galleryContayner.insertAdjacentHTML("afterbegin", galleryMarkup);

function galleryMarkup(galleryItems) {
  return galleryItems.reduce(
    (acc, galleryItem) => (acc += galleryMarkup(galleryItem)),
    " "
  );
}
function galleryMarkup({ preview, original, description }) {
  const itemList = `<a class="gallery__item" href='${original}'>
  <img class="gallery__image" src='${preview}'  alt='${description}' />
  </a>`;
  return itemList;
}

galleryContayner.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
});

var lightbox = new SimpleLightbox(".gallery a", {
  widthRatio: 0.8,
  heightRatio: 0.8,
  captionsData: "alt",
  captionDelay: 250,
});
lightbox.on("show.simpleLightbox");
