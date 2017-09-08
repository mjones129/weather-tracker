var express = require("express");
var request = require("request");
var app = express ();
var ejs = require("ejs");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res){
    request("http://api.openweathermap.org/data/2.5/weather?q=Tampa,us&appid=5063db8217f218b6ce83232444c4e9cd", function(error, response, body){
        if(!error && response.statusCode == 200) {
            var weather = JSON.parse(body);
            res.render("index", {weather: weather});
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("IRMA is UP");
})