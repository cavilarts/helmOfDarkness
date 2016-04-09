var restful = require('node-restful');

module.exports = function(app, route) {
	var rest = restful.model('user', app.models.users)
		.methods(['get', 'put', 'post', 'delete', 'head']);

	rest.register(app, route);

	return function(req, res, next) {
		next();
	}
}