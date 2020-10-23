const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const MongoClient = require('mongodb').MongoClient;
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect('mongodb://localhost:27017/emaily-dev', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('ok'));

// const client = new MongoClient(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("emaily-dev").collection("users");
//     // perform actions on the collection object
//     console.log('Connected')
//     client.close();

// });


const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening to ${PORT}`));

//app installation //mongodb+srv://shahriar:<password>@api.9qfo6.mongodb.net/<dbname>?retryWrites=true&w=majority
//mongo shell mongo "mongodb+srv://api.9qfo6.mongodb.net/<dbname>" --username shahriar