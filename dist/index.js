"use strict";
exports.__esModule = true;
var http = require("http");
var debug = require("debug");
var app_1 = require("./app");
debug('ts-express:server');
var server = http.createServer(app_1["default"]);
server.listen(9000);
server.on('listening', function () {
    debug('Listening');
});
