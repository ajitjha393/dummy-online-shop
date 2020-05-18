import { RequestHandler } from 'express';

export const get404Page: RequestHandler = (_req, res, _next) => {
	res.status(404).render('404', {
		pageTitle: '404 Page Not Found',
		path: null,
	});
};