var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var mongoDB_url = "mongodb+srv://root:root@cluster0.2mm3p.mongodb.net/Temperature?retryWrites=true&w=majority";

var tempRouters = require('./routes/tempRouters');

app.set("view engine",'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extends:true})); 
app.use(tempRouters);

mongoose
    .connect(mongoDB_url,
    {  
        useNewUrlParser:true, 
        useCreateIndex:true, 
        useUnifiedTopology:true, 
        useFindAndModify:true
    }
).then(() => {
    app.listen(3000, () => {
        console.log('Connect to MongosDB!');
    })
}).catch(err => {
    console.log(err);
})

