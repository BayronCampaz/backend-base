const express = require('express');
const router = express.Router();
var Request = require("request");


router.get('/', () => {

    Request.post({
        "headers": { "content-type": "application/json" },
        "url": "https://api-b2b.backenster.com/b1/api/v3/translate",
        "body": JSON.stringify({
            "from": "en_GB",
            "to": "es_CO",
            "data": "Welcome Developers",
            "platform": "api"
        })
    }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
        return JSON.parse(body);
    });

});

module.exports = router;