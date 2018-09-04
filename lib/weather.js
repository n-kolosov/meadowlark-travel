'use strict';

exports.getWeatherData = function(){
  return {
    locations: [
      {
      name: 'Portland',
      forecastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
      iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
      weather: 'Cloudy',
      temp: '54.1 F (12.3 C)',
      },
      {
      name: 'Bend',
      forecastUrl: 'http://www.wunderground.com/US/OR/Bend.html',
      iconUrl: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
      weather: 'Partly cloudy',
      temp: '55.0 F (12.8 C)',
      },
      {
      name: 'Manzanita',
      forecastUrl: 'http://www.wunderground.com/US/OR/Manzanita.html',
      iconUrl: 'http://icons-ak.wxug.com/i/c/k/rain.gif',
      weather: 'Light rain',
      temp: '55.0 F (12.8 C)',
      },
    ],
  };
}
