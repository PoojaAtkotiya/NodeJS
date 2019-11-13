//console.log("Hii");

//console.log(process.argv);

// const command = process.argv[2];

// if (command === 'add') {
//     console.log("add");
// }

const express = require('express');

const app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
//test.com -- Home Page
//test.com/Calculator
//test.com/Student

app.listen(3000, () => {
});

app.set('view engine', 'hbs');

app.get('', (req, res) => {
    res.send("Home Page");
});

app.get('/Calculator', (req, res) => {
    res.render("calculator");
});

app.get('/Calculator/action', (req, res) => {
    var result;
    if (req.query.btn == 'add') {
        result = Number(req.query.tbA) + Number(req.query.tbB);
    } else if (req.query.btn == 'substract') {
        result = Number(req.query.tbA) - Number(req.query.tbB);
    }
    else if (req.query.btn == 'mult') {
        result = Number(req.query.tbA) * Number(req.query.tbB);
    }
    else if (req.query.btn == 'devide') {
        result = Number(req.query.tbA) / Number(req.query.tbB);
    }
    res.render('calculator', { result });
});

app.get('/Student', (req, res) => {
    res.send("Student Page");
});

app.get('*', (req, res) => {
    res.send("Page Not Found");
});

