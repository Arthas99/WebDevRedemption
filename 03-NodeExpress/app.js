/**
 * SETUP
 */

var express = require('express'), // Express Server framework
    app = express(), // We need to initialize our server
    bodyParser = require('body-parser'); // Parsing middleware for BODY of the request
    // https://www.npmjs.com/package/body-parser

// Support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Support json encoded bodies
app.use(bodyParser.json());


// Start our server
app.listen(3500);


/**
 * ROUTES
 */

 /**
 * param(req) HTTP Request from client
 * param(res) HTTP Response from server
 */

app.get('/', function (req, res) {

    /**
    * This is API request with VERB/METHOD GET 
    * You can just type in browser http:localhost:3500 
    * and you will get text Welcome to GET west
    */

    res.send("Welcome to GET West");
});

/**
 * param(req) HTTP Request from client
 * param(res) HTTP Response from server
 */

app.post('/', function (req, res) {
    /**
    * This is API request with VERB/METHOD POST 
    * If you send POST request to http:localhost:3500 
    *  you will get text Welcome to POST west
    */
    res.send("Welcome to POST West");

    /**
     * You can type in terminal curl -XPOST http://localhost:3500
     * or you can use POSTMAN extension on your browser
     * or any other tool
     */
});

/**
 * param(req) HTTP Request from client
 * param(res) HTTP Response from server
 */

app.post('/1', (req, res) => {
    res.send("Welcome to POST West 1");
    /**
    * This is API request with VERB/METHOD POST 
    * If you send POST request to http:localhost:3500/1
    *  you will get text Welcome to POST west
    */

});

/**
 * Include WildWest Menu
 */


const wanted = require("../02-NodeModuleExport/C-MultipleFunctionsExport/wantedMenu");


app.get('/wanted', function (req, res) {
    
    /**
    * If you send GET request to http:localhost:3500/wanted
    *  you will get all bandits from fake database
    */

    const allBandits = wanted.getAllWantedBandits();
    res.send({ data: JSON.stringify(allBandits) });
});

app.post('/default', function (req, res) {

    /**
    * If you send POST request to http:localhost:3500/default
    *  you will insert bandit with name Default
    * 
    * But here we called function addWantedBandits which require array of bandits
    */

    const allBandits = wanted.addWantedBandits(["Default"]);

    res.send("OK !");
});


app.post('/add', function (req, res) {


    /**
    * If you send POST request to http:localhost:3500/add
    * 
    * We added bandit and then returned all bandits from our fake db
    */


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



    /**
    * If you send get request to http:localhost:3500/search
    * 
    * To include name parameter in search we need to add query parameters
    * to our request
    * 
    * GET method receive parameters inside url
    * 
    * http:localhost:3500/search?name=buffalo&lastname=bill
    * 
    * URI: http:localhost:3500/search
    * Query string => name=buffalo&lastname=bill
    * Query params: name , lastname
    * 
    * On end of url we need to add ? to start query parameters
    * With & we add more query parameters
    */


    // console.log(req);
    const { name } = req.query;
    // console.log(name);

    const bandits = wanted.getAllWantedBandits();

    const bandit = bandits.find(x => x.bandit_name.includes(name));

    res.send({ data: bandit });

});

app.patch('/wanted/:name', function (req, res) {
    // console.log(req);

    /**
    * If you send PATCH request to http:localhost:3500/wanted/buffalo
    *  you will rename all bandits with name Buffalo inside fake db
    * 
    * It's possible to chain parameters too
    * /wanted/:name/:lastname
    * /wanted/:id
    */


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