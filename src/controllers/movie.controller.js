const response_handler = require('../utilities/response_handler');
const error_handler = require('../utilities/error_handler');
const movie_service = require("../services/movie.service");
const authorization_handler = require('../utilities/authorization_handler');



exports.get_all = async (req, res) => {
	try {
		const movie_data = await movie_service.get_all();
		response_handler.set_success_response_and_save_activities({
			request: req,
			response: res,
			data: movie_data,
			statusCode: 200,
			message: 'Movie retrieved successfully!',
		});
	} catch (error) {
		error_handler.handle_controller_error({
			request: req,
			response: res,
			error: error,
		});
	}
};

exports.generate_token = async (req, res) => {
	try {
		const token = await authorization_handler.generate_token("FSMovies2021");
		response_handler.set_success_response_and_save_activities({
			request: req,
			response: res,
			data: token,
			statusCode: 200,
			message: 'Token generated successfully',
		});
	} catch (error) {
		error_handler.handle_controller_error({
			request: req,
			response: res,
			error: error,
		});
	}
};