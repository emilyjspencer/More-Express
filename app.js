const express = require('express');
const app = express();
app.set('view engine', 'ejs');


app.get("/", function(req, res) {
    res.send("Testing, testing, 123")
});

app.get("/songs", function(req, res) {
    const songs = [
        {title: "Spirit", artist: "Beyonce Knowles"},
        {title: "Bad Guy", artist: "Billie Eilish"},
        {title: "Juice", artist: "Lizzo"},
        {title: "Dance Monkey", artist: "Tones and I"},
        {title: "I Like It", artist: "Cardi B"}
    ];
     res.render("songs.ejs", {songs: songs})
  });


app.listen(3000, function() {
    console.log("Listening for requests on Port 3000")
});