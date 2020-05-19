const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use("/", express.static("Public"));


app.get("/", function(req, res) {
    res.render("homepage")
});

app.get("/songs", function(req, res) {
    const songs = [
        {title: "Spirit", artist: "Beyonce Knowles"},
        {title: "Bad Guy", artist: "Billie Eilish"},
        {title: "Juice", artist: "Lizzo"},
        {title: "Dance Monkey", artist: "Tones and I"},
        {title: "I Like It", artist: "Cardi B"}
    ];
     res.render("songs", {songs: songs})
});

app.get("/getname/:name", function(req, res) {
    const name = req.params.name;
    res.render("name", {getName: name})
    console.log(req)
});



app.listen(3000, function() {
    console.log("Listening for requests on Port 3000")
});