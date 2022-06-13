
module.exports.set_success_response_and_save_activities = ({
	request,
	response,
	data,
	statusCode,
	message,
}) => {
	const apiResponse = {
		status: 'success',
		statusCode: statusCode,
		message: message,
		data: data,
	};
	return response.status(statusCode).send(apiResponse);
};

module.exports.set_failure_response = ({
	request,
	response,
	statusCode,
	message,
}) => {

	const apiResponse = {
		status: 'failure',
		message: message,
		request: {
			host: request.hostname,
			headers: request.headers,
			body: request.body,
			method: request.method,
			url: request.originalUrl,
			params: request.params,
		},
	};
	return response.status(statusCode).send(apiResponse);
};
