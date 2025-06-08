const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// const Apiroutes = require('./routes/index');
// const db = require('./models/index');
const { PORT } = require('./config/server-config');

const setupAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    // app.use('/api',Apiroutes);

    app.listen(PORT , () => {
        console.log(`server started at port ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter: true});
        }
    });
}

setupAndStartServer();