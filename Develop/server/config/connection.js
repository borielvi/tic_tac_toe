const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://user1:password1@XXXX.mlab.com:XXXXX/heroku_XXXXX",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

module.export = mongoose.connection;