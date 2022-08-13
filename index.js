//Server load resources / libraries:
const express = require('express');
const dataStore = require('nedb'); 
const fs = require('fs');

//server configure properties:
const port = 3000;
const route = '/room1' //'where' on the server this is happening


//create server app:
const app = express();
app.listen(port, () =>console.log('listening at '+ port));
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//use these files: static files in 'public' folder, and use json w/ limit
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));



//create db file
const dataBase = new dataStore('database.db');
dataBase.loadDatabase();

app.get(route, (request, response)=>{
    console.log(request + 'recieved')
    dataBase.find({}, (err, data)=>{ //.find({}) ~= SELECT *
        if(err){console.log(err); response.end(); return;}
        response.json(data);
        response.end();
        return;
    });
   
})

app.post(route,(request, response)=>{
    const reqParams = request.params
    //prepare data for insert:
    console.log('request recieved:');
    const data = request.body;
    const timeStamp = Date.now()
    data.timeStamp = timeStamp;
    const payLoad = JSON.stringify(data);
    console.log('Sending response: '+ payLoad)
    if(!payLoad){
        console.error('400: Empty request'+ payLoad);
    }
    console.log('200: '+payLoad);
    //INSERT
    dataBase.insert(data)
    
    //Begin Response:
    //response.json(data)
    response.send(payLoad)
    //Close the response:
    response.end();
    return payLoad;
});

