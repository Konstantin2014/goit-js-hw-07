import { galleryItems } from './gallery-items.js';
// Change code below this line
const paletteContainer = document.querySelector('.gallery');
const cardsMarkup = createColorCardMarkup();
let currentIndex = 0;

function createColorCardMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
	<a class="gallery__link" href='${original}'>
	  <img
		 class="gallery__image"
		 src='${preview}'
		 data-source='${original}'
		 alt='${description}'
	  />
	</a>
	</div>`;
    })
    .join('');
}

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);
paletteContainer.addEventListener('click', onImageToCreateModal);

const options = {
  onShow: () => {
    console.log('open');
    window.addEventListener('keudown', pressKey);
  },
  onClose: () => {
    console.log('close');
    window.removeEventListener('keudown', pressKey);
  },
};

const instance = basicLightbox.create(`<img src="" />`, options);

function onImageToCreateModal(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  console.log(evt.target.nodeName);

  currentIndex = Number(evt.target.dataset.index);
  setImg(evt.target.dataset.source);
  instance.show();
}
function setImg(url) {
  instance.element().querySelector('img').src = url;
}
function pressKey({ code }) {
  switch (code) {
    case 'Escape':
      instance.close();
      break;
    case 'ArrowRight':
      currentIndex += 1;
      if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
      }
      console.log(currentIndex);
      setImg(galleryItems[currentIndex].original);
      break;
    case 'ArrowLeft':
      currentIndex -= 1;
      if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
      }
      setImg(galleryItems[currentIndex].original);
      break;
    default:
      console.log('Error');
      break;
  }
}

// function onEscClick(evt) {
//   if (evt.code === 'Escape') {
//     instance.close();
//     return;
//   }
// }
// galleryContayner.addEventListener('click', e => {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }

//   instance.element().querySelector('img').src = e.target.dataset.source;

//   instance.show();
// });

// const instance = basicLightbox.create(`<img src="" />`, {
//   onShow: instance => ('onShow', instance),
//   onClose: instance => ('onClose', instance),
// });
