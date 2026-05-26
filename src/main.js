import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showNotFoundError,
  showFetchError,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const galleryContainer = document.querySelector('.gallery');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.currentTarget.elements['search-text'].value.trim();

  if (query === '') return;

  clearGallery(galleryContainer);
  showLoader();

  try {
    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      showNotFoundError();
      return;
    }

    renderGallery(data.hits, galleryContainer);
  } catch (error) {
    console.error(error);
    showFetchError(error.message);
  } finally {
    hideLoader();
    form.reset();
  }
});
