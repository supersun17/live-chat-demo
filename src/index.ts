import * as http from 'http';
import * as debug from 'debug';
import * as redis from 'redis';
import app from './app';

debug('ts-express:server');

const server = http.createServer(app);
server.listen(9000);
server.on('listening', function(){
    debug('Listening');
});