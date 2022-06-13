const { ServiceError } = require('./error_handler');

module.exports.log = (message) => {
	const dateTime = new Date().toISOString();
	var temp_str = dateTime + '> ' + message;
	console.log(' ');
	console.log(temp_str);
};

module.exports.log_error = (message, code, details) => {
	const dateTime = new Date().toISOString();
	var err = {
		message: message,
		code: code,
		details: details,
	};
	var temp_str = dateTime + '> ' + JSON.stringify(err);
	console.log(' ');
	console.log(temp_str);
};

