const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// const Apiroutes = require('./routes/index');
// const db = require('./models/index');
const { PORT } = require('./config/server-config');
const { sendBasicEmail } = require('./services/email-service');

const setupAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    // app.use('/api',Apiroutes);

    app.listen(PORT , () => {
        console.log(`server started at port ${PORT}`);
        sendBasicEmail(
            'support@admin.com',
            'airlinebooking.project@gmail.com',
            'This is a testing email',
            "Hey, how are you, I hope you like the support"
        );
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter: true});
        }
    });
}

setupAndStartServer();