import axios from 'axios';

const API_KEY = '55943354-aedacad3df1b2c8419ab26500';
const BASE_URL = 'https://pixabay.com/api/';

const fetchImages = async userQuery => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: userQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
};

export { fetchImages };
