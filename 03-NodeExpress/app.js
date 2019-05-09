/**
 * SETUP
 */

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// support json encoded bodies
app.use(bodyParser.json());

app.listen(3500);


/**
 * ROUTES
 */

app.get('/', function (req, res) {
    res.send("Welcome to Get West");
});

app.post('/', function (req, res) {
    res.send("Welcome to Post West");
});

app.post('/1', (req, res) => {
    res.send("Welcome to Post West 1");
});

/**
 * Include WildWest Menu
 */


const wanted = require("../02-NodeModuleExport/C-MultipleFunctionsExport/wantedMenu");


app.get('/wanted', function (req, res) {
    const allBandits = wanted.getAllWantedBandits();
    res.send({ data: JSON.stringify(allBandits) });
});

app.post('/default', function (req, res) {
    const allBandits = wanted.addWantedBandits(["Default"]);

    res.send("OK !");
});


app.post('/add', function (req, res) {
    // console.log(req);
    // res.send("OK");

    const { body } = req;

    // console.log("BODY: ", body);

    // res.send(body);

    wanted.addWantedBandit(body);

    // const bandits = wanted.getAllWantedBandits();
    // res.send({ data: bandits });


    res.send({ data: wanted.getAllWantedBandits() });
});


app.get('/search', function (req, res) {
    // console.log(req);
    const { name } = req.query;
    // console.log(name);

    const bandits = wanted.getAllWantedBandits();

    const bandit = bandits.find(x => x.bandit_name.includes(name));

    res.send({ data: bandit });

});

app.patch('/wanted/:name', function (req, res) {
    // console.log(req);

    const { name } = req.params;

    let changedBandints = wanted.getAllWantedBandits();

    changedBandints.forEach(bandit => {
        if (bandit.bandit_name === name) {
            bandit.bandit_name = "JAILED";

        }
    });

    console.log(changedBandints);


    res.send({ data: changedBandints });

});