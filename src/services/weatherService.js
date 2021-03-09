import axios from 'axios';
import { config } from '../config';

export function fetchCities(cityName, callback) {
  const { domain, endpoint, key } = config.api.weather;
  const requestUrl = `${domain}${endpoint.search}?key=${key}&q=${cityName}`;

  axios
    .get(requestUrl, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
    .then((response) => {
      callback(response.data);
    })
    .catch(() => {
      callback([]);
    });
}

export function fetchWeather(city, callback) {
  const { domain, endpoint, key } = config.api.weather;
  const requestUrl = `${domain}${endpoint.forecast}?key=${key}&q=${city}`;

  axios
    .get(requestUrl, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
    .then((response) => {
      const conditionData = response.data.current.condition;
      callback({ description: conditionData.text, icon: conditionData.icon });
    })
    .catch(() => {
      callback(null);
    });
}

export default {
  fetchCities,
  fetchWeather,
};
