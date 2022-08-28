const express = require('express');
const cors = require('cors');
require('dotenv').config();

//const {ApolloServer, gql} = require('apollo-server-express');
//const db = require('./db/db.js');
const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;
const app = express();


//const server = new ApolloServer({typeDefs, resolvers});
//server.applyMiddleware({app, path:'/api'});
//app.listen({port}, () => console.log('GraphQL Server running at http://localhost:${port}${server.graphqlpath}'));

const mongoose = require('mongoose');
mongoose.connect(DB_HOST);
var db = mongoose.connection;
db.once('open', function(callback){
      console.log('db connection successful.')
})

app.use(cors());
app.use(express.json());

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});


var user = require('./models/user');
var appointment = require('./models/appointment')
app.get('/checkAppointment', async (req, res) => {
    var postData = {
        advisor: req.body.advisor,
        password: req.body.password
    };
    return await db.collection('appointment').findOne({advisor: postData.advisor});
    //res.send('okay');
});

app.get('/deleteAppointment', async (req, res) => {
    var postData = {
        id: req.body.id,
        password: req.body.password
    };
    return await db.collection('appointment').deleteOne({id: postData.id});
    //res.send('okay');
});

app.post('/signup', function (req, res) {
    var postData = {
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        gender: req.body.gender,

        mobile_number: req.body.mobile_number,
        email: req.body.email,
        password: req.body.password
    };

    user.findOne({email: postData.email}, function (err, data) {
        if (data) {
            res.send('the email has been registered already.');
        }
        else {
            db.collection('user').insertOne(postData, function (err, data) {
                if (err) throw err;
                console.log('Signed up successfully!');
                res.redirect('/');
            })
        }
    })
});

app.post('/login', function (req, res) {
    var postData = {
        email: req.body.email,
        password: req.body.password
    };
    db.collection('user').findOne({email: postData.email,
                      password: postData.email
    }, function (err, data) {
        if (err) throw err;
        if (data) {
            res.send('Logged in successfully!');
        }
        else {
            res.send('email or password incorrect');
        }
    })
});

app.post('/makeAppointment', function (req, res) {
    var postData = {
        client: req.body.client,
        advisor: req.body.advisor,
        subject: req.body.subject,
        address: req.body.address,
        time: req.body.time,
        date: req.body.date,
        details: req.body.details
    };

    
    db.collection('appointment').insertOne(postData, function (err, data) {
        if (err) throw err;
            console.log('The appointment has been confirmed!');
            res.redirect('/');
    })
        
    
});
