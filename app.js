//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//port 40
const port = 3000;
const customerRoute = require('./routes/customerRoutes');
const itemRoute = require('./routes/itemRoutes');
const orderRoute = require('./routes/orderRoutes');


//adding middleware

app.use(cors());

app.use(bodyparser.json());

//connect mongodb
mongoose.connect('mongodb+srv://user1:abc@123@cluster0-jejw3.mongodb.net/foodzone?retryWrites=true',{
    useNewUrlParser:true
});

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb @ 27017');
});

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log(err);
    }
});

//testing server
app.get('/', (req, res)=>{
    res.send('foobar');
});

app.use('/api', customerRoute);
app.use('/api', itemRoute);
app.use('/api', orderRoute);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port,()=>{
    console.log('Server started at port: '+port);
});