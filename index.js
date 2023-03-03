const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', (req, res) => {
    // Read the variables sent via POST from our API
    const {
        sessionId,

        serviceCode,
        phoneNumber,
        text,
    } = req.body;

    let response = '';
        console.log({text})
    if (text == '') {
        // This is the first request. Note how we start the response with CON
        response = `CON Welcome to Kiosks-Map, select your account
        1. Shop
        2. Sales Person`;
    } else if ( text == '1') {
        // Business logic for first level response
        response = `CON  Register Your Shop/Kiosk
        1.Shop Name`;
    } else if ( text == '2') {
        // Business logic for first level response
        // This is a terminal request. Note how we start the response with END
        response = `END Register as a sales person ${phoneNumber}`;
    } else if ( text == '1*1') {
        // // This is a second level response where the user selected 1 in the first instance
        // const accountNumber = 'ACC100101';
        // // This is a terminal request. Note how we start the response with END
        // response = `END Your account number is ${accountNumber}`;
        response = `CON Details,County-Area
        1. Shop Location
        `;
    } else if ( text == '1*1*1') {
        // Business logic for first level response
        response = `CON Details
        1. Shop Owner's Full Name`;

        

    }
      else if ( text == '1*1*1*1') {
        // Business logic for first level response
        response = `CON Details
        1. Shop Owner's Phone Number`;

        

    }
    else if ( text == '1*1*1*1') {
        // Business logic for first level response
        response = `CON Congratulations,
        `;

        

    }
     else if ( text == '1') {
        // Business logic for first level response
        // This is a terminal request. Note how we start the response with END
        response = `END Register as a sales person ${phoneNumber}`;

    }

    // Send the response back to the API
    res.set('Content-Type: text/plain');
    res.send(response);
});

app.listen(3000,()=>{
    console.log('App listening on port 3000')
})