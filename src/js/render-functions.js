// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = null;

function renderGallery(images, container) {
  container.innerHTML = "";

  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message: 'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return; 
  }

  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="info-container">
            <p class="info-item"><b>Likes</b> <br>${likes}</p>
            <p class="info-item"><b>Views</b> <br>${views}</p>
            <p class="info-item"><b>Comments</b> <br>${comments}</p>
            <p class="info-item"><b>Downloads</b> <br>${downloads}</p>
          </div>
        </li>
      `
    )
    .join("");

  container.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export { renderGallery };