import * as express from 'express';
import Home from './controllers/home';

class App {
	express: express.Application;
	home: Home;

	constructor() {
		this.express = express();
		this.setup();
		this.routes();
	}

	private setup(): void {
		this.express.use('/uploads', express.static(__dirname+'/uploads'));
		this.express.use(express.static(__dirname+'/public'));
		this.express.set('views', __dirname+'/views');
		this.express.set('view engine', 'ejs');

		this.home = new Home();
	}

	private routes() {
		this.express.route('/')
		.get(this.home.home);
	}
	
}

export default new App().express;