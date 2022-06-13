const controller = require('../controllers/movie.controller');
const authenticate = require('../utilities/authorization_handler').authenticate;

module.exports = (app) => {
	const router = require('express').Router();

	router.get('/all', authenticate,  controller.get_all);
	router.get('/generate-token', controller.generate_token);
	

	app.use('/api/v1/movie', router);
};
