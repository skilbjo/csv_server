exports.index = function(req, res) {
	res.send('Hello world');
};

exports.csv = function(req, res){
	console.log(req);
	console.log(req.route);
	res.send(req.url);
	// res.send(JSON.stringify(req));
};

