import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

const loader = document.querySelector('.loader');

function renderGallery(images, container) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
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
    .join('');

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

function clearGallery(container) {
  container.innerHTML = '';
}

function showLoader() {
  if (loader) loader.classList.remove('is-hidden');
}

function hideLoader() {
  if (loader) loader.classList.add('is-hidden');
}

function showNotFoundError() {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
  });
}

function showFetchError(message) {
  iziToast.error({
    title: 'Error',
    message: message || 'Something went wrong. Please try again later.',
    position: 'topRight',
  });
}

export {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showNotFoundError,
  showFetchError,
};
