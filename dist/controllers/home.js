"use strict";
exports.__esModule = true;
var Home = (function () {
    function Home() {
    }
    Home.prototype.home = function (req, res, next) {
        res.render('home', {});
    };
    return Home;
}());
exports["default"] = Home;
