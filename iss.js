const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      //response.statusuCode is the HTTP response code, checking for 200
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      //callback is passed as initial parameter, takes in error, null
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {

};

module.exports = { fetchMyIP, fetchCoordsByIP };


