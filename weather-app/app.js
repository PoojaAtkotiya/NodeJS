const geoCodeUtils = require('./utility/geocode');

// const mapBoxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicG9vamEtYXRrb3RpeWEiLCJhIjoiY2syeW4zNGJ5MDlyazNqcDdheng5OG9vbSJ9.xZkMLcN8TpXxSElzDL0BiQ&limit=1";

// request({ url: mapBoxUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to weather service!")
//     } else if (response.body.features.length == 0) {
//         console.log("Unable to find location!")
//     } else {
//         const data = response.body.features[0].center;
//         const latitude = data[1];
//         const longitude = data[0];
//         console.log("(latitude,longitude)", latitude, longitude);

//         const url = "https://api.darksky.net/forecast/e643c1b5e49a771d519445e897d2f685/" + latitude + "," + longitude + "?units=si";

//         request({ url, json: true }, (error, response) => {
//             if (error) {
//                 console.log("Unable to connect to weather service!")
//             } else if (response.body.error) {
//                 console.log("Unable to find location!")
//             } else {
//                 const data = response.body.currently;
//                 console.log(response.body.daily.data[0].summary + "It is currently " + data.temperature + " degrees out. There is " + data.precipProbability + "% chance of rain.");
//             }
//         })
//     }

// });

const address = process.argv[2];

if (!address) {
    console.log('Please provide address')
}
else {
    //geoCodeUtils.geoCode('Rajkot', (error, data) => {
    //geoCodeUtils.geoCode(address, (error, data) => {
    geoCodeUtils.geoCode(address, (error, { latitude, longitude, placeName }) => {
        //console.log("Data", data);
        if (error) {
            console.log("Error", error);
        }
        //geoCodeUtils.weather(data.latitude, data.longitude, (error, fData) => {
        geoCodeUtils.weather(latitude, longitude, (error, fData) => {
            if (error) {
                console.log("Error while forcast weather for given address : ", error);
            }
            else {
                console.log("location from geoCode : ", placeName);
                console.log("Data of forcast : ", fData);
            }
        });
    });
}