import { getData } from "./js/pixabay-api";
import { renderGallery } from './js/render-functions.js';

const form = document.querySelector(".form");
const galleryContainer = document.querySelector('.gallery');

const loader = document.querySelector('.loader');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    

    const query = event.currentTarget.elements['search-text'].value.trim();    
    

    if (query === "") {
        return;
    }

    galleryContainer.innerHTML = "";
    
    loader.classList.remove('is-hidden');

    try {
        const data = await getData(query);
        renderGallery(data.hits, galleryContainer);
    } catch (error) {
        console.error("Сталася помилка під час запиту:", error); 
    } finally {
        loader.classList.add('is-hidden');
        form.reset();
    }
});