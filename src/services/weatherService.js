import axios from 'axios';
import { config } from '../config';

export function fetchCities(cityName, callback) {
  const { domain, endpoint, key } = config.api.weather;
  const requestUrl = `${domain}${endpoint.search}?key=${key}&q=${cityName}`;

  axios
    .get(requestUrl)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error.message);
      callback([]);
    });
}

export default {
  fetchCities,
};
