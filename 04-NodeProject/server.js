const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// require('dotenv').config();

const app = express();
/**
* Configure the app to use bodyParser
*/

// support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// support json encoded bodies
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://webdevredeption:webdevredeption@webdevredeption-l9eno.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });
const banditSchema = new mongoose.Schema({
    name: String,
    bounty: Number,
    currency: String,
    claimed: Boolean
})

const Bandit = mongoose.model("Bandit", banditSchema);


	/*
	 * Config server bodies and headers
	 */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', "GET, PUT, POST, PATCH, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, X-HTTP-Method-Override," +
        " Accept, Authorization, delivery-platform"
    );
    next();
});
    

app.listen(3500, function () {
    console.log(`Server is listening port 3500`);
});


app.post("/bandit", function (req, res) {
    const { body: data } = req;

    console.log(data);
    const newBandit = {
        name: data.name,
        bounty: data.bounty,
        currency: data.currency,
        claimed: false
    }
    Bandit.create(newBandit, function (err, created) {
        if (err) return handleError(err);
        res.send(created);
    });
});

app.get("/bandit", function(req,res){
   
    Bandit.find({}, function(err,bandits){ 
        if(err){
            res.send("NOT WORKING");
        }
        res.send(bandits)
    
    });

});

app.put("/bandit/:id", function(req,res){

    console.log(req.params.id);
    Bandit.findOneAndUpdate(req.params.id, req.body, function(err, updated){
        if(err){
            console.log(err);
            res.send(err);
            return;
        } 

        console.log(updated);
        res.send(updated);

    });
});

app.get("/search", function(req,res){

    const {query} = req;
    let searchObject = {};
    if(query.name){
     searchObject = Object.assign({}, {
         name: query.name
     });
    }

    Bandit.find(searchObject, function(err,bandits){ 
        if(err){
            res.send("NOT WORKING");
        }
        res.send(bandits)
    
    });
});

app.get("/searchAsync",async (req,res) => {
    const {query} = req;

    try {
        const bandits = Bandit.find({name: query.name });
        res.send({data : bandits});
    } catch (error) {
        console.log(error);
        res.send({data: []});
    }
});