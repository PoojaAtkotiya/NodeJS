const fs = require('fs');

// const book = {
//     title: "Connecting the dots",
//     author: "Rashmi Bansal"
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);



//data in 1-json.json file
//{"title":"Connecting the dots","author":"Rashmi Bansal"}

// const dataBuffer = fs.readFileSync('1-json.json');
// const data = JSON.parse(dataBuffer.toString());

// console.log(data,data.title);

const jsonBuffer = fs.readFileSync('1-json.json');
const user = JSON.parse(jsonBuffer.toString());

user.name = 'Pooja';
user.age = 23;

const jsonUser = JSON.stringify(user);
fs.writeFileSync('1-json.json', jsonUser);


