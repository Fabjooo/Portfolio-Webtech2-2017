"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Weather = function () {
    function Weather(options) {
        _classCallCheck(this, Weather);

        console.info("We are in the constructor");

        //set default values
        this.weather = "";
        this.latitude = "";
        this.longitude = "";
        this.apiKey = options.apiKey;
        this.apiKeyBeer = options.apiKeyBeer;
        this.temperatuur = "";
        this.beer = "";
        this.beerImg = "";
        this.init();
    }

    _createClass(Weather, [{
        key: "init",
        value: function init() {
            console.info("The init function, kicks things off");
            this.getMyLocation();
            //this.showBeer();
        }
    }, {
        key: "getMyLocation",
        value: function getMyLocation() {
            var that = this;
            console.info("Getting my location");
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
                that.latitude = position.coords.latitude; //this gaat hier verwijzen naar de navigator. .. functie ipv de hele app daarom var that = this; en that.latitude
                that.longitude = position.coords.longitude;
                that.getWeatherFromCacheOrStorage();
            });
        }
    }, {
        key: "getWeatherFromCacheOrStorage",
        value: function getWeatherFromCacheOrStorage() {
            if (localStorage.getItem('WeatherTemp') != null) {
                this.updateUI();
            } else {
                var that = this;
                console.info("Getting current weather data");
                // GET request https://api.darksky.net/forecast/[key]/[latitude],[longitude]
                var call = "https://api.darksky.net/forecast/" + this.apiKey + "/" + this.latitude + "," + this.longitude + "?units=ca";
                console.log(call);
                $.ajax({
                    method: "GET",
                    url: call,
                    dataType: "jsonp"
                }).done(function (response) {
                    console.log(response);
                    that.weather = response.currently;
                    that.storeInCache();
                    that.updateUI();
                });
            }
        }
    }, {
        key: "updateUI",
        value: function updateUI() {
            this.getFromCache();
            console.log("updating UI");
            var color;
            console.log(this.temperatuur);
            if (this.temperatuur < 15) {
                color = "#2980B9";
            } else {
                color = "#e67e22";
            }
            $("#app").css("background-color", color);
            $("#app").append("<h1>" + Math.round(this.temperatuur) + "&deg;</h1>");

            switch (true) {
                case this.temperatuur < 10:
                    this.beer = "Duvel";
                    this.beerImg = "http://www.trollekelder.be/cafe/wp-content/uploads/2013/06/duvel.jpg";
                    break;
                case this.temperatuur > 10 && this.temperatuur < 12:
                    this.beer = "Maes";
                    this.beerImg = "http://www.bierpassie.com/beericon/575/medium/1375194292.jpg";
                    break;
                case this.temperatuur > 12 && this.temperatuur < 16:
                    this.beer = "Heineken";
                    this.beerImg = "http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/brand/hero/heineken.jpg?itok=bORtwyPr";
                    break;
                case this.temperatuur > 16 && this.temperatuur < 20:
                    this.beer = "Leffe Blond";
                    this.beerImg = "https://pilsje.files.wordpress.com/2012/06/leffe_blonde.jpg";
                    break;
                case this.temperatuur > 20 && this.temperatuur < 24:
                    this.beer = "Jupiler";
                    this.beerImg = "http://www.madeinvlaamsbrabant.be/wp-content/uploads/2016/10/jupiler0.jpg";
                    break;
                case this.temperatuur > 24 && this.temperatuur < 28:
                    this.beer = "Grimbergen Blond Zomer";
                    this.beerImg = "http://www.grimbergenbier.be/img/localized/nl-be/grim_blond.png";
                    break;
                case this.temperatuur > 28 && this.temperatuur < 35:
                    this.beer = "Kriek";
                    this.beerImg = "https://www.horecasupport.be/admin_assets/content/content_files/public/downloads/bv_downloads/packshots/kriek_met_fles.jpg";
            }

            $("#beer").append("<h2>Drink <span>" + this.beer + "</span> dit maakt je dag nog beter!</h2>");
            $("#beer").append("<img src=\"" + this.beerImg + "\"></img>");
        }
    }, {
        key: "storeInCache",
        value: function storeInCache() {
            console.log(this.weather.temperature);
            localStorage.setItem('WeatherTemp', this.weather.temperature);
            console.log("storing in cache");
        }
    }, {
        key: "getFromCache",
        value: function getFromCache() {
            this.temperatuur = localStorage.getItem('WeatherTemp');
            console.log(this.temperatuur);
        }

        /*showBeer(){
            console.info("Getting beer");
            // GET request https://api.darksky.net/forecast/[key]/[latitude],[longitude]
            console.log(this);
            const callBeer = `http://api.brewerydb.com/v2/category/5?key=${this.apiKeyBeer}`;
            console.log(callBeer + " call gelukt"); //check of de call is gelukt
            $.ajax({
                method: "GET",
                url: callBeer,
                dataType: "jsonp"
            }).done(function(response){
                $("#app").css("background-color", "#add8e6");
                //console.log(response.name);
                //this.beers = response['name'];
                //console.log(this.beers);
                //$("#beer").append(`<h2>${(this.beers)};</h2>`);
            });
        }*/

    }]);

    return Weather;
}();

var options = {
    apiKey: "cc8223101c7b859c5b169894f8a0f59b",
    apiKeyBeer: "a8855e4376640ed62d86f5eab16957bf"
};
var App = new Weather(options);

//# sourceMappingURL=app.es5.js.map