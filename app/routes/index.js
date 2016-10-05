module.exports = function(app) {
	app.route('/').get(function(req,resp) {
		var ip = req.headers['x-forwarded-for'] ||
				req.connection.remoteAddress;

		var info = {
				'ip-address': ip,
				'language': req.headers['accept-language'].split(',')[0],
				'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
				};
		resp.send(info);
});
};