import {Router, Request, Response, NextFunction} from 'express';

class Home {
	constructor() {}

	public home(req: Request, res: Response, next: NextFunction) {
		res.render('home', {});
	}
}

export default Home