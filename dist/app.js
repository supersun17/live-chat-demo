"use strict";
exports.__esModule = true;
var express = require("express");
var home_1 = require("./controllers/home");
var App = (function () {
    function App() {
        this.express = express();
        this.setup();
        this.routes();
    }
    App.prototype.setup = function () {
        this.express.use('/uploads', express.static(__dirname + '/uploads'));
        this.express.use(express.static(__dirname + '/public'));
        this.express.set('views', __dirname + '/views');
        this.express.set('view engine', 'ejs');
        this.home = new home_1["default"]();
    };
    App.prototype.routes = function () {
        this.express.route('/')
            .get(this.home.home);
    };
    return App;
}());
exports["default"] = new App().express;
