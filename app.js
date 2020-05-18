const express = require('express');
const app = express();


app.get("/", function(req, res) {
    res.send("Testing, testing, 123")

});


app.listen(3000, function() {
    console.log("Listening for requests on Port 3000")
});