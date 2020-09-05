const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=43a22a0cafca13db207277daa4995a42&query=' +
    latitude +
    ',' +
    longitude;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather api ', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          '.It is currently ' +
          body.current.temperature +
          ' degrees out . There is ' +
          body.current.precip +
          '% chance of rain . ' + 'Humidity is '+body.current.humidity
      );
    }
  });
};

module.exports = forecast;
