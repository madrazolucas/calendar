// TODO: Move api key from this config file
const config = {
  api: {
    weather: {
      domain: 'http://api.weatherapi.com/v1',
      endpoint: {
        forecast: '/forecast.json',
        search: '/search.json',
      },
      key: '8c0b9e21fab24ef2970203802210803',
    },
  },
};

module.exports = {
  config,
};
