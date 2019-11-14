const request = require('request');

const geoCode = (placeName, callback) => {
    const mapBoxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + placeName + ".json?access_token=pk.eyJ1IjoicG9vamEtYXRrb3RpeWEiLCJhIjoiY2syeW4zNGJ5MDlyazNqcDdheng5OG9vbSJ9.xZkMLcN8TpXxSElzDL0BiQ&limit=1";

    request({ url: mapBoxUrl, json: true }, (error, response) => {
        if (error) {
            //console.log("Unable to connect to weather service!")
            callback("Unable to connect to weather service!");
        } else if (response.body.features.length == 0) {
            //console.log("Unable to find location!")
            callback("Unable to find location!");
        } else {
            const data = response.body.features[0].center;
            const latitude = data[1];
            const longitude = data[0];
            //console.log("(latitude,longitude)", latitude, longitude);
            callback(undefined, {
                latitude: latitude,
                longitude: longitude,
                placeName: response.body.features[0].place_name
            })
        }

    });
}

const weather = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/e643c1b5e49a771d519445e897d2f685/" + latitude + "," + longitude + "?units=si";
    request({ url, json: true }, (error, response) => {
        if (error) {
            // console.log("Unable to connect to weather service!")
            callback("Unable to connect to weather service!");
        } else if (response.body.error) {
            // console.log("Unable to find location!")
            callback("Unable to find location!");
        } else {
            const data = response.body.currently;
            //console.log(response.body.daily.data[0].summary + "It is currently " + data.temperature + " degrees out. There is " + data.precipProbability + "% chance of rain.");
            const result = response.body.daily.data[0].summary + "It is currently " + data.temperature + " degrees out. There is " + data.precipProbability + "% chance of rain.";
            callback(undefined,result);
        }
    })
}

module.exports = {
    geoCode: geoCode,
    weather: weather
};